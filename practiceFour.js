//ques-16 write a function that calculates and prints the simple interest on a loan amount.
function calculatessimpleintrest(principalamt, intrestrate, timeduration) {
  if (typeof principalamt || intrestrate || timeduration != "numbers") {
    console.log("write only numbers value!");
  }
  let simpleIntrests = (principalamt * intrestrate * timeduration) / 100;
  console.log(simpleIntrests.toFixed(2));
}
calculatessimpleintrest(5000000, 9.565, 1);
calculatessimpleintrest(5000000, 9.565, "asads");

//ques-17 write a function that tells the input number is prime or not
function isPrime(num) {
  if (num < 2) return false; // 0 and 1 are not prime numbers

  for (let i = 2; i <num; i++) {
    if (num % i === 0) {
      return false; // If num is divisible by any number other than 1 and itself, it's not prime
    }
  }

  return true; // If no divisors are found, the number is prime
}

// Example usage:
console.log(isPrime(2)); // true

//ques-18 write a function that counts and return the numbers of word in a sentence.
function count(str) {
    let count = 0; // Initialize count variable

    for (let i = 0; i < str.length; i++) {
        count++; // Increment count for each character
    }

    return count; // Return the total count
}

// Example usage:
console.log(count("darvesh")); // Output: 7
console.log(count("hello")); // Output: 5
console.log(count("")); // Output: 0 (Handles empty string)

//for count word
function countWord(sentence){
const splitsentence = sentence.split(' ');
const nonempty = splitsentence.filter((ele) =>
     ele!='');
return nonempty.length;
} console.log(countWord("my name is darvesh"));
console.log(countWord('my     name    is    daaarvesh sonii   is  good boy'));

//ques-19 write a function that convert celsius to fahrenheit temperature convertor?
 function convertfahrenheit(tempincelsius){
  let result = (tempincelsius * 9 / 5) + 32;
  console.log(result);
 }convertfahrenheit(30);

 //ques-20 swapping numbers with and without third variable
 let a = 5;
 let b = 6;
 let c = b;
      b=a;
      a=c;
      console.log(`a=5,b=6 after swapping a =${a} and b =${b}`);

 //by without third variable
 let A = 5;
 let B = 6;
   A = A+B;
   B = A-B;
   A= A-B;
   console.log(`A=5,B=6 after swapping A =${A} and B =${B}`);

