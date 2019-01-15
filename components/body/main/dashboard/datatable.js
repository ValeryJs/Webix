import { sortByParam } from "../../../../helpers/sortByParam";
import { categories } from "../../../../helpers/categories";
import { randomInteger } from "../../../../helpers/randomInteger";

export const datatable = { 
	view:"datatable",
	scheme:{
		$init(obj) {
			let idx = randomInteger(1, 4);
			obj.categoryId = idx; 
		}
  },
	id:"tblFilm",
	maxHeight: 1000,
	select: true,
	// autoConfig:true,
	columns:[
		{ 
			id: "id",
		  header: "",
		  width: 60
		},
	  {
			id:"title",
			header: ["Film title", {content: "textFilter"}],
			sort: "string",
			width: 300 
		},
		{
			id:"categoryId",
			header: ["Category", {content: "selectFilter"}],
			collection: categories,
			sort: "string",
			width: 80 
	  },
	  {
			id:"year",
			header: ["Year", {content: "selectFilter"}],
			sort: "int",
			width: 70
		},
	  {
			id:"votes",
			editor: "text",
			header: ["Votes", {content: "selectFilter"}],
		  sort: sortByParam("votes"),
			width: 100
		},
	  {
			id:"rating", 
			header: [ "Rating", {content: "selectFilter"}],
			sort: sortByParam("rating"),
			width: 70 
		},
	  {
			id:"rank",
			header: ["Rank", {content: "selectFilter"}],
			sort: "int",
			width: 70
		},
	  {
			id:"year",
			// editor: "text",
			header: "Year",
			// sort: "int",
			width: 70
		},
	  {
			id:"remove",
			header: "",
			width: 50,
			template: "<span class='btn-remove-film remove mdi mdi-trash-can'></span>" 
		}
		//End columns
	],
	// dataFeed: "data/categories.js",
	editable: true,

	onClick:{
		remove(e, id){
				 this.remove(id);
				 return false;
		}
  },
	// fixedRowHeight:false,
	url: "data/data.js",
	autowidth: true,
	
	on: {
		onDataUpdate() {
			webix.message("film updated!");
		}
	}		
};//End Datatable 

