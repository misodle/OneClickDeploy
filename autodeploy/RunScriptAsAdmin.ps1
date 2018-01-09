<#
.SYNOPSIS

RunScriptAsAdmin

Runs a powershell script as administrator, avoiding command line quoting impossibilities!

Also presumes that ExecutionPolicy does not allow script execution, so this script must be executed as in the example.

Running a script as admin requires start-process -Verb runas.
When powershell is run with start-process it does not inherit the current directory nor does it receive the WorkingDirectory  from Start-Process. So the script file must use the complete path and thus it is likely to have spaces in it and must be quoted.

The quoted script path and the optionally quoted parameters are passed into the script without parentheses.
Thus the script and each parameter must be re-parenthesised. This is why this script is required.

Parameters which start with a semi-colon - ; - are NOT re-parenthesized so that they are executed as powershell commands

.EXAMPLE
    powershell -ExecutionPolicy Bypass ".\RunScriptAsAdmin.ps1 'your full path to your script' as many arguments as you require for your script"

    Run commands after the script executes...
    powershell -ExecutionPolicy Bypass ".\RunScriptAsAdmin.ps1 'your full path to your script' arg1 'arg2' ';pause' ';dir' 'c:\program files (x86)' ';pause'"
#>

# Ensure the script file is passed and exists

if ($args.length -gt 0) {
    write-output "Script is $($args[0])"
    if ( !(Test-Path($args[0]) ) ) {
        Write-Error("Script file $($args[0]) does not exist")
        return
    }
    $Script = "'$($args[0])'"
} else {
    write-error "Full path to Script file must be provided"
    return
}

# Re-parenthesize a variable number of arguments

for ($i=1 ; $i -lt $args.length ; $i++)
{
    write-output "Arg $i) $($args[$i])"
    if ( $args[$i][0] -eq ';'){
        $Arguments += " $($args[$i])"
    } else {
        $Arguments += " '$($args[$i])'"
    }
}

try {
    $LogFile = Join-Path $Env:TEMP 'RunScriptAsAdminLog.txt'
    $LogFileQuoted = "'$LogFile'"

    # Get the current directory so that it may be passed to the script
    # Cannot set using the -WorkingDirectory parameter because RunAs does
    # not allow it.

    $WorkingDirectory = Get-Location
    $WorkingDirectoryQuoted = "'$WorkingDirectory'"

    $CommandLine = "-ExecutionPolicy Bypass & $Script $LogFileQuoted $WorkingDirectoryQuoted $arguments"
    Write-Output("Executing $Commandline")
    Start-Process powershell -argument $CommandLine -wait -passthru -Verb RunAs
} catch {
	"Exception caught on return from RunAs"
    $e = $_.Exception
    $e|format-list -force
    cmd /c exit -1    #Set $LASTEXITCODE
    return
} finally {
    # Now we are back in the caller's context the log file can be redirected to stdout so the caller can grab it
    Get-Content -Path $LogFile -Raw | Out-Default
}

