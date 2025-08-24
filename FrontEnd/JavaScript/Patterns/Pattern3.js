// Print all the even number from 1-10, separated by "," .
// 2,4,6,8,10.

let str="";
for(let i = 1; i<=9; i++){
  if(i%2 == 0){
    str = str + i + ",";
  }
}
    console.log(str + "10.");
