



// # Tasks

// Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

// > **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

// ## 1. What will be the output of the following code?

// ```js
// try {
//     let r = p + 50;
//     console.log(r);
// } catch (error) {
//     console.log("An error occurred:", error.name);
// }
// ```



// - ReferenceError
// - SyntaxError
// - TypeError
// - No error, it prints 10
// ans 
// - ReferenceError

// ans 
// the result is reference error because in try block r= p but p is not define after calc go catch block here got undefine for p 

// ## 2. Write a function processPayment(amount) that checks if the amount is positive and not exceeding balance. If any condition fails, throw appropriate errors



// function processPayment(amount) {


//     const balance = 786893;


//     try {
//         // logic here

//         if(0==amount || 0<amount)
//         {
//             throw new Error("Amount must be lower than balance and must be greater than 0")

//         }
//         if(amount>balance)
//         {
//             throw new Error("Amount must  be lower than  balance")
//         }




//     } catch (error) {



//         console.log(error);
        
//     }



// }
// processPayment(1111111100)
// ## 3. Implement a custom error handling system for an e-commerce website that categorizes errors as

// - UserError
// - PaymentError
// - ServerError
// - EmailError

class UserError extends Error{


    constructor(msg)
    {
        super(msg); /// access prent class

        // create own properties

        this.name="User Error";
        this.message=  msg|"Please Enter Your Correct Information"


    }
}


class PaymentError extends Error{
    constructor(msg,amount)
    {
        super(msg);

        this.cause= `amount must be positive your enter ${amount}`

    }
}


class ServerError extends Error{

    statusCode= 500;

    constructor(msg)
    {
        super(msg);
        this.name="Server error";
        this.timeStap = new Date().toLocaleString();
        this.statusCode=this.statusCode;

    }
}


class EmailError extends Error{

    constructor(msg, email){

        super(msg);

        this.email=email

        if(!userEmail.includes("@")){
            this.name="Please Enter your valid email";
            this.cause='you have missing @ to your email address'
        }

    }

}


try {
     if(300<10)
    {
        throw new  PaymentError("payment error",1000)
    }
} catch (error) {

    throw new PaymentError(error, 100)
    
}


try {

   

    if(!"sakib".includes("t"))
    {
        throw new UserError("Error failed")
    }else{
        console.log("right")
    }
    
} catch (error) {

    console.log(error)


    
}


// ## 4. Simulate an API call function fetchData(url). If the URL does not start with "https", throw an "Invalid URL" error. Handle it using try...catch


const fetchData = (url)=>{

    if(!url) return;

    try {
        if(url.includes("https")){
        throw new Error('Invalid URL')
    }
        
    } catch (error) {
        console.log(error);
        
    }

}


// ## 5. Implement a custom error type ValidationError using constructor functions to handle form validation errors

// Example:

// ```js
// const userInput = { username: "", age: -2 };
// validateUser(userInput);

// // Output:
// // ValidationError: Username cannot be empty
// // ValidationError: Age must be a positive number
// ```

// ## 6. Write a function readFile(filePath) that simulates reading a file. If the file does not exist (simulate with a condition), throw a "File not found" error. Handle the error with try...catch. Make sure you have code to handle releasing the IO resources

// Please note, you do not have to implement the actual IO operation here. Just use the console.log to simulate them.

// ## 7. Write a function parseJson(str) that takes a JSON string and tries to parse it using JSON.parse(). If parsing fails, catch the error and return "Invalid JSON"

// ## 8. What is the purpose of throw in JavaScript?

// - It catches an error
// - It stops the execution of a program
// - It creates a new error manually
// - It prints an error message


// ## 9. What does the finally block do in a try...catch statement?

// - Runs only if an error occurs
// - Runs only if no error occurs
// - Runs regardless of whether an error occurs or not
// - Stops the execution of the script

// ## 10. Create a table exaplaining the usages of try, catch, throw, rethrow, error object