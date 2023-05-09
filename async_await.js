// Function which resolves promise with a random number
function generateRandom(min, max) {
    return new Promise(resolve => {
      // using a timeout to make it wait for it by 1000ms
      setTimeout(() => {
          console.log((Math.ceil(Math.random() * (max - min) + min)));
          resolve (Math.ceil(Math.random() * (max - min) + min)); // resolving promise
        //  resolve 
      }, 1000);
    });
  }
  
  console.log("before");
  //self-executing function
  (async () => {
    const output = await generateRandom(1,10);
    console.log('output',output);
  })();
  console.log("after");
