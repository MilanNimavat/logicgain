function awesomeFunction(){
    var a = 2;
  
    var multiplyBy2 = function(){
      console.log(a*2); // Can access variable "a" since a and multiplyBy2 both are written inside the same function
    }
  }

//   awesomeFunction.call(multiplyBy2)