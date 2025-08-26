// # Tasks
// Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

// > **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

// ## 1. What will be the output of the following code and why?
// ```js
// function outer() {
//     let count = 0;
//     return function inner() {
//         count++;
//         console.log(count);
//     };
// }
// const counter = outer();
// counter();
// counter();
// ```


//  output -> output will be 1, 2 because we know javascript execution context 
/// in every funcition execution js create  2 phase 1 execution phase another is creation or loading phase 
/// in loading phase all value gaven undefine , in here first outer function execution inside this function have inner function and here count++ , we know inner function can access outer function variable 
/// and count is a local variable in this scope so inner function can easliy acces count variable 
/// call inner function variable increment 1 



// ## 2. What will be the output and why?
// ```js
// function testClosure() {
//     let x = 10;
//     return function () {
//         return x * x;
//     };
// }
// console.log(testClosure()());
// ```


// output -> 100 , because here testclosure under have another function and this function can access x because x in this scope are local variable so easily access in inner function call output will be 100





// ## 3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.


// // create a button 
// let button = document.getElementById("button");
// // show result
// let count = document.getElementById("count")

// // function 
// console.log(button, count)
// function outerButton() {

//     let count = 0;

//     return function x() {
//         count++;
//         document.getElementById("count").innerText = `${count}`
//         console.log(count)





//     }

// }


// let call = outerButton();
// button.addEventListener("click", () => {


//     console.log(call());





// })


// ## 4. Write a function `createMultiplier(multiplier)` that returns another function to multiply numbers.



function createMultiplier(multiplier)
{

    return function (num){
      return  num * multiplier
        
    }
 

}

console.log(createMultiplier(10)(1));



// ## 5. What happens if a closure references an object?
// - 1) The object is garbage collected immediately
// - 2) The object remains in memory as long as the closure exists
// - 3) The object is automatically cloned
// - 4) None of the Above.

//2 , because in local scope js rembeber object 

// ## 6. Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functuions.



function myFactory(){

  let count = 0 ; 

   function  incrementCounter(){
    count++;
    return count;
  }
  function decrementCounter(){

    count--;
    return count;
  }

  function resetCounter(){
    count=0;
    return count;
  }
  function getvalue(){
    return count;
  }

  return {
    inc:incrementCounter,
    dec:decrementCounter,
    rest:resetCounter,
    value:getvalue

    
  }

  


}
const x = myFactory();
console.log(x.value())
console.log(x.inc())
console.log(x.dec())