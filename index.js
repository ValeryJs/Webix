import {header} from "./components/header/header";
import {body} from "./components/body/body";
import {footer} from "./components/footer/footer";
import {dropdown} from "./components/dropdown";

webix.ready(() => {
	
	webix.ui({
		rows: [ 
			header,
			{  view:"segmented", id:"selector", options:[ 
        { id:1, value: "All", width: 50 },
        { id:2, value: "Old", width: 50 },
        { id:3, value: "Modern", width: 50 },
        { id:4, value: "New", width: 50 },
    ]}, 
			body,
			footer
		]
	});
	$$("chartUsers").sync($$("listUsers"));
	$$("formFilm").bind($$("tblFilm"));
	webix.ui(dropdown);
	

	$$("dList").select(1);
});  


