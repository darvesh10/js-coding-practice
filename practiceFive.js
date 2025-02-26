//que-21 write a program that checks if a number is armstrong or not
function findArmstrong(num) {
    let str = num.toString(); // Convert number to string
    let length = str.length; // Get the number of digits
    let sum = 0;

    // Loop through each digit, raise it to the power of 'length', and add to sum
    for (let digit of str) {
        sum += Math.pow(parseInt(digit), length);
    }

    // Check if sum equals the original number
    return sum === num;
}

// Test cases
console.log(findArmstrong(153)); // true (Armstrong number)
console.log(findArmstrong(123)); // false (Not an Armstrong number)
console.log(findArmstrong(9474)); // true (Armstrong number)
console.log(findArmstrong(9475)); // false (Not an Armstrong number)//

//ques -22 write a program that prints numbers from 1 to N replacing multiple of 3 with "fizz" multiples of 5 with "buzz" multiple of both 3&5 with "fizzbuzz"
function replacing(num){
    for (let i = 1; i <= num; i++) {
       if (i%3==0) {
        console.log("fizz")
       }
       else if(i%5==0){
        console.log("buzz");
       }
       else if(i%3==0&&i%5==0){
        console.log("fizz buzz");
       }
       else{console.log(i);
       }
    }
}replacing(20);
