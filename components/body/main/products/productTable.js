export const productTable = {
	view:"treetable",
	select: true,
	columns:[
		{ 
			id:"id",
			header:"",
			width:50
		},
		{ 
			id:"title",
			header:"Title",
			template:"{common.treetable()} #title#",
			fillspace: true
		},
		{ 
			id:"price",
			header:"Price",
			fillspace: true
		}
	], 
	url: "data/products.js",
	on: {
		onAfterLoad(){
			this.openAll();
		}
	}
};
  