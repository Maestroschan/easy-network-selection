
//const NetworkManager = imports.gi.NetworkManager;
const Main = imports.ui.main;
const Lang = imports.lang;

let x;

function init () {}

function enable () {
	x = Main.panel.statusArea.aggregateMenu._network.indicators.connect('button-press-event', Lang.bind(this, openNetworkSelection));
}

function disable () {
	Main.panel.statusArea.aggregateMenu._network.indicators.disconnect(x);
}

function openNetworkSelection (actor, event) {
	log('test');
	let mouseButton = event.get_button();
	if (mouseButton == 3) {
//		Main.panel.statusArea.aggregateMenu._network._dtypes[NetworkManager.DeviceType.WIFI]._showDialog();
		Main.panel.statusArea.aggregateMenu._network._devices.wireless.firstMenuItem._getMenuItems()[0].menu._getMenuItems()[0].activate()
	}
}
