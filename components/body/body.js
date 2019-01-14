import { list } from "./list";
import { main } from "./main/main";
export const body = {
	cols: [
		{
			css: 'nav-column',
			rows: [
				list,
				{},
				{
					view: "template",
					height: 30,
					css: "alert-success",
					borderless: true,
					template: "<span class='mdi mdi-check'></span> Connected"
				}
			]
		},
		{ view:"resizer" },
		main
	]
};