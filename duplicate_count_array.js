let array = [5,5,1, 2, 2,2, 3,3, 4,7,7,7,7,7];
let out = {};

// way 1
array.forEach((ele) => {
	let count = 0;
	let temp = [];
	temp.push(ele);
	array.forEach((data) => {
		if (temp.includes(data)) count++;
	});
	out[`${ele}`] = count;
});

// way 2
// array.forEach((item) => {
// 	out[item] = item in out ? ++out[item] : 1;
// });

console.log('out', out);
