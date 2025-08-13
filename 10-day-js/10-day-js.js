// Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

// DO NOT USE AI to FIND ANSWERS. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

// 1. What will be the output of the following code and why?
// let user = "Alice";

// function outer() {
//     function inner() {
//         console.log(user);
//     }
//     let user = "Bob";
//     inner();
// }

// outer()

//  ans => output will be bob , because in execution context user first undefine
/// outer function create a function execuition in this time user was bob , as undefinde then inner function come
/// here have a user, this console.log first access bob in function execution but complete this . set user alice , but inner function not get access global user |




// 2. What is the mistake in the code below?
// let total = 0; // Global, bad practice

// function add(num) {
//     total += num;
// }

// add(5);
// add(10);
// console.log(total);

/// ans => in total is global variable , we can change any value easily in the file



// 3. Create a function with a nested function and log a variable from the parent function.

function parent(){
    let age=10;
    function child(){
        console.log(age)
    }
    child();
}
parent();




// 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?

function loopFunction  (){

    for(let i=0; i<10; i++)
    {
        console.log(i);
    }

    // we can not access let is block scope , we can access only in block 
    console.log(i);
}

// 5. Write a function that tries to access a variable declared inside another function.

function fn(){
    let a = 10;
    fn2(a);

}
function fn2(val){
    console.log(val)

}
fn();

// 6. What will be the output and why?
// console.log(a);
// let a = 10;


/// ans => output will be undefine because let are not hosited web access a , but a was undefine ot not
/// initalize , if we access variable let and const before decalre or initalize it go to tdz tempolary dead zone
/// and we got refeerence error



// 7. Where is the age variable accessible?
// function showAge() {
//     let age = 25;
//     console.log(age);
// }

// console.log(age);
// Options:

// A: In Global
// B: Only inside showAge
// C: It will cause an error
// D: None of the above

///ans => c 

// 8. What will be the output and explain the output?
// let message = "Hello";

// function outer() {
//     let message = "Hi";

//     function inner() {
//         console.log(message);
//     }

//     inner();
// }

// outer();


//// ans => output will be hi , because outer function create a  function execution unit
/// inside this function first create creation phase then go to execution phase
///it can only access hi , because in outer function value only access inner function , when try to access global variable it was undefine but outer function wast undefine , so ouput was hi



// 9. What will be the output and why?
// let x = "Global";

// function outer() {
//     let x = "Outer";

//     function inner() {
//         let x = "Inner";
//         console.log(x);
//     }

//     inner();
// }

// outer();
/// same as 8 

// 10. What will be the output and why?
// function counter() {
//     let count = 0;
//     return function () {
//         count--;
//         console.log(count);
//     };
// }

// const reduce = counter();
// reduce();
// reduce();


/// ans => -2 because , here have 2 functin counter and return another function , we need call inside function,
/// reducce call 2 time and counter -- , so counter value was -2