// // Insert An element at the given index.

// let arr = [10,20,30,40,50,60];

// let n = 35;
// let index = 3;

// for(let i = arr.length-1; i>=index; i--){
//   arr[i+1] = arr[i];
// }
// arr[index] = n;
// console.log(arr);

// // Output:
// // [
// //   10, 20, 30, 35,
// //   40, 50, 60
// // ]



// Insert an Element at index 4 element is 44

// let arr = [10,20,30,40,50];

// let n = 44;
// let index = 4;

// for(let i= arr.length-1; i>=index; i--){
//   arr[i+1] = arr[i];
// }
// arr[index] = n;

// console.log(arr);

// Output:-  [ 10, 20, 30, 40, 44, 50 ]


// Insert an element at position 1 and elemet is 5

// let arr = [10,20,30,40,50];
// let index = 0;
// let n = 5;

// for(let i = arr.length-1; i >= index; i--){
//   arr[i+1] = arr[i];
// }
// arr[index] = n;
// console.log(arr);
// Output:- [ 5, 10, 20, 30, 40, 50 ]

// Or

let arr = [10,20,30,40,50];

// let index = 0;
// let n = 5;

 arr.unshift(5);
console.log(arr);

// Output:- [ 5, 10, 20, 30, 40, 50 ]
