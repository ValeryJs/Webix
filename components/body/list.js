export const list = { 
	view: "list",
	id: "dList",
	select: true,
	autoheight: true,
	css: "nav-view",
	width: 250,
	borderless: true,
	template:"#title#",
	data:[
		{ id:1, title:"Dashbort" },
		{ id:2, title:"Users" },
		{ id:3, title:"Product" },
		{ id:4, title:"Locations" }
	],
	on: {
		onAfterSelect(id) {
			$$(id).show();
		}
	}
};