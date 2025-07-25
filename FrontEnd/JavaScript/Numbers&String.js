// Arithmetic Operator

a=10;
b=5;
console.log(a+b);  //15
console.log(a-b);  //5
console.log(a*b);  //50
console.log(a/b);  //2
console.log(a%b);  //0

no = 2.6;

console.log(Math.round(no));  //3
console.log(Math.ceil(no));  //3
console.log(Math.floor(no)); //2
console.log(Math.trunc(no)); //Remove only the decimal part  //2



// Strings :- Strings holds textual data, anything from a single character to paragraph.String can be defined through single quotes (" "), single quotes (' ') or Backticks (` `).

console.log("This is Double Quotes String.");
console.log('This is Single Quotes String.');
console.log(`This is BackTick String. You're using this.`);

console.log("JavScript " + "ReactJS");  //JavScript ReactJS    // String Concatination   

// When we do concatination of string and number then it will be convert into the string

console.log("You get the "+ 9 + " marks out of "+ 10); //You get the 9 marks out of 10
console.log("You have got " + (1+1+1)+ " votes");  // You have got 3 votes


// Examples:

// At a resturant you ate; 1 Dal rs100, 2 roti 10rs each, 1 icecream 30rs,calculate an display the final bill amount.


dal = 100;
roti = 10;
icecream = 30

total = (100*1 + 2*10 + 1*30);

console.log("==== Bill Summary ====");
console.log(`Dal = ${1*dal}`);
console.log(`Roti = ${2*roti}`);
console.log(`Icecream =  ${1*icecream} `);
console.log(`Total Bill = ${total}`)


// Output:-
// ==== Bill Summary ====
// Dal = 100
// Roti = 20
// Icecream =  30 
// Total Bill = 150

// Calculate 18% GST on iPhone 79,990rs and 2 Airpods Pro 24990rs each.

iPhone_price = 79,990;
airPod_Price = 24990;

// gst = (79,990*18)/100 + (2*(24990*18)/100);

gst = ((1*79999 + 2*24990)*18/100);

console.log(`Total Bill is =  ₹${gst}`);    // Total Bill is =  ₹23396.22
