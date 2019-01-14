export function sortByParam(param) {
	return (a, b) => {
		a = +a[param].replace(',', '.');
		b = +b[param].replace(',', '.');

		return a - b;
	}
};
