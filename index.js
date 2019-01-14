import {header} from "./components/header/header";
import {body} from "./components/body/body";
import {footer} from "./components/footer/footer";
import {dropdown} from "./components/dropdown";

webix.ready(() => {
	webix.ui({
		rows: [ 
			header,
			body,
			footer
		]
	});

	webix.ui(dropdown);

$$("dList").select(1);
});  


