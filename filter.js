{
    // find fName whos age less is then 24
	let users = [
		{ fName: 'milan', age: 24 },
		{ fName: 'kishan', age: 24 },
		{ fName: 'rahul', age: 22 },
	];

    console.log(users.filter((data) => data.age < 24).map((ele)=>ele.fName));

    // with reduce also
    console.log(users.reduce((acc,crr)=>{
        if(crr.age < 24) acc.push(crr.fName)
        return acc;
    },[]));
}

var string = 'Google is the best Search engine';
function getCount(str) {
    return str.split(' ').filter(function(num) {
     return num != ''
    }).length;
   }

  console.log(getCount(string))