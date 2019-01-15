import { countries } from "../../../../helpers/countries";
webix.protoUI({name: "editlist"}, webix.EditAbility, webix.ui.list);
export const listUsers = {
	view: "editlist",
	scheme:{
		$init:function(obj){
				if(+obj.age > 26){
					obj.$css = "highlight";
				} 
	  }	
	},
	id: "listUsers",	
	collection: countries,
	height: "250",
	sort: "string",
	template: "#name#,   #age#,   from #country# <span class='btn-remove-user remove mdi mdi-close'></span>",
	editable: true,
	editor: "text",
	editValue: "name",
	url: "data/users.js" ,
	onClick:{
		
		remove(e, id){
			webix.confirm({
				text: "Do you really want to delete this user?",
				type:"confirm-error",
				
				callback:(result) => {
						if(result){
							this.remove(id);
							this.clear();
				 			return false;
						} 
				}
			});	
		}
	},
	
	rules:{
		name: webix.rules.isNotEmpty
	}

}
