// 1. What will be the output of this code snippet and why?
// let day = "Monday";

// switch (day) {
//    case "monday":
//        console.log("It's the start of the week.");
//        break;
//    default:
//        console.log("It's a normal day.");
// }


// output will be ( It's a normal day. )






// 2. Build an ATM Cash Withdrawal System
// Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.


let withdraw = 400;



if(withdraw%100===0)
{
    console.log("Withdrawal successful")

}else{
    console.log("Invalid amount")

}


// 3. Build a Calculator with switch-case
// Write a simple calculator that takes an operator (+, -, , /, %) as input, and performs the operation on two numbers. Print the output on the console.

const op = "-";
const num = 10;
const num2 = 20;

switch(op)
{
    case "-":
        const resultSub = num-num2;
        console.log(resultSub);
        break;

    case "+":
        const resultAdd = num+num2;
        console.log(resultAdd)
        break;
    case "/":
        const resultDiv = num/num2;
        console.log(resultDiv);
        break;
    case "*":
        const resultInto = num*num2;
        console.log(resultInto);
        break;
    default :
    console.log("invalid");
    
}



// 4. Pay for your movie ticket
// Imagine, the INOX charges ticket prices based on age:




// Children (<18 years): $3
// Adults (18 - 60 years): $10
// Seniors (60+ years): $8
// Write a program that prints the ticket price based on the person’s age.

const myAge = 18;
// not hosited , get reference error 
// constant not change 
const price = 10;
if(myAge<18)
{
    console.log(price-3 , "Bdt");
}else if(myAge>=18 && 60<myAge){
    console.log(price-10)
}else 
{
    console.log(price-8);
}


// 5. Horoscope Sign Checker
// Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. Make it month bases, not date based. Like March and April borns are Aries, Aplil and May born are Taurus, and so on. Do not use if-else.

const month ="january";

switch(month)
{
    case "january":
        console.log("Arise");
        break;
    case "february":
        console.log("Tarus");
        break;
    case "march":
        console.log("Gemini");
        break;
    default:
        console.log("not founded");
        break;

}




// 6. Which Triangle?
// A triangle has 3 sides. A Triangle type is determined by its sides:

// All sides equal is called, Equilateral Triangle.
// Two sides equal is called, Isosceles Triangle.
// All sides different is called, Scalene Triangle.
// Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs everytime manually to see if the output changes correctly.

let a = 10;
let b =23 ;
let c =34;

if(a==b && b==c  && a==c)
{
    console.log("Equilateral Triangle")
}else if (a==b && a==c){
    console.log("Isosceles Triangle")
}else{
    console.log("Scalene Triangle")
}



























