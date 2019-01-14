export const placeholderUsers = 
{
	cols: [
		{ 
			view: "text",
			id: "placeHolder",
			on: {
				onTimedKeyPress(){
					const value = this.getValue().toLowerCase();
					$$("listUsers").filter(function(obj){
						return obj.name.toLowerCase().indexOf(value) == 0;
					})
				}
			}
		}, 
		{ 
			view: "button",
		  value: "Sort asc",
		  width: 150,
			type: "form",
			click(){
				$$("listUsers").sort("#name#", "asc", "string");
			} 
		},
		{ 
			view: "button",
			value: "Sort desc",
			width: 150,
			type: "form" ,
			click(){
				$$("listUsers").sort("#name#", "desc", "string"); 
			}
		}
	]
}

