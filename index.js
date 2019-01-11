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
	webix.ui({
		view:"popup",
		id: "my_pop",
		head: "Submenu",
		width: 300,
		body: {
			view:"list", 
			data:[ 
				{id:"1", name: "Settings"},
				{id:"2", name: "Log Out"}
			],
			datatype: "json",
			template: "#name#",
			autoheight: true,
			select: true
		}
	});
});  


