// const unordered = {
//     "b": 'foo',
//     "c": 'bar',
//     "a": 'baz'
//   };
const unordered = {
  "2": 'foo',
  "3": 'bar',
  "1": 'baz'
};
  
  const ordered = Object.keys(unordered)
  .sort()
  .reverse()
  .reduce(
    (obj, key) => { 
        console.log('obj',obj,'=','key',key);
      obj[key] = unordered[key]; 
      return obj;
    }, 
    {}
  );
  console.log('ordered',ordered);
  // console.dir(ordered);
  // console.log(JSON.stringify(ordered));
  // console.table(ordered);
  Object.entries({
    "2": 'foo',
    "3": 'bar',
    "1": 'baz'
  });
  var symbol1 = Symbol("foo");
  console.log('symbol1',typeof symbol1);