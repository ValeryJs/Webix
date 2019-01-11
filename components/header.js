export const header = {
	view: "toolbar",
	css:"webix_header webix_dark",
	cols:[	
			{ view: "label", label: "My App" },
			{ },
			{ 
				view: "button", 
				type: "icon",
				width: 100,
			  icon: "mdi mdi-account",
				label: "Users", 
				css: "custom",
				popup: "my_pop"
		  }
	],
	// inputWidth:100
};



