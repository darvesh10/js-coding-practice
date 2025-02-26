//ques-11 write a function that checks if a string is palindrome or not?
function isPalindrome(str) {
  let myarr = str.split("");
  let reverseArr = myarr.reverse();
  let joinArr = reverseArr.join("");
  //console.log(joinArr);
  if (str != joinArr) {
    console.log("its not plaindrome");
  } else {
    console.log("its plaindrome");
  }
}
isPalindrome("madam");
isPalindrome("abba");
//ques-12 write a function that returns the result of raising a given number to a specified power
function find(base, exponent) {
  const value = base ** exponent;
  console.log(value);
}
find(4, 4);
find(5, 5);
//another
function find(base, exponent) {
  const value = Math.pow(base, exponent);
  console.log(value);
}
find(4, 4);
find(5, 6);
//que-13 write a function that counts and prints the number of vowels and consonants in a given string
function countsvowelsconsonants(str) {
  str = str.replace(/ /g, "");
  let countconsoant = 0;
  let countvow = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      countvow++;
    } else {
      countconsoant++;
    }
  }
  console.log(`vowels = ${countvow} and consoants = ${countconsoant}`);
}
countsvowelsconsonants("hello world");
//que-14 write a function that finds all the factors of a given number.
function findFactors(n) {
    if (n <= 0) {
        throw new Error("Number must be positive.");
    }
    
    let factors = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}
console.log(findFactors(4));

// ques-15 write a functon that calculates and returns the average of a set of numbers.
function findaverage(arr) {
  let sumarr = 0;
  
  for (let i = 0; i <= arr.length-1; i++) {
    sumarr += arr[i];  // Add each element to sum
  }

  return sumarr / arr.length;  // Return the average
}

console.log(findaverage([10, 20, 30])); // Output: 20

//another way
function findAverage(numbers) {
  if (numbers.length === 0) return 0; // Handle empty array case to avoid division by zero
  
  return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
}

// Example usage:
console.log(findAverage([10, 20, 30, 40, 50])); // Output: 30
console.log(findAverage([5, 15, 25])); // Output: 15
console.log(findAverage([])); // Output: 0


