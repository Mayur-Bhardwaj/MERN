var a = 10;  // global scope

for(i=1; i<=1; i++){
  console.log("inner 1", a);  // inner 1 10

  var a = 100;
  console.log("inner 2",a); // inner 2 100
}

console.log("Outer",a); // Outer 100
