Menubar.Edit = function ( editor ) {

	function onCloneOptionClick () {

		var object = editor.selected;

		if ( object.parent === undefined ) return; // avoid cloning the camera or scene

		object = object.clone();

		editor.addObject( object );
		editor.select( object );

	}

	function onDeleteOptionClick () {

		var parent = editor.selected.parent;
		editor.removeObject( editor.selected );
		editor.select( parent );
	}


	// configure menu contents

	var createOption = UI.MenubarHelper.createOption;
	var createDivider = UI.MenubarHelper.createDivider;

	var menuConfig = [
		// createOption( 'Undo', onUndoOptionClick ),
		// createOption( 'Redo', onRedoOptionClick ),
		// createDivider(),

		createOption( 'Clone', onCloneOptionClick ),
		createOption( 'Delete', onDeleteOptionClick )
	];

	var optionsPanel = UI.MenubarHelper.createOptionsPanel( menuConfig );

	return UI.MenubarHelper.createMenuContainer( 'Edit', optionsPanel );
}
