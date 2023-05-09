var Person = function(pName){
    var name = pName;
  
    this.getName = function(){
      return name;
    }
  }
  
  var person = new Person("milan");
  // console.log(person.getName());
  // console.log(+'1' + (+'1'));
  let i = '1'
  console.log((+i));
