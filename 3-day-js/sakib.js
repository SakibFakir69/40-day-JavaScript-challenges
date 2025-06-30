

// 1. Odd or Even?
//  Take a number and find if the number is an odd or even number.
//  Print the number and result in the console.

let num = 10;

if(num%2==0)
{
    console.log("even");
}else{
    console.log("odd");
}



// 2. Do you have a Driving License?
// Let's check if you are eligible to get a driving license. The eligibility to get a driving licence is 18 years.


let age = 18;
if(age>=18){
    console.log("you are eligible")
}else{
    console.log("you are not eligible")
}


// 3. Calculate CTC with a Bonus
// Let's calculate how much you earn from your office.

let year = 12;
let salaryTotalPerMonth = 20000;
let result = year * salaryTotalPerMonth;
console.log(result);


//  You get 12,300 rupees as your monthly salary.
//  You get a 20% bonus on your annual salary.
//  How much money do you make per annum as a CTC?

let salary = 123000;
let bouns = salary%20;
let result_2 = bouns*salary;
console.log(result_2);


// 4. Write a program for the Traffic Light Simulation.
// Red Light... Green Light... Let's Play!


const colors = [ "red","green","blue"];

function Play(){

    for(let i=0; i<colors.length; i++)
    {
        console.log(colors[i])
    }
}
Play();



//  Create a color variable.
//  Based on the color variable's value print in the console if a traveller needs to STOP or GO. The Red color is for STOP and the Green color is for GO.

const red="Red";
const green = "Green";

if(red){
    console.log("NO");
}else{
    console.log("Yes")
}


// 5. Create an Electricity Bill Calculator
// Let's calculate how much you pay for electricity bills per month and annually.

let bill_per_month = 4;

const avgBill = (bill_per_month*12)/12;
console.log(avgBill);




//  Create a units variable. Based on this value you will calculate the total electricity bill for a months.
//  If each day you consume the units and each unit cost 150 rupees, how much will you be charged per month?
//  If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?

let unit = 2;
let monthly = (unit*30)*150;

let yearly = monthly%20;
console.log(monthly, yearly);



// 6. Leap Year Checker
// Is 2025 a Leap Year?

//  Take year as input.
//  Use the arithmetic operator and ternary operator to print if a year is a leap year or not.

let y = 2500;

if(y%4==0  && (y%100!==0 || y%400==0)){
    console.log("yes")
}else{
    console.log("no");
}


// 7. Max of Three Numbers
// Find the max number from the lot.

//  Take three numbers and assign them to variables p, q, and r.
//  Now find the maximum of these three numbers using the comparison operators.

let p =10;
let q=20;
let r = 30;

if(p>=q && p>=r){
    console.log(p);
}else if(q>=p && q>=r){
    console.log(q);
}else{
    console.log(r);
}

// 8. Bitwise Doubling
// A tricky one for you

//  Create a variable count and assign a value, say, 5.
//  Now use the Bitwise shift operator to make the number double.
//  Print it on the console.

let count = 5;
let ans = count<<1;
console.log(ans);
