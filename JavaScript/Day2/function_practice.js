function add(num1, num2){
    let result = num1 + num2
    return result
}
const result = add(3, 7)
console.log("Result is : ", result);

function login(username){
    return '${username} just logged in'
}
console.log(login("mru"));
console.log(login()); //if nothing input is given then undefined is printed

//functions with objects and arrays
function calculatePrice(val1, val2, ...num){
    return num
}
console.log(calculatePrice(453)); //only i input
//for multiple inputs ... is given
console.log(calculatePrice(121, 45, 23));
//if 1st val1 , val2 then ... is given then 1st two inputs will go in val1 and val2
console.log(calculatePrice(121, 43, 32, 64));

//SCOPE
//hoisting (if function declerated directly then we can call it before the code also, but if declared using variable then we it will give error if exceuted 1st)

//this and arrow function
const chai = () => {
    let username = "mru"
    console.log(this.username);
}



