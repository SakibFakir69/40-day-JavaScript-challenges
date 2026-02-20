
// #1 project toggle info
// let button = document.getElementById("button");
// let text = document.getElementById("text");


// button.addEventListener("click" , ()=>{




//     if(text.textContent=="Off"){
//         text.textContent="On"
//     }else{
//          text.textContent="Off"

//     }


// })



// #2 task manager


let form = document.getElementById("form");
console.log(form);
let textInput = document.getElementById("textInput");
console.log(textInput);
const list = document.getElementById("list");
console.log(list);


// add , removed

let count=0;
form.addEventListener("submit", (event) => {
    count+=1;

    event.preventDefault(); /// remove re-load
    console.log(textInput.value)
    const p = document.createElement("p");
    const button = document.createElement("button");
    p.textContent =count + " " +  textInput.value ;
    button.style.marginLeft="30px"
    button.textContent="Delete";


    button.addEventListener("click", ()=>{
        console.log("delete clicked");
        list.removeChild(p)
    })
    p.appendChild(button);

    list.appendChild(p);


    console.log("from clicked")

})





















