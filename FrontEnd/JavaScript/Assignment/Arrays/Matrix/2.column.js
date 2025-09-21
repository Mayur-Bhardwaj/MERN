let arr = [
  [10,20,30],
  [40,50,60],
  [70,80,90],
]
// i= rows, j= columns
for(let i=0; i<arr.length; i++){
  for(let j=0; j<=arr[0].length; j++){
    if(i==j){
      console.log(arr[i][j]);
    }
  }
}

// Anti-diagonal (top-right to bottom-left)
console.log("Anti-diagonal:");
for(let i = 0; i < arr.length; i++){
  for(let j = 0; j < arr[0].length; j++){
    if(i + j == arr.length - 1){
      console.log(arr[i][j]);
    }
  }
}