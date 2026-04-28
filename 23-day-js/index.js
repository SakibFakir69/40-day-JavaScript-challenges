


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

/// 7

const randomRejection = new Promise((resolve, reject)=>{
    resolve("Start");
})
.then((data)=>{
    console.log(data);
    const isError = Math.floor(Math.random()*10)>5;
    if(isError) {
        throw new Error("Random number failed");
    }
    return "Continue";
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})

// 8
const bothThenPromise = new Promise((resolve, reject)=>{
    resolve("pass")
})
.then((data)=>{
    console.log(data);
    console.log("first data");
})
.then((data)=>{
    console.log(data);
    console.log("2nd data")
})






const chainPromise2 = new Promise((resovle, reject)=>{
    resovle("First");
})
.then((data)=>{
    console.log(data);
    return data="Second"
})
.then((data)=>{
    console.log(data);
    return data="Third";
})
.then((data)=>{
    console.log(data);
})

// 10 

const fakeDB = (id)=>{
    
    
    return new Promise((resolve, reject)=>{
        const randomeDelay = Math.floor(Math.random()*5000);
         const str =["asd",'asds']
            setTimeout(() => {

                const user = {
                    id:randomeDelay+"dfdf34r3",
                    name: randomeDelay%2 ? str[0] : str[1],


                }
                resolve(user);
                
            }, randomeDelay);
    })


}
fakeDB(2)
.then((user)=>{
    console.log(user);
})
fakeDB(29)
.then((user)=>{
    console.log(user);
})




