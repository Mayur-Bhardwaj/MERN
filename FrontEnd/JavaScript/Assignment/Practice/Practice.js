// Q- Take a number and and print "Hello" if it div by 3, print World if it is div by 5 , if div by 15 print "Hello World"

let n = 15;

if(n%15 == 0){
  console.log("Hello World");
}
else if(n%3 == 0){
  console.log("Hello");
} else if(n%5 == 0){
  console.log("World");
}