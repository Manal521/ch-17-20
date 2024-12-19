//QUESTION NO:1
// let arr = [
//     [],
//     [],
//     []
// ];
// console.log(arr);

//QUESTION NO:2
// let matrix = ["0", "1", "2", "3"];
// document.write(matrix[0]);
// document.write(matrix[1]);
// document.write(matrix[2]);
// document.write(matrix[3] + "<br>");

// document.write(matrix[1]);
// document.write(matrix[0]);
// document.write(matrix[1]);
// document.write(matrix[2] + "<br>");

// document.write(matrix[2]);
// document.write(matrix[1]);
// document.write(matrix[0]);
// document.write(matrix[1] + "<br>");

//QUESTION NO:3
// for (let i = 1; i <= 10; i++) {
//     console.log(i); // Print the current value of i
// }

//QUESTION NO:4
// let tableNumber = prompt("Enter the number for table.");
// let tableLength = prompt("Enter the lenght for table.");

// tableNumber = parseInt(tableNumber);
// tableLength = parseInt(tableLength);

// document.write("<h2>Multiplication Table of " + tableNumber + "</h2>");
// for (let i = 1; i <= tableLength; i++) {
//     let result = tableNumber * i;
//     document.write(tableNumber + " x " + i + " = " + result + "<br>");
// }

//QUESTION NO:5
// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (let i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>");
// }

//QUESTION NO:6
// document.write("<h2>Counting:</h2>");
// for (let i = 1; i <= 15; i++) {
//     document.write(i + ", ");
// }

// document.write("<br><br>");


// document.write("<h2>Reverse Counting:</h2>");
// for (let i = 10; i >= 1; i--) {
//     document.write(i + ", ");
// }

// document.write("<br><br>");


// document.write("<h2>Even:</h2>");
// for (let i = 0; i <= 20; i += 2) {
//     document.write(i + ", ");
// }

// document.write("<br><br>");


// document.write("<h2>Odd:</h2>");
// for (let i = 1; i <= 19; i += 2) {
//     document.write(i + ", ");
// }

// document.write("<br><br>");


// document.write("<h2>Series:</h2>");
// for (let i = 2; i <= 20; i += 2) {
//     document.write(i + "k, ");
// }

//QUESTON NO:7
// let bakery = ["cake", "apple pie", "cookie", "chips", "patties"];

// let userInput = prompt("Enter an item.");


// if (bakery.includes(userInput.toLowerCase())) {

//     alert(userInput + " is found in the list.");
// } else {

//     alert(userInput + " is not found in the list.");
// }

//QUESTION NO:8
// let num = [24, 53, 78, 91, 12];
// let largestNumber = Math.max(...num);
// document.write("The largest number in the array is: " + largestNumber);

//QUESTION NO:9
// let num = [24, 53, 78, 91, 12];
// let largestNumber = Math.min(...num);
// document.write("The smallest number in the array is: " + largestNumber);

//QUESTION NO:10
// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         document.write(i + "<br>");
//     }
// }