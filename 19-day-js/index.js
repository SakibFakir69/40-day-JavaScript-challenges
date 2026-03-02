



// tabs 

const tabs = document.getElementById("tabs");
const home = document.getElementsByClassName("tab-contents-home")[0];
const about = document.getElementsByClassName("tab-contents-about")[0];
const contact = document.getElementsByClassName("tab-contents-contact")[0];
console.log(home, about, contact, ' home')


about.classList.add("hide")
contact.classList.add("hide")


tabs.addEventListener("click", (event) => {

    console.log(event);


    const isEventName = event.target.innerText || "default";

    if (isEventName == "About") {
        console.log("about");

        home.classList.add("hide");
        contact.classList.add("hide");
        about.classList.remove("hide")


    } else if (isEventName === "Contact") {
        console.log("contact");
        contact.classList.remove("hide");
        home.classList.add("hide");
        about.classList.add("hide")
    } else {
        home.classList.remove("hide");
        contact.classList.add("hide");
        about.classList.add("hide")
    }









})


// NOW MAKE FOR KEY DOWN LOGIC SWITCH TAB

document.addEventListener("keydown", (event) => {
    console.log(event.key
        , ' event'
    );

    if (event.key === "1") {
        console.log("home")
        home.classList.remove("hide");
        contact.classList.add("hide");
        about.classList.add("hide")

    } else if (event.key === "2") {
  console.log("about")
        home.classList.add("hide");
        contact.classList.add("hide");
        about.classList.remove("hide")
    } else if (event.key === "3") {
        console.log("contact");
        contact.classList.remove("hide");
        home.classList.add("hide");
        about.classList.add("hide")
    }

})