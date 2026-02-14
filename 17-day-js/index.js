

// minit project make text high ligther

const loremText = document.getElementById("lorem-text");
const pText = Array.from(loremText.children);
console.log(typeof pText)
console.log(pText)


const textHighLightColor = (number, color = "red") => {
    pText.forEach((item, index) => {

        console.log(item.clientHeight, item.clientWidth)
        if (index === number) {
            item.style.background = `${color}`;
        }
    })
}
textHighLightColor(2, 'red')
textHighLightColor(4, 'green')
textHighLightColor(3, 'yellow')


//  search fruits and show only match value 

const input = document.getElementById("input");


const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
    "Strawberry",
    "Watermelon",
    "Grapes",
    "Papaya",
    "Kiwi",
    "Cherry",
    "Peach",
    "Pear",
    "Guava",
    "Litchi",
    "Pomegranate",
    "Coconut",
    "Dragon Fruit",
    "Blueberry",
    "Avocado"
];

const tr = document.getElementById("tr")

fruits.forEach((item, key) => {
    console.log(item, 'fruits', key);
    const th = document.createElement("th");
    th.innerText = `${item} - `;
    tr.appendChild(th);

})
// default value
const searchFruits = (name) => {
    console.log(name, ' name ')

    try {
        const result = fruits.filter((item) => item === name);
        console.log(result, name, ' result')

        return result;
    } catch (error) {
        console.log("error" + error)

    }

}


const td = document.getElementById("td")
// search implement here
let searchValue = "";
input.addEventListener("keyup", (event) => {
    console.log(searchValue, 'first search value   ');


    const keyValue = event.key; //// find key press value
    console.log(keyValue, ' key value');

    if (keyValue !== 'Enter' && keyValue!=='Backspace') {

        console.log("enter press")
        searchValue += keyValue;

    } else {
        // search value
        const isRightValue = searchValue.length > 2 ? searchValue : "Pear";

        const searchAns = searchFruits(isRightValue);
        console.log(searchAns, isRightValue, ' ans ')


        console.log(searchValue, ' value')

        // print value

        searchAns.forEach((item, key) => {
            console.log(item, 'fruits', key);
            const th = document.createElement("th");
            th.innerText = `${item} `;
            td.appendChild(th);

        })

        searchValue = "";

    }



})




// make a function to count occ

    