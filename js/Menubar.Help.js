Menubar.Help = function ( editor ) {

	// event handlers

	function onSourcecodeOptionClick () {

		window.open( 'https://github.com/akshaynagpal/3d_graphics_editor', '_blank' )

	}

	function onAboutOptionClick () {

		window.open( 'https://github.com/akshaynagpal/3d_graphics_editor', '_blank' );

	}

	// configure menu contents

	var createOption = UI.MenubarHelper.createOption;
	var createDivider = UI.MenubarHelper.createDivider;

	var menuConfig = [
		createOption( 'Source code', onSourcecodeOptionClick ),
		createOption( 'About', onAboutOptionClick )
	];

	var optionsPanel = UI.MenubarHelper.createOptionsPanel( menuConfig );

	return UI.MenubarHelper.createMenuContainer( 'Help', optionsPanel );
}
