const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (var i = 0; i < 10; i++) {
//   ((x)=>{
//     setTimeout(() => console.log(x+1), (x+1) * 1000);
//   })(i)
// }

for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(i), 1000);
} 