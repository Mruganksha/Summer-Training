//RangeError
try {
    let arr = new Array(-1);
  } catch (e) {
    console.error("RangeError caught:", e.message);
}

// ReferenceError
try {
    console.log(nonExistentVar);
  } catch (e) {
    console.error("ReferenceError caught:", e.message);
}

// TypeError
try {
    let num = 5;
    num();
  } catch (e) {
    console.error("TypeError caught:", e.message);
}

// URIError
try {
    decodeURI('%');
  } catch (e) {
    console.error("URIError caught:", e.message);
}


function divide(a, b) {
    try {
      if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Inputs must be numbers");
      }
      if (b === 0) {
        throw new RangeError("Cannot divide by zero");
      }
      return a / b;
    } catch (e) {
      console.error("Handled Error:", e.message);
      return null;
    }
}
  
console.log(divide(10, 2));  
console.log(divide(10, 0));  
console.log(divide("a", 2)); 
  