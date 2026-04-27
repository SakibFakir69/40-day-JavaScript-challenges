


// 1 
const firstPromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("Hello, Promises!");
        
    }, 1000);

})
.then((data)=>{
    console.log(data);
})

const rejectPromise = new Promise((resolve, reject)=>{
    reject("Something went wrong!");
})
.catch((error)=> console.log(error))
// 3

const coinToss = new Promise((resolve,reject)=>{
    const coin = ['head','tail'];
    const randomIndex =Math.floor(Math.random()*coin.length);
    const result = coin[randomIndex];
    setTimeout(() => {
        resolve(result);
        
    }, 1000);
})
.then((data)=> console.log(data))

// 4 

function checkAge(age){

    const agePromise = new Promise((resolve, reject)=>{
        if(age>18)
        {
            resolve("pass")
        }
        reject("fail");
    })
    .then((data)=> console.log(data))
    .catch((error)=> console.log(error))
}

checkAge(20)
// 5

const chainPromise = new Promise((resovle, reject)=>{
    resovle("step 1");
})
.then((data)=>{
    console.log(data);
    return data="step 2"
})
.then((data)=>{
    console.log(data);
    return data="step 3";
})
.then((data)=>{
    console.log(data);
})


// 6 
const newPromiseResolved = new Promise((resolve, reject)=>{
    resolve(5);
})
.then((data)=>{
    data=data+data;
    return data;
})
.then((data)=>{
    data=data*data;
    return data;
})
.then((data)=>{
    console.log(data)
})








