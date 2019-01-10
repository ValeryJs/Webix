export const body = {
	height: 600,
	cols:[
		{ view: "list",
		  gravity: 1.5,	
		  template:"#title#",
				data:[
					{ id:1, title:"Dashbort" },
					{ id:2, title:"Users" },
					{ id:3, title:"Product" },
					{ id:4, title:"Locations" }
				]
		},
		
		{ view:"datatable",
			gravity: 3,
			columns:[
        { id:"title",   header:"Film title", width:200 },
        { id:"year",    header:"Year", width:80 },
        { id:"votes",   header:"Votes", width:80 },
        { id:"rating",  header:"Rating", width:80 },
        { id:"rank",    header:"Rank", width:80 }
      ],
			data: [
				{ title: "The Shawshank Redemption", year: 1994, votes: 678790, rating: 1, rank: 2 }
			]
		},

		{ view: "form",
			gravity: 1.9,	
			id:"log_form",
			elements:[
					{ view:"text", label:"Title", name:"email" },
					{ view:"text", label:"Year", name:"email" },
					{ view:"text", label:"Rating", name:"email" },
					{ view:"text", label:"Votes", name:"email" },
					{ margin:5, cols:[
							{ view:"button", value:"Add new" },
							{ view:"button", value:"Clear" }
					]}
			]

		}
	],
	
};