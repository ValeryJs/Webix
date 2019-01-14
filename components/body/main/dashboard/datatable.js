import { sortByParam } from "../../../../helpers/sortByParam";
export const datatable = { 
	view:"datatable",
	id:"tblFilm",
	maxHeight: 1000,
	select: true,
	// autoConfig:true,
	columns:[
		{ id: "id", header: "", width: 60 },
	  { id:"title", header: ["Film title", {content: "textFilter"}], sort: "string", width: 300 },
	  { id:"year", header: ["Year", {content: "selectFilter"}], sort: "int", width: 70},
	  { id:"votes", header: ["Votes", {content: "selectFilter"}], sort: sortByParam("votes"), width: 100 },
	  { id:"rating", header: [ "Rating", {content: "selectFilter"}], sort: sortByParam("rating"), width: 70 },
	  { id:"rank", header: ["Rank", {content: "selectFilter"}], sort: "int", width: 70},
	  { id:"remove", header: "", width: 50, template: "<span class='btn-remove-film remove mdi mdi-trash-can'></span>" }
	],
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
		onAfterSelect(id){
			let {title, year, rating, votes} = this.getItem(id);
			// votes = votes.replace(',', '.');
			// console.log(rating);
			$$("formFilm").setValues({title, year, rating, votes});
			$$("formTitle").setValues({template: "dsdsds"});
			$$("addFilm").hide();
			$$("updateFilm").show();
		},
		onDataUpdate() {
			$$("formFilm").clear();
			$$("addFilm").show();
			$$("updateFilm").hide();
			webix.message("film updated!");
		}
	}
};