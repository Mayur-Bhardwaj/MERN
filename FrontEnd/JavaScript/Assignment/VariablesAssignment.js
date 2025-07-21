// Create Your First Variables
// Create two variables: a with value 15 and b with value 25. Then create a third variable sum that adds them together and display the result using console.log.

a = 15;
b = 25;

sum = a+b;
console.log(`The Sum of ${a} and ${b} is: ${sum}`);

// Output:-

// The Sum of 15 and 25 is: 40


// Variable Naming Rules
// Fix the invalid variable names in the code below. Remember the rules: variables can contain letters, numbers, $, and _, but cannot start with numbers or contain hyphens.


student1 = "Alice";
user_name = "bob123";
$price = 100;
total_marks = 95;
class1 = "JavaScript";

console.log(student1);
console.log(user_name);
console.log($price);
console.log(total_marks);
console.log(class1);


// Output:

// Alice
// bob123
// 100
// 95
// JavaScript



// Explore Data Types
// Create variables with different data types and use typeof() to display their types. Create: a number, a string, a boolean (true/false), and display each value with its type.


a = 1 ;
b = "Ram";
c = true;

console.log(a, typeof(a));
console.log(b, typeof(b));
console.log(c, typeof(c));


// Output:

// 1 number
// Ram string
// true boolean


// Number vs String
// Create two versions of the number 100: one as a number and one as a string. Show the difference by displaying their types and what happens when you try to add them.


no1 = 100;
no2 = 100;
str1 = "100";
str2 = "100"

console.log(no1, typeof(no1));
console.log(no2, typeof(no2));
console.log(no1+no2);

console.log(str1, typeof(str1));
console.log(str2, typeof(str2));
console.log(str1+str2);


// Output:

// 100 number
// 100 number
// 200
// 100 string
// 100 string
// 100100

// Personal Introduction
// Create variables for your name and age, then use template strings (backticks `) to create a nice introduction message.

name = "Mayur Bhardwaj";
age = 24;

console.log(`Hello, My name is ${name} and I am ${age} years old`);

// Output:

// Hello, My name is Mayur Bhardwaj and I am 24 years old


// Calculator with Template Strings
// Create a simple calculator that performs addition, subtraction, multiplication, and division on two numbers. Display each result using template strings in a nice format.

a = 10;
b = 5;

console.log(`Addition of ${a} and ${b} is:- ${a+b}`);
console.log(`Subtraction of ${a} and ${b} is:- ${a-b}`);
console.log(`Mulltiplication of ${a} and ${b} is:- ${a*b}`);
console.log(`Division of ${a} and ${b} is:- ${a/b}`);


// Student Report Card
// Create a student report card program. Use variables for student name, three subject marks, calculate total and average, then display a formatted report using template strings.

console.log("==== STUDENT REPORT CARD ====");

student_name = "John Doe";
maths_marks = 85;
science_marks = 90;
english_marks = 78;

console.log(`Math: ${maths_marks}, Science: ${science_marks}, English: ${english_marks}`);
// console.log(`Science: ${science_marks}`);
// console.log(`English: ${english_marks}`);

console.log(`Total Marks : ${maths_marks+science_marks+english_marks}`);

console.log(`Average: ${(maths_marks+science_marks+english_marks)/3}`);

// Output:

// ==== STUDENT REPORT CARD ====
// Math: 85, Science: 90, English: 78
// Total Marks : 253
// Average: 84.33333333333333



// Shopping Bill Calculator
// Create a shopping bill calculator. Use variables for 3 items with their prices and quantities. Calculate subtotal, apply 10% tax, and display a detailed bill with template strings.

console.log("=== SHOPPING BILL ===");

item1 = "Apple";
item2 = "Bread";
item3 = "Milk";

qty1 = 3;
qty2 = 2;
qty3 = 1;
qty4 = qty1+qty2+qty3;

price1 = 6.00;
price2 = 4.00;
price3 = 3.50;

subTotal = price1+price2+price3;
tax = subTotal*0.10


console.log(`Item 1: ${item1} × ${qty1} = $${price1.toFixed(2)}`);
console.log(`Item 2: ${item2} × ${qty2} = $${price2.toFixed(2)}`);
console.log(`Item 3: ${item3} × ${qty3} = $${price3.toFixed(2)}`);

console.log(`Subtotal: $${subTotal.toFixed(2)}`);
console.log(`Tax (10%) : $${tax}`);

console.log(`Total: $${subTotal+tax}`)


// Output:

// === SHOPPING BILL ===
// Item 1: Apple × 3 = $6
// Item 2: Bread × 2 = $4
// Item 3: Milk × 1 = $3.5
// Subtotal: $13.5
// Tax (10%) : $1.35
// Total: $14.85