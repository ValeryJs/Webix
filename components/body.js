export const body = {
	cols: [
		{ 
			view: "list",
			width: 300,
			template:"#title#",
				data:[
					{ id:1, title:"Dashbort" },
					{ id:2, title:"Users" },
					{ id:3, title:"Product" },
					{ id:4, title:"Locations" }
				]
		},
		{ 
			view:"datatable",
			id:"tblFilm",
			maxHeight: 1000,
			autoConfig:true,
			// columns:[
      //   { id:"title",   header:"Film title", fillspace:true },
      //   { id:"year",    header:"Year", width: 100 },
      //   { id:"votes",   header:"Votes", width: 100 },
      //   { id:"rating",  header:"Rating", width: 100 },
      //   { id:"rank",    header:"Rank", width: 100 }
			// ],
			// fixedRowHeight:false,
			data:small_film_set,
			autowidth: true,
			autoheight: true
			
		},
		{ 
			view: "form",	
			id:"formFilm",
			elements:[
				{ template:"Edit Films", type:"section" },
				{ view:"text", label:"Title", name:"title", invalidMessage: "\"title\" must be filled in" },
				{ view:"text", label:"Year", name:"year", invalidMessage: "\"year\" should be between 1970 and current" },
				{ view:"text", label:"Rating", name:"rating", invalidMessage: "\"rating\" cannot be empty or 0" },
				{ view:"text", label:"Votes", name:"votes", invalidMessage: "\"votes\" must be less than 100000" },
				{ margin:5, 
					cols:[
						{ view:"button", id: "addFilm" , value:"Add new", click:() => {
								if($$("formFilm").validate()){
										let getValue = $$("formFilm").getValues();
										let result = Object.assign(getValue, {rank: "unknow", category: "unknow"});
										console.log(result);
										$$("tblFilm").add(result);
										webix.message("validate is successful!");
								}
							} 
						},
						{ view:"button", value:"Clear", type: "danger", click:() => {
								webix.confirm({
									text: "Do you really want to clear the input data?",
									type:"confirm-error",
									callback:(result) => {
											if(result){
												$$("formFilm").clearValidation();
												$$("formFilm").setValues('');
											} 
									}
								});
							}
						} 
					]
				}
			],
			elementsConfig:{
				labelPosition: "top"
			},
			rules:{
				title:webix.rules.isNotEmpty,
				year:(value) => {
					let date = new Date();
					return (value > 1969 && value <= +date.getFullYear());
				},
				rating:(value) => { 
					value = value.trim();
					if(value != "0" && value.length > 0) return true;
				},
				votes:(value) => value < 100000,
				$all:webix.rules.isNotEmpty
		  }
		}
	]
};

