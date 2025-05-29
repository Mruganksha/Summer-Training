//Features of ES6

//-let keyword - (block scope)

var x = 10; //here x is 10
{
    let x = 2; //here it is 2
}

//-const keyword:
//it does not define a constant value, it defines a constant reference to a value

//-Arrow Functions :
//Arrow functions allows a short syntax for writing function expressions.
//You don't need the function keyword, the return keyword, and the curly brackets.
var x = function(x, y){
    return x*y;
}
//ES6 
const x = (x,y) => x * y;

//Object Destructuring: (destructuring assignment makes it easy to assign array values and object properties to variables)
//object
const person = {
    firstName : "mruganksha",
    lastName : "kudake",
    age: 19,
}
//by destructuring
let {firstName, age} = person

//Array- Destructuring: (Destructuring assignment makes it easy to assign array values and object properties to variables.)
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// Destructuring Assignment
let [fruit1, fruit2] = fruits;
//output will be: banana, orange

//Spread OPerator: the ... operator spreads an iterable (like an array) into individual elements
const numbers = [23,55,21,87,56];
let minValue = Math.min(...numbers);
let maxValue = Math.max(...numbers);

//For/Of Loop
//Syntax: for (variable of iterable) {
  // code block to be executed}

const cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
  text += x + " ";
}

//Template literals: use backticks(`) instead of quotes
const name = "mruganksha";
const Age = 19;
// Old way:
const greeting = "Hello, " + name + "! You are " + age + " years old.";

// ES6 Template Literal:
const greetingES6 = `Hello, ${name}! You are ${age} years old.`;

console.log(greetingES6);