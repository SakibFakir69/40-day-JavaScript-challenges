

// ## 1. Pass a function to greet a user and then thank them

function takeAnotherFunction(name, callback) {
  console.log(`welcome ${name}`);
  callback(name);
}

function anotheFn(name = "") {
  console.log(`Thanks you ${name}`);

}
takeAnotherFunction('sakib fakir', anotheFn);



// 2 

function calculator(a, b, operationCallback) {
  // Complete this function
  console.log(a, b);
  const result = operationCallback(a, b);
  return result;
}

function add(x, y) {
  return x + y;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a - b;
}
function div(a, b) {
  return a / b;
}
const result = calculator(10, 10, div);
console.log(result);


// 3 

function delayedMessage(message, delay, callback) {
  // Your code here
  setTimeout(() => {
    console.log("code execute", delay);
    console.log(message);
  }, delay)
  callback();
}
delayedMessage("Task complete", 2000, () => console.log("Callback Fired!"))


// 4 

function filterNumbers(arr, conditionCallback) {

  // Use loop and callback to return filtered array
  const result = [];

  for (let i = 0; i < arr.length; i++) {

    const ans = conditionCallback(arr[i]);

    if (ans) {
      result.push(arr[i]);
    }

  }
  console.log(result);



}



filterNumbers([1, 2, 3, 4], n => n > 2) // should return [3, 4]






function task1(callback) {

  console.log("Task 1 done");

  callback();

}

function task2(callback) {

  console.log("Task 2 done");
  callback();
}

function task3() {
  console.log("Task 3 done");
}


task1(()=>task2(task3));




