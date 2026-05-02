console.log("index");



async function wait(ms) {
    console.log("running")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("solved");

        }, ms);
    })
}

async function executeFun() {
    console.log("iam wait for execution");
    const result = await wait(5000);
    console.log(result);
}
executeFun();

// 2 
let count = 0 ;
async function logNumber() {
    count++;
    return count;
}

async function whatInside()
{
   const first = await logNumber();
   console.log(first);
   const second = await logNumber();
   console.log(second);
   const third = await logNumber();
   console.log(third);
}
whatInside();





