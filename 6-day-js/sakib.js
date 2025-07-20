// # Tasks
// Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

// > **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

// ## 1. Write a Function to Convert Celsius to Fahrenheit
// Create a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit.
// Formula: (Celsius * 9/5) + 32 = Fahrenheit

function celsiusToFahrenheit(celsius){
    const result = (celsius*9/5)+32;
    return result;

}
const ans = celsiusToFahrenheit(10);
console.log(ans);


// ## 2. Create a Function to Find the Maximum of Two Numbers
// Write a function findMax(num1, num2) that returns the larger of the two numbers. It should work for negative numbers as well.

const findMax = (num1, num2)=>{

    if(num1>num2){
        console.log(num1);
    }else{
        console.log(num2);
    }

}
findMax(10,20);

// ## 3. Function to Check if a String is a Palindrome
// Create a function isPalindrome(str) that checks if a given string is a palindrome (reads the same forward and backward). You can not use any string function that we have not learned in the series so far.


const isPalindrome = (str)=>{

    let left = 0;
    let right = str.length-1;

    let rev="";

    for(let i=str.length-1; i>=0; i--)
    {
        rev+=str[i];
    }
    if(rev==str){
        console.log("Plaindrome")
    }else{
        console.log("Not plaindrom")
    }

   

}

isPalindrome("asa");
// ## 4. Write a Function to Find Factorial of a Number
// Create a function factorial(n) that returns the factorial of n.
// Example 5! = 5 * 4 * 3 * 2 * 1

const factorial = (n)=>{
    let sum = 1;


   for(let i=1; i<=n; i++)
   {
    sum*=i;

   }
   return sum;
    

}
let ans2=factorial(10);
console.log(ans2);

// ## 5. Write a function to Count Vowels in a String
// Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string.


const countVowels = (str)=>{

    let vowelCounter = 0;
    for(let i=0; i<str.length; i++)
    {
        if(str[i]=='a' || str[i]=='i' || str[i]=='e' || str[i]=='u' || str[i]=='0' ){
            vowelCounter++;
        }

    }
    console.log(vowelCounter);

}
countVowels("sakibfakir")



// ## 6. Write a Function to Capitalize the First Letter of Each Word in a Sentence
// Write a function capitalizeWords(sentence) that takes a sentence and capitalizes the first letter of each word. You can use the toUpperCase() method of string to convert the lowercase to uppercase.


const capitalizeWords = (sentence)=>{

    let str = sentence.split(" ");



    let ans = ""



    for(let i=0; i<str.length; i++)
    {
       
      let str2 =String(str[i]);
      let up = str2.charAt(0).toUpperCase();
      
      let x= up + str2.slice(1);

  
      
   

      
      console.log(x);


       

    }
   

}
capitalizeWords("sakib fakir");




// ## 7. Use an IIFE to Print “Hello, JavaScript!”
// Write an IIFE that prints "Hello, JavaScript!" to the console. Here the Second word must be supplied using paramneter and argument.



(
    function(args){
        console.log(args);

    }
)("Hello, JavaScript!")

// ## 8. Create a Simple Callback Function
// Write a function greet(name, callback), where callback prints a message using the name parameter.


const greet = (name, callback)=>{
    callback(name);

}

const printName = (msg)=>{
    console.log(msg);

}
greet("sakib fakir", printName)

// ## 9. Create Call Stack Execution Diagram for this flow


// ```js
// function f1() {}
// function f2() {
//     f1();
// }
// f2();
// ```


const f1 = ()=>{

}
const f2 = ()=>{
    f1();
}
f2();
// ## 10. Create Call Stack Execution Diagram for this flow

// ```js
// function f1() {}
// function f2() {}
// function f3() {
//     f1();
// }
// f2();
// f3();
// f1();
// ```


const f11 = ()=>{

}
const f12 = ()=>{
    
}
const f13 = ()=>{
    f11();
    
}

f12();
f13();
f11();