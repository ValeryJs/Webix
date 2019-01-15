function 	valCheck(value){
	return value.replace(',', '.');
}
export const form = {	
	view: "form",	
	id:"formFilm",
	elements:[
		{ template:"Add Film",id: "formTitle", type:"section" },
		{ view:"text", label:"Title", name:"title", invalidMessage: "\"title\" must be filled in" },
		{ view:"text", label:"Year", name:"year", invalidMessage: "\"year\" should be between 1970 and current" },
		{ view:"text", label:"Rating", name:"rating", invalidMessage: "\"rating\" cannot be empty or 0" },
		{ view:"text", label:"Votes", name:"votes", invalidMessage: "\"votes\" must be less than 100000" },
		{ margin:5, 
			cols:[
				{
					view:"button",
					id: "addFilm", 
					value:"Add new", 
					type: "form",
					click(){
						const formFilm = $$("formFilm");
						if (formFilm.validate()){
							formFilm.save();
							webix.message("validate is successful!");
							formFilm.clearValidation();
							formFilm.clear();
						}
					}
				},	
				{
					view:"button", 
					value:"Clear", 
					type: "danger", 
					click() {
						webix.confirm({
							text: "Do you really want to clear the input data?",
							type:"confirm-error",
							
							callback:(result) => {
									if(result){
										$$("formFilm").clearValidation();
										$$("formFilm").clear();
									} 
							}
	
						});
					}
				} 
				//End cols
			]
		},
		{}
	],
	
	elementsConfig:{
		labelPosition: "left"
	},
	
	rules:{
		title:webix.rules.isNotEmpty,
		
		year:(value) => {
			let date = new Date();
			return (value > 1969 && value <= +date.getFullYear());
		},
	
		rating:(value) => { 
			const valueCheck = valCheck(value);
			if(valueCheck != "0" && valueCheck.length > 0) return true;
		},
	
		votes:(value) => {
			const valueCheck = valCheck(value);
			if((valueCheck.length > 0) && valueCheck != "0" && valueCheck < 100000) return true;
		}
		// $all:webix.rules.isNotEmpty
		// 	replace(/<\/?[^>]+>/gi, '')
	}
	};

