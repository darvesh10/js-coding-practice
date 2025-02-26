//que-6 write a function that calculate factorial of a given number
function factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result = result * i;
  }
  return result;
}
console.log(factorial(5));
//another
function factorials(n) {
  if (n === 0 || n === 1) return 1; // Base case
  return n * factorial(n - 1); // Recursive call
}
console.log(factorials(5));
console.log(factorials(0));

//que-7 wrtie a function that gives a leap year
function isLeapYear(year) {
  if (typeof year !== "number" || isNaN(year) || !Number.isInteger(year)) {
    throw new Error(
      "Invalid input! Please enter a valid numeric year (e.g., 2024)."
    );
  }

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a Leap Year`;
  } else {
    return `${year} is NOT a Leap Year`;
  }
}

// Example Usage:
console.log(isLeapYear(2024)); // Leap Year
//console.log(isLeapYear("darvesh")); // Not a Leap Year
console.log(isLeapYear(2000)); // Leap Year
console.log(isLeapYear(1900)); // Not a Leap Year

//ques-8 write a function that calculates and prints the sum of the digits of a given number
function calculateSum(digit) {
  if (
    typeof digit !== "number" ||
    isNaN(digit) ||
    Number.isInteger(digit) ||
    digit < 1
  ) {
    console.log("write correct input");
  }
  const makestring = digit.toString();
  const doSplit = makestring.split("")
  let SumOfDigit = 0;
  doSplit.forEach(num => {   
    SumOfDigit = SumOfDigit + parseInt(num);
  });
  console.log(SumOfDigit)
}
calculateSum(2906);
//another way
function calculateSums(digit) {
    if (typeof digit !== "number" || isNaN(digit)) {
        throw new Error("Invalid input! Please enter a valid number.");
    }
    return String(digit).split('').reduce((sum, num) => sum + Number(num), 0);
}

console.log(calculateSums(123)); // Output: 6 (1+2+3)
//que-9 write a function that generates and prints a multiplication table for a given number up to
//a specified range
function multiplication(start,end){
  if (start&&end<=0 || typeof start&&end !== "number" ){
    console.log("write correctly");
  }
for (let i = 1; i <=end; i++) {
 console.log(`${start} * ${i} = ${start*i}`);
}
}multiplication(10,"dfd")
//another
function multiplication2(start,end){
  if (start&&end<=0 || typeof start&&end !== "number" ){
    console.log("write correctly");
  }
for (let i = start; i <= start * end; i = i+start) {
 console.log(`${start}*${end} = ${start*end}`);
}
}multiplication2(11,10)

//ques-10 write a function that finds and prints the maximum element in an array of numbers
function findMaxElement(arr) {
  if (arr.length === 0) {
      console.log("Array is empty.");
      return null;
  }

  let maxElement = Math.max(...arr);
  console.log("Maximum element:", maxElement);
  return maxElement;
}

// Example usage
const numbers = [3, 7, 2, 9, 5, 10, 1];
findMaxElement(numbers);


