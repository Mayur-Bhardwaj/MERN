// Find Sum of al odd  number 1-10.
let Sum=0;
for(let i=0; i<=10; i++){
    if(i%2!=0){
        Sum = Sum + i;
    }
}
console.log(Sum);

//Output:-
//25



//or

let s = 0;
for(let j=0; j<=10; j=j+2){
    s = s + j;
}
console.log(s);

//Output:-
//30