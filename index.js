import {header} from "./components/header";
import {body} from "./components/body";
import {footer} from "./components/footer";
webix.ready(() => {
	webix.ui({
			rows: [ 
				header,
				body,
				footer
			]
	});
});  

