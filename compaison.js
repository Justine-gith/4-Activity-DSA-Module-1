//Create a variable named firstFavNumb and store your favorite number
let firstFavNumb = 69;
//Create a variable named secondFavNumb and store your second favorite number
let secondFavNumb = 96;

//COMPARISON //

//Greater Than
console.log(firstFavNumb > secondFavNumb); //false
//Less Than
console.log(firstFavNumb < secondFavNumb); //true

// RELATIONAL //

//Greater Than or Equal
console.log(firstFavNumb >= secondFavNumb); //false
//Less Than or Equal 
console.log(firstFavNumb <= secondFavNumb); //true
//Strict Equality (===)
console.log(firstFavNumb === secondFavNumb); //false
//Loose Equality (==)
console.log(firstFavNumb == secondFavNumb); //false
//Strict Inequality (!==)
console.log(firstFavNumb !== secondFavNumb); //true
//Loose Inequality (!=)
console.log(firstFavNumb != secondFavNumb); //true

 // LOGICAL OPERATORS //

 //AND
let x = 40;
let y = 50;
let z = 70;

 console.log(x < y && y < z); //true
 console.log(x > y && y > z); //false

//OR
let a = "good";
let b = "world";
let c = "hello";

console.log(a === b || a === c); //false
console.log(a === b || b === c); //false

//NOT
let isMonday = true;
let isSaturday = false;

//log the results of each comparison to the console using the code runner.
console.log(!isMonday); //false
console.log(!isSaturday); //true
//same as the others.
console.log(!isMonday && isSaturday); //false
console.log(isMonday && !isSaturday); //true
console.log(isMonday || isSaturday); //true
console.log(!isMonday || isSaturday); //false
console.log(isMonday == isSaturday); //false
console.log(isMonday == !isSaturday); //true