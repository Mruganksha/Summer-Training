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