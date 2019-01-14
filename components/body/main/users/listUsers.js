export const listUsers = 
{
	view: "list",
	id: "listUsers",
	height: "250",
	sort: "string",
	template: "#name# from #country# <span class='btn-remove-user remove mdi mdi-close'></span>",
	url: "data/users.js" ,
	onClick:{
		remove(e, id){
				 this.remove(id);
				 return false;
		}
  }
}
