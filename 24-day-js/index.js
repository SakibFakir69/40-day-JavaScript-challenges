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
let count = 0;
async function logNumber() {
    count++;
    return count;
}

async function whatInside() {
    const first = await logNumber();
    console.log(first);
    const second = await logNumber();
    console.log(second);
    const third = await logNumber();
    console.log(third);
}
whatInside();

// 3 

const fetchContent = async (file) => {

    const result = await fetch(file);
    const data = await result.json();
    console.log(data);
}
fetchContent('data.json');

// 4 

const fetchData = async (url) => {
    try {
        const res = await fetch(`${url}`);
        const data = await res.json();
        const { name, email, address } = data;
        console.log({ name, email, address })

    } catch (error) {
        console.log(error);

    }
}
fetchData(`https://jsonplaceholder.typicode.com/users/1`);


// 5 
const error = document.getElementById("error");

const fetchDataFromApiAnd_Handel_Error = async (url) => {

    try {
        if (!url.includes("https") || !url.includes("http")) {
            console.log("Missing Right Protocol");

            error.textContent = "Missing Right Protocol"
            error.style.color="red";

        } else {
            const res = await fetch(`${url}`);
            const data = await res.json();
            const { name, email, address } = data;
            console.log({ name, email, address })

        }

    } catch (error) {
        console.log(error);
        error.textContent = `${error}`;


    }


}
fetchDataFromApiAnd_Handel_Error('hsttps://jsonplaceholder.typicode.com/users/1')



// format
// fetch('/api/data')
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.error(err));

const data =async ()=>{
    const res = await fetchData('/api/data');
    const myData = await res.json();
    console.log(myData);
}
data();
// 6 -> build a project




