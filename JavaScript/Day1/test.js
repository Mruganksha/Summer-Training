const accountId = 1234
let accountEmail = "abc@gmail.com"
var password = "12"
accountCity = "jaipur"
let account

//accountId = 2  ; const cannot be changed
accountEmail = "xyz@gmail.com"
password = 2458
accountCity = "anb"

//var has scope problem therfore not prefered , let is prefered
console.log(accountId);
console.table([accountId, accountEmail, password, accountCity, account]);

//DATATYPES

//alert(5 + 5) this syntax cant be used directly on node
let name = "mru"
//null : standalone value
//undefined : value not assigned
//symbol : unique
//object
//number
console.log(typeof "mru");
console.log(typeof 13);
console.log(typeof null); //null is object
console.log(typeof undefined);

//conversion
let score = "23ab"
let valueInNumber = Number(score)

//"33" --> 33
//"23aqb" -> NaN
//1 -> true; 0 -> false
//"" -> false
// "kdwl" -> true
//console.log("2" + 1 + 2) : 212 in string
//console.log(1 + 2 + "2") : 32 

//even if symbols are declered the same but they wont be equal
let x = Symbol("123")
let y = Symbol("123")
console.log(x === y) //here it will return false

//array 
const names = ["abc", "skD"]
//OBJECT
let myObj = {
    name: "mru",
    age: 19,
}
//function
const myFunction = function(){
    console.log("hello world")
}

//stack(primitive) , heap(non primitive)

//string
const Name = "mru"
const id = 97
//console.log(Name + id + "value")
//use string interpritation to concanate
console.log(`Hello my name is ${Name} and my id is ${id}`);

const grade = new String('mruganksha')

//numbers and math
const balance = new Number(100)
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(1))

const otherNumber = 123.318
console.log(otherNumber.toPrecision(3))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(5.819))
console.log(Math.ceil(4.1))
console.log(Math.floor(4.8))
console.log(Math.min(3, 6, 9, 1))
console.log(Math.max(3, 6, 9, 1))
console.log(Math.random()) //always between 0 and 1
console.log((Math.random()*10) + 1) //now value will be one or greater than it

const min = 10
const max = 20
Math.random() * (max - min + 1) + min //this is one trick for the range we want 

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString())
console.log(typeof myDate);

let myCreatedDate = new Date(2024, 1, 29)
console.log(myCreatedDate.toDateString());

let myCreatedDates = new Date("2024-01-13")
console.log(myCreatedDates.toLocaleString());

let myTime = Date.now()
console.log(myTime);
console.log(myCreatedDate.getTime())

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1)

newDate.toLocaleString('default', {
    weekday: "long",
})

//ARRAY
const arr = [0, 1, 5, 8]
const arr1 = new Array(1, 4, 5, 8)
console.log(arr1[2])

//arary methods
arr.push(7)
arr.pop()
arr.unshift(0)
arr.unshift(9)
arr.shift()
console.log(arr)
console.log(arr.includes(8))
const newArr = arr.join()
console.log(arr);
console.log(typeof newArr); // when two arrays are added it form a string

//slice, splice
console.log("A ", arr)
const myn = arr.slice(1, 3) //it removes that much part
console.log(myn);
console.log("B ", arr);
const myns = arr.splice(1, 3) //it prints that much part
console.log("C ", arr);
console.log(myns);

const movies = ["adj", "jqkhdq", "abqqib"]
const idea = [23, 63, 765]
movies.push(idea)
console.log(movies);
console.log(movies[3]);//it will give whole array
console.log(movies[3][2]); // now this will give 2nd element of idea
//better approcah is concat
const movie = ["adj", "jqkhdq", "abqqib"]
let newMovies = movie.concat(idea)
console.log(newMovies);
const newitem = [1, 2, 4, [5, 6, 7], [345, [4,5]]]
const real = newitem.flat()
console.log(real);

console.log(Array.isArray("mfnk"));
console.log(Array.from("mfnk"));
console.log(Array.from({name: "mruganksha"}));

let s1 = 100
let s2 = 200
let s3 = 520
console.log(Array.of(s1, s2, s3));

//OBJECTS

//singleton object (if only made by construvctor then it can be formed)
//object literals
//Object.create() : this is also one way of decleraing objects singleton objects
const sym = Symbol("key1")

const user = {
    name: "mruganksha",
    "full name" : "mruganksha Kudake",
    [sym]: "mykey",
    Age: 19,
    location: "pune",
    email:"xyz@gmail.com",
    isLogged: true,
    lastDay: ["monday", "tuesday"]
}

console.log(user.email);
console.log(user["full name"]); // if decelared string then we need to use square bracket only also for the symbol
console.log(user[sym]);

user.email = "dsmn@gmail.com"
//Object.freeze(user)
//now after we freeze even if we redeclare it then also we cant modify it
console.log(user);

user.greeting = function(){
    console.log("hello hii");
}
console.log(user.greeting); //it will output function (anonyms)
console.log(user.greeting());

user.greetingTwo = function(){
    console.log(`hello name of user is ${this.name} and email is ${this.email}`);
}

console.log(user.greetingTwo());

//how to define for singleton
const obj = new Object() //singleton
//const obj = {} //not singleton

const regularUser = {
    email: "mru@gmail.com",
    fullname: {
        userfullname: {
            firstname: "mruganksha",
            lastname: "kudake",
        }
    }
}

console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname.firstname)

//how to combine objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
//const obj3 = {obj1, obj2} 
const obj3 = Object.assign(obj1, obj2) 
//const obj3 = Object.assign({}, obj1, obj2)  this is also one syntax used
const obj4 = {...obj1, ...obj2}
console.log(obj3);
console.log(obj4);

//when info comes database then it comes in form of array
const student = [
    {
        id: 12,
        name: "mru"
    },
    {
        id: 87,
        name: "aka"
    },
    {
        id: 92,
        name: "xyz"
    },
]

student[1].name
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

//to check if it as that property
console.log(student.hasOwnProperty('name'));
