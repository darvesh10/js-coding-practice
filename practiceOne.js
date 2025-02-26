// que-1 write hello world on the console
console.log("hello World");
//que-2 write a function that takes two numbers as input and prints their sum
function sum(a, b) {
  const sum = a + b;
  console.log(sum);
}
sum(1, -2);
//que-3 write a function that calculate and prints the area of a rectangle given its length and width
function area(length, width) {
  if (length < 0 && width < 0) {
    console.log("put the positive value");
  } else {
  }
  areaRectangle = length * width;
  console.log(areaRectangle);
}
area(5, 10);
function area(length, width) {
  if (length < 0 || width < 0) {
    console.log("put the positive value");
  } else {
    areaRectangle = length * width;
    console.log(areaRectangle);
  }
}
area(-5, 10); //as we can see the answer is coming in -from so make it better!
//ques-4 write a function that tells if a given number is even or odd
function evenOdd(A) {
  if (A % 2 == 0) {
    console.log("number is even");
  } else {
    console.log("number is odd");
  }
}
evenOdd(-205);
//easy way
function evenOddd(a) {
  return a % 2 === 0 ? "number is even" : "number is odd";
}
console.log(evenOddd(4));
//another way
function evenOdds(num) {
  switch (true) {
    case num % 2 === 0:
      return "number is even";
    case num % 2 !== 0:
      return "number is odd";
    default:
      return "invalid input";
  }
}
console.log(evenOdds(7));
//ques-5 write a func that finds and prints the smallest number among three given numbers
function findsmallest(a, b, c) {
  switch (true) {
    case a < b && a < c:
      return "a is smallest";
    case b < a && b < c:
      return "b is smallest";
    case c < a && c < b:
      return "c is smallest";
    default:
      return "invalid input";
  }
}
console.log("findsmallest(3,3,3)", findsmallest(3, 3, 3));
console.log("findsmallest(3,2,2)", findsmallest(3, 2, 2));
console.log("findsmallest(-1,-6,9)", findsmallest(-1, -6, 9));
console.log("findsmallest(300,100,60)", findsmallest(300, 100, 60));

let myarr = [99, 7, 8];
const arrange = myarr.sort();
const smallest = arrange[0];
console.log(smallest);
//ques-5 write a function that returns the reverse of a string
function reverse(string){
 let newstring = string.split("").reverse().join('')
 console.log(newstring); 
}reverse('darvesh')
//another
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("darvesh"))