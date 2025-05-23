//array 
//square of each number
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num);
console.log(squared); 

//sum of array
const nums = [10, 20, 30, 40];
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); 

//ages 
const ages = [12, 17, 19, 24, 16, 30];
const adults = ages.filter(age => age >= 18);
console.log(adults); 

//unique items
const duplicates = [1, 2, 2, 3, 4, 4, 5];
const unique = duplicates.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);
console.log(unique); 

//objects
const student = {
    name: "Mruganksha",
    age: 20,
    grades: [85, 90, 78, 92, 88],
  
    // Method to calculate average grade
    calculateAverage: function () {
      if (this.grades.length === 0) return 0;
      const sum = this.grades.reduce((acc, curr) => acc + curr, 0);
      return sum / this.grades.length;
    }
  };
  
  console.log(`Name: ${student.name}`);
  console.log(`Average Grade: ${student.calculateAverage()}`);
  
