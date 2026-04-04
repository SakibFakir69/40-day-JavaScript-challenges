

// ## 1. Pass a function to greet a user and then thank them

function takeAnotherFunction(name,callback){
    console.log(`welcome ${name}`);
    callback(name);
}

function anotheFn(name=""){
    console.log(`Thanks you ${name}`);

}
takeAnotherFunction('sakib fakir', anotheFn);



// 2 

function calculator(a, b, operationCallback) {
  // Complete this function
  console.log(a,b);
 const result= operationCallback(a,b);
 return result;
}

function add(x, y) {
  return x + y;
}
function sub(a,b)
{
    return a-b;
}
function mul(a,b)
{
    return a-b;
}
function div(a,b)
{
    return a/b;
}
const result = calculator(10,10,div);
console.log(result);


// 3 

function delayedMessage(message, delay, callback) {
  // Your code here
  setTimeout(()=>{
    console.log("code execute",delay);
    console.log(message);
  },delay)
  callback();
}
delayedMessage("Task complete", 2000, () => console.log("Callback Fired!"))