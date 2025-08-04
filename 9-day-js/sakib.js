// Tasks
// Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

// DO NOT USE AI to FIND ANSWERS. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.


// 1. Expian Temporal Dead Zone by creating 3 variables in side a block. Post the code as your answer.

console.log(age);
var age = 10;
console.log(age);

// // console.log(age);
// JavaScript execution code line by line and JavaScript execution context first check console.log
// but here not value find and we get undefine becausse in cration phasse js set value as undefine 
// // output 
// undefine
// 10 

{
    console.log(a);

    /// here tdz start 
    /// tdz like we deacler variable not not initalize value

    var a = 30; /// tdz end here

    console.log(b);
    let b;


    /// let not support not suport tdz and get Reference Error
    
    console.log(c);
    const c = 90



}




// 2. Explain Variable and Function Hoisting with Example. Post the code as your answer.

// first we need to know how complire run code 
/// global execution unit in creation phase set variable undefine
/// if get function create function execution unit and here create 
/// again , creation phase and execution phase



console.log(x);
// get undefine

var x = 10;
// here are x hoistted 

add(1,2);
/// here add are hoisted 
/// we call add function here when get add go and create function executiuon unit
/// and creatino and execution phase and get value

function add(x,y){
    console.log(x,y);
}