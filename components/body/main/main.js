import { dashboard } from "./dashboard/dashboard";
import { users } from "./users/users";
import { products } from "./products/products";
export const main = {
	cells: [
		{ id: 1, cols: dashboard },
		{ id: 2, rows: users },
		{ id: 3, rows: products },
		{ id: 4, template: "Locations View" }
	]
};