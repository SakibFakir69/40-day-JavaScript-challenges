
console.log("quiz application")



// ----------------------


const body = document.getElementById("body");
const card = document.getElementById("card");

// filter


const input = document.getElementById("input");
const searchButton = document.getElementById("searchButton");
const reset = document.getElementById("reset");


let recipesData = [
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





// MAKE RENDER FUNCTION 

const renderData = (data, search) => {

    if (search === "") {
        return recipesData;
    }
    const result = Array.isArray(data) ? data.filter((item) => item.title.toLowerCase() === search.toLowerCase()) : []
    return result;
}


let result = renderData(recipesData, '');
showUI(result); /// init show

searchButton.addEventListener("click", (event) => {

    event.preventDefault();
    const searchValue = input.value.toLowerCase();
    console.log(searchValue, ' search value');
    let result = renderData(recipesData, searchValue);

    showUI(result);
    /// after search

})
reset.addEventListener("click", () => {

    let result = renderData(recipesData, '');
    showUI(result); /// init show
})



function showUI(data = []) {

    const divForNotFounded = document.createElement("p")


    if(data.length==0)
    {
        divForNotFounded.textContent="No Data Founded";

    }




    card.innerHTML = '';

    data.forEach((item, key) => {
        const { ingredients, title, instructions } = item;

        const copyCard = document.createElement("div")

        const h3 = document.createElement("h3");
        const p = document.createElement("p");

        // IF D1ATA EMPTY



        // add items on element
        h3.textContent = title;
        let isOpen = false;

       



        p.textContent = instructions;
        // style
        h3.style.color = "white"
        copyCard.classList.add("recipeCard")
        p.style.marginBottom = "4px"
        p.style.color = "black"

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
                span.textContent = item + " ";
                copyCard.appendChild(span);
            })


        }



        card.appendChild(copyCard);

    })
    card.appendChild(divForNotFounded);

}









console.log(card)


