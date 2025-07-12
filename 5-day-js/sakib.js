

// make a work flow of koi-bhai-apni

console.log("day 5 ");

// ## 1. Generate a Pyramid Pattern using Nested Loop as it is shown below:

// ```bash
// *
// * *
// * * *
// * * * *
// * * * * *

for (let i = 0; i < 5; i++) {

    let star = ""

    for (let j = 0; j < i + 1; j++) {
        star += "*"

    }
    console.log(star)

}




// ## 2. Craete Multiplication Table (Using for loop)
// Write a program to print the multiplication table of a given number up to 10.
// For Example: If N = 3, output should be:

// ```bash
// 3 x 1 = 3
// 3 x 2 = 6
// ...
// 3 x 10 = 30
// ```

let n = 10;
let num = 3;
for (let i = 1; i <= n; i++) {
    console.log(num + " X " + i + " = " + num * i
    )

}


// ## 3. Find the summation of all odd numbers between 1 to 500 and print them on teh console log.

let sum = 0;
for (let i = 1; i <= 500; i++) {
    if (i % 2 != 0) {
        sum += i;
    }
}
console.log(sum);


// ## 4. Skipping Multiples of 3
// Write a program to print numbers from 1 to 20, but skip multiples of 3.

for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0) {
        continue;
    }
    console.log(i);
}


// ## 5. Reverse Digits of a Number (Using while loop)
// Write a program to reverse the digits of a given number using a while loop.

// Example:

// ```bash
// Input: 6789
// Output: 9876
// ```

let number = 6789;

let ans = "";


while (number > 10) {

    let x = number % 10;
    ans += parseInt(x);

    number /= 10;

}

if (number < 10) {
    ans += parseInt(number);
}

console.log(ans);

// ## 6. Write your understanding on the difefrences between for, while, and do-while loop. Create their flow charts.


for( init , condition , update){
    // body
}

while(condition){
    // body
}
do{
    // code
    // must run 1 time
}while(condition)

