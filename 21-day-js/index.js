
console.log("quiz application")

const recipesData = [
    {
        title: "Spaghetti Carbonara",
        ingredients: ["Spaghetti", "Eggs", "Parmesan Cheese", "Bacon"],
        instructions: "Cook pasta. Mix with eggs and cheese. Add bacon."
    },
    {
        title: "Chicken Curry",
        ingredients: ["Chicken", "Curry Powder", "Onions", "Tomatoes"],
        instructions: "Cook onions, add chicken, spices, and tomatoes."
    },
    {
        title: "Grilled Cheese Sandwich",
        ingredients: ["Bread", "Cheddar Cheese", "Butter"],
        instructions: "Butter bread, place cheese between slices, and grill."
    },
    {
        title: "Veggie Stir Fry",
        ingredients: ["Broccoli", "Carrots", "Bell Peppers", "Soy Sauce"],
        instructions: "Stir fry vegetables and add soy sauce."
    }
];


const body = document.getElementById("body");
const card = document.getElementById("card");


// filter


const input = document.getElementById("input");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click" , (event)=>{
    event.preventDefault();
    const searchValue = input.value;
    console.log(searchValue , ' search value');


})





recipesData.forEach((item, key) => {
    const { ingredients, title, instructions } = item;

    const copyCard = document.createElement("div")

    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    // add items on element
    h3.textContent = title;
    p.textContent = instructions;
    // style
    h3.style.color = "white"
    copyCard.classList.add("recipeCard")
    p.style.marginBottom = "4px"
    p.style.color="black"

    // append
    copyCard.appendChild(h3);
    copyCard.appendChild(p);


    if (Array.isArray(ingredients)) {

        ingredients.forEach((item, indx) => {
            let span = document.createElement("span");

            console.log(item);
            span.style.padding = "2px";
            span.style.border = "1px solid gray";
            span.style.borderRadius = "5px";
            span.style.margin = "3px";
            span.style.marginTop = "-1px";
            span.style.color = "white"

            span.textContent = item + ", ";


            copyCard.appendChild(span);
        })


    }


    card.appendChild(copyCard);

})
console.log(card)

