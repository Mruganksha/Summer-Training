//Q.1 swap the numbers
let a = 3
let b = 5
console.log ("Before swap")
console.log("a = ", a)
console.log("b = ", b)

let temp = b
a = b
b = temp
console.log ("After swap")
console.log("a = ", a)
console.log("b = ", b)

//Q.2)print odd even numbers

let x = 5

if (x % 2 === 0){
    console.log(x + "is even");
} else {
    console.log(x + " is odd")
}

// Q.3 takes age as input and checks whether you are elgibile to vote or not

let age = "23"
age = Number(age);

if (age >= 18){
    console.log("You are eligible to vote.")
} else{
    console.log("You are not eligible.")
}

//Q.4 largest among three
let num1 = 14
let num2 = 12
let num3 = 89
let largest

if (num1 >= num2 && num1 >= num3){
    largest = num1;
} else if (num2 >= num1 && num2 >= num3){
    largest = num2;
}else{
    largest = num3;
}

console.log("The largest number is: " + largest)

//Q. 5 factorial
let num = 3
let factorial = 1
for(let i = 1; i <= num; i++){
    factorial *= i;
}

console.log("factorial of ", num, "is", factorial) 

//Q.6 sum and avg
let y = 10
let sum = 0
while(y > 0){
    let digit = y % 10
    sum += digit
    y = Math.floor(y / 10)
}
console.log("sum is : ", sum)
let avg = Math.floor(sum/y)
console.log("avg is : ", avg)

//Q.7 palindrome
let no = 121;
let original = no;
let reversed = 0;

while (no > 0) {
    let digit = no % 10;
    reversed = reversed * 10 + digit;
    no = Math.floor(no / 10);
}

if (original === reversed) {
    console.log(original + " is a palindrome.");
} else {
    console.log(original + " is not a palindrome.");
}

//Q.8 print the pattern
const row = 4
for(let i = 1; i <= row; i++){
    let stars = ""
    for(let j = 1; j <= i; j++){
        stars += "*"
    }
    console.log(stars)
}

//Q.9
let player = 4
if(player == 0){
    console.log("No Run")
}
else if (player == 4){
    console.log("Its a four!!")
} else{
    console.log("Hurrah! it is six")
}

//reverse a string 
const str = "hello";
let reverse = "";

for (let i = str.length - 1; i >= 0; i--) {
  reverse += str[i];
}

console.log(reverse);  
