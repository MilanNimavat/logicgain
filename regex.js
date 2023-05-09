var str = 'thisIsAString';
var matches = str.match(/[A-Z]/g);
console.log(matches);

// way2
var inputString = "thisIsAString";
var positions = [];
for(var i=0; i<inputString.length; i++){
    if(inputString[i].match(/[A-Z]/g) != null){
        console.log('inputString[i]',inputString[i]);
        positions.push(inputString[i],i);
    }
}
console.log(positions);