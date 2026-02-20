console.log("JS connected");


// 1. Create a form dynamically using JavaScript and manipulate its behavior

// Add input fields dynamically based on user selection e.g., text, email, number

// Add a submit button that logs all the input values as an object.
// Add a reset button that clears the form.
// Use createElement, appendChild, setAttribute, and addEventListener.



const form = document.getElementById("form");


const input = document.createElement("input");

const textInput = input;
textInput.type = "text";
textInput.name = "text";
textInput.placeholder = "Enter your text";
textInput.id = "text";

// EMAIL
const input2 = document.createElement("input");
const emailInput = input2;
emailInput.type = "email";
emailInput.name = "email";
emailInput.placeholder = "Enter your email";
emailInput.id = "email";

// NUMBER 
const input3 = document.createElement("input");
const numberInput = input3;
numberInput.type = "number";
numberInput.name = "number";
numberInput.placeholder = "number";
numberInput.id = "number";






const list = [textInput, emailInput, numberInput];

for (let i = 0; i < list.length; i++) {

    form.appendChild(list[i]);
}
const button = document.createElement("button");
button.textContent = "submit";
form.appendChild(button);


// submit

button.addEventListener("click", () => {
    const text = textInput.value;
    const email = emailInput.value;
    const number = numberInput.value;

    const payload = {
        text: text,
        email: email,
        number: number
    }
    console.log(payload);
    alert("form submitted")
})





// 3. Theme Switcher with Persistence

// Toggle theme using a button or switch.

// Persist the theme in localStorage and apply on page load.
// Change background and text color based on the theme.


const toggleButton = document.getElementById("button");
let isColor;

toggleButton.addEventListener("click", () => {
    console.log("clicked")

    const isStateThemeValue = localStorage.getItem("theme");

    console.log(isStateThemeValue); //// flag state 


    if (isStateThemeValue === "dark") {
        localStorage.setItem("theme", 'light')
        document.body.classList.add("bodySwitchColor");
        localStorage.removeItem("dark");
        document.body.classList.remove("body")

    } else {
        localStorage.setItem("theme", "dark")
        document.body.classList.add("body");

        document.body.classList.remove("bodySwitchColor")

    }
    console.log(isStateThemeValue, 'state')



})



console.log(isColor)



// task - 2 

// 2. Add, delete, and search rows in a dynamic table
// A form to add rows (Name, Age, Role).

// Each row should have a “Delete” button to remove it.

// Add a search input that filters the rows by name.
// Use insertRow, deleteRow, and textContent/innerText.


const documentElement = (value) => {
    if (!value) {
        return "value or id not founded"
    }
    const result = document.getElementById(value);
    return result;
}

const name = documentElement("name");
const age = documentElement("age");
const role = documentElement("role");
const submit = documentElement("submit");
const myTabel = documentElement("myTabel");
let count = 0;
submit.addEventListener("submit", (event) => {
    event.preventDefault(); /// stop re-load after submit

    const createDeleteButton = document.createElement("button");

    const payload = {
        name: name?.value,
        age: age.value,
        role: role.value,

    }
    createDeleteButton.textContent="Delete"
    let row = myTabel.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
     let cell4ButtonAdd = row.insertCell(3);

    cell1.innerHTML = payload.name
    cell2.innerHTML = payload.age
    cell3.textContent = payload.role,
    cell4ButtonAdd.appendChild(createDeleteButton);



    createDeleteButton.addEventListener("click", ()=>{

        row.remove();
    })
    




})


const inputSearch = documentElement("input")

inputSearch.addEventListener("keyup" , (event)=>{
    console.log(event);
    
    console.log(event.key)
})



