var loader = new JSLoader();

loader.addEventListener('load', function(){

	controller = new Controller_class(new Model_class());

	extensionPort = new ExtensionPort_class();

	//settings_slider = new SettingsSlider_class();

	settings = new Settings_class(extensionPort);

});