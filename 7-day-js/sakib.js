
// make guessing game




let form = document.getElementById("form");
let input = document.getElementById("input");
let show = document.getElementById("show");
let text = document.getElementById("text")

let number;
window.onload = () => {

    number = Math.floor(Math.random() * 11);


}

let counter = 0;
const span = document.createElement("span");
span.innerText = " ";


// try again 



form.addEventListener("submit", (e) => {
    e.preventDefault();
    counter++;


    console.log(number,

    )



    if (input.value === " " || input.value === undefined) {
        alert("Enter your number")
    }

    if (number > input.value) {

        span.style.color = "red"
        span.innerText = "To High"
        span.style.fontSize = "3em"

        text.appendChild(span);

    }
    if (number < input.value) {
        span.style.color = "red"
        span.innerText = "To Low"
        span.style.fontSize = "3em"
        text.appendChild(span);

    }
    if (number === Number(input.value)) {
        span.innerText = " ";
        const p = document.createElement("p");
        const p2 = document.createElement("p");
        let try_again = document.createElement("button");


        try_again.addEventListener("click", () => {

        

                number = Math.floor(Math.random() * 11);


         

            setTimeout(() => {
                counter = 0;
                p.style.color = " ";
                p.innerText = " ";
                p2.innerText = " ";
                try_again.innerText = " ";
                try_again.style.height = ""
                try_again.style.width = ""
            }, 400);


        })



        p.style.color = "green";
        p.innerText = "Congratulations";

        try_again.innerText = "Try Again "
        try_again.style.height = "40px"
        try_again.style.width = "140px"

        p.style.fontSize = "3em"
        p2.style.fontSize = "3em"
        p2.innerText = `Total count : ${counter}`;

        text.appendChild(try_again);
        text.appendChild(p);
        text.appendChild(p2);


        input.value=" ";



    }




})

