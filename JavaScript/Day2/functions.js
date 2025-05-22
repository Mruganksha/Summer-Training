//Q.1 user log in
function loginUser(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `Congrats!! ${username} just logged in`
}

console.log(loginUser("mruganksha"))
console.log(loginUser());

//Q.2
const isPrime = num => {
    if (num < 2){
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
};
  
const PRimeNo = arr => arr.filter(isPrime);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primes = PRimeNo(numbers);

console.log(primes); // Output: [2, 3, 5, 7, 11]


//Q.3
const products = [
    { name: "Laptop", price: 100000},
    { name: "Shirt", price: 400},
    { name: "Phone", price: 60000},
];

const sortItems = products.filter(p => p.price < 1000);

console.log("Under rupees 1000:", sortItems);


//Q.4 recursion
function fibonacci(n) {
    if(n === 0) {
        return 0;
    }
    if(n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(3));


//Q.5 shopping cart

//add to cart
function createCart() {
    let cart = [];
  
    function addToCart(product) {
      cart.push(product);
      return `${product.name} added to cart.`;
    }
  
    function getCart() {
      return cart;
    }
  
    return { addToCart, getCart };
}
  
const user = createCart();
user.addToCart({name: "Grocery", price: 1324 });
user.addToCart({name: "pen", price: 25 });
console.log(user.getCart());
  
//total bill
const TotalBill = cart => 
    cart.reduce((total, item) => total + item.price, 0);
  
const current = user.getCart();
console.log("Total Price:", TotalBill(current));