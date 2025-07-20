


# Function
`` Function are used for safe form repated tas k``


function printThis(){
    console.log("printting...........");
    
}
printThis();;

#function expression
let printMe = function (){

    console.log("inside print");
}

console.log(printMe);




'

function calc(a,b=7){
    // b == 7 rest parameter

    return (2*(a+b));
}


let ans=calc(1);
console.log(ans);

'

rest , usd to gather element 
must be last parameter

// default parameter
// parameter have default value
function calc(a,b=0){

    return ( 2*(a+b))

}

const ans = calc(10);
console.log(ans);


// pure function 
// same input same outpute

// arrow function 



let greetMe = (msg)=>console.log(msg);


// imidate self invok function

(
    function(){
        console.log("iff")
    }
)();
