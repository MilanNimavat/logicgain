function reverse(array, i = 0, j = array.length - 1) {
	while (i < j) {
		[array[i], array[j]] = [array[j], array[i]];
		++i;
		--j;
		//      console.log('in between',array);
	}
	return array;
}

let a = [1, 2, 3, 4, 5];
//   console.log(reverse(a))

let sortArray = (arr) => {
	return arr.sort();
};
// console.log(sortArray([3, 1, 4, 1, 5, 9, 2, 6, 5])) // [1, 1, 2, 3, 4, 5, 5, 6, 9]

let removeFalsy = (arr) => {
	return arr.filter((data) => {
		return data !== 0 && data !== '' && data !== false && data !== undefined && data !== null && !isNaN(data)
	});
	
};
// console.log(removeFalsy([0, 1, false, 2, '', 3, null, undefined, NaN, 4])); // [1, 2, 3, 4]
{
let a = [5],
  count = 5;
let missing = new Array();

for (let i = 1; i <= count; i++) {
    console.log('a.indexOf(i)',a.indexOf(i));
  if (a.indexOf(i) == -1) {
    missing.push(i);
  }
}
console.log(missing);
}
let findMissingNumber = (arr) => {
	return arr.reduce((acc,crr,index,oarr) => {
        acc.push(crr)
        if(oarr[index].includes(acc))
		return acc
	},[]);
	
};
// console.log(findMissingNumber([1, 2, 4, 5])) // 3