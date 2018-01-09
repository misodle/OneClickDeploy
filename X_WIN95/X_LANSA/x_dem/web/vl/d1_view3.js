// --------------------
// -- View: D1_VIEW3 --
// --------------------
LANSA.addComponent(
{
   id: "D1_VIEW3", 
   nm: "D1_View3", 
   ot: "wv", 
   tp: "View", 
   de: "View 3", 
   tl: 14020001
},

// ----------------
// -- Definition --
// ----------------
function( Lansa, objectId, undefined )
{
   // --------------------------
   // -- Component Definition --
   // --------------------------
   var COM_OWNER = Lansa.registerClass( objectId,
   {
      an: "PRIM_VIEW", 

      // -----------------
      // -- Constructor --
      // -----------------
      co: function()
      {
         // --------------------------
         // -- Ancestor Constructor --
         // --------------------------
         COM_OWNER.Ancestor.call( this );

         // ---------------------------
         // -- Component Definitions --
         // ---------------------------
         //
         // DEFINE_COM Class(#PRIM_TBLO) Name(#Layout1)
         //
         var LAYOUT1 = this.createReference( "LAYOUT1", "PRIM_TBLO" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Row) Name(#Layout1Row1) DisplayPosition(1) Parent(#Layout1)
         //
         var LAYOUT1ROW1 = this.createReference( "LAYOUT1ROW1", "PRIM_TBLO", "Row" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Column) Name(#Layout1Column1) DisplayPosition(1) Parent(#Layout1)
         //
         var LAYOUT1COLUMN1 = this.createReference( "LAYOUT1COLUMN1", "PRIM_TBLO", "Column" );

         //
         // DEFINE_COM Class(#PRIM_TBLO.Item) Name(#Layout1Item1) Column(#Layout1Column1) Manage(#Label) Parent(#Layout1) Row(#Layout1Row1)
         //
         var LAYOUT1ITEM1 = this.createReference( "LAYOUT1ITEM1", "PRIM_TBLO", "Item" );

         //
         // DEFINE_COM Class(#PRIM_MD.Label) Name(#Label) Caption('VIEW 3') DisplayPosition(1) Height(450) IconHeight(0) Left(0) Parent(#COM_OWNER) TabPosition(1) TabStop(False) Top(0) Width(300) IconAlignment(TopCenter) ThemeDrawStyle('Heading1')
         //
         var LABEL = this.createReference( "LABEL", "PRIM_MD", "Label" );

         // -------------------------
         // -- Initialize #LAYOUT1 --
         // -------------------------
         LAYOUT1.initialize();

         // -----------------------------
         // -- Initialize #LAYOUT1ROW1 --
         // -----------------------------
         LAYOUT1ROW1.setDisplayPosition( 1 );
         LAYOUT1ROW1.setParent( LAYOUT1 );
         LAYOUT1ROW1.initialize();

         // --------------------------------
         // -- Initialize #LAYOUT1COLUMN1 --
         // --------------------------------
         LAYOUT1COLUMN1.setDisplayPosition( 1 );
         LAYOUT1COLUMN1.setParent( LAYOUT1 );
         LAYOUT1COLUMN1.initialize();

         // ------------------------------
         // -- Initialize #LAYOUT1ITEM1 --
         // ------------------------------
         LAYOUT1ITEM1.setColumn( LAYOUT1COLUMN1 );
         LAYOUT1ITEM1.setManage( LABEL );
         LAYOUT1ITEM1.setParent( LAYOUT1 );
         LAYOUT1ITEM1.setRow( LAYOUT1ROW1 );
         LAYOUT1ITEM1.initialize();

         // -----------------------
         // -- Initialize #LABEL --
         // -----------------------
         LABEL.setCaption( "VIEW 3" );
         LABEL.setDisplayPosition( 1 );
         LABEL.setHeight( 450 );
         LABEL.setIconHeight( 0 );
         LABEL.setLeft( 0 );
         LABEL.setParent( this );
         LABEL.setTabPosition( 1 );
         LABEL.setTabStop( false );
         LABEL.setTop( 0 );
         LABEL.setWidth( 300 );
         LABEL.setIconAlignment( "TOPCENTER" );
         LABEL.setThemeDrawStyle( "Heading1" );
         LABEL.initialize();

         // ---------------------------
         // -- Initialize #COM_OWNER --
         // ---------------------------
         this.setDisplayPosition( 1 );
         this.setTabPosition( 1 );
         this.setLayoutManager( LAYOUT1 );
         this.setCaption( "View 3" );
      }
   });

},

// ------------------
// -- Dependencies --
// ------------------
{
   rp: [ "PRIM_VIEW", "PRIM_TBLO", "PRIM_TBLO.Row", "PRIM_TBLO.Column", "PRIM_TBLO.Item", "PRIM_MD.Label" ]
});

//# sourceURL=d1_view3.js
