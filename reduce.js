{
	// find max
	let a = [10, 2, 3, 4, 5];

	// console.log(
	// 	a.reduce((acc, curr) => {
	// 		if (curr > acc) acc = curr;
	// 		return acc;
	// 	}, 0)
	// );

	// find ages count
	let users = [
		{ fName: 'milan', age: 24 },
		{ fName: 'kishan', age: 24 },
		{ fName: 'rahul', age: 22 },
	];

	console.log(
		users.reduce((acc, crr) => {
			acc[crr.age] = crr.age in acc ? ++acc[crr.age] : 1;
			return acc;
		}, {})
	);
}
