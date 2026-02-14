


// ## 1. Find the Most Frequent Word in a Paragraph

// Consider the follwoing HTML:

// ```html
// <div id="text">This is a test. This test is only a test.</div>
// ```

// Now, find and display the most frequently occurring word. Also put a count of occurance beside it.

// Hints:

// - Use document.querySelector() or getElementById() to select the paragraph.

// - Convert the text into an array of words.

// - Use querySelector() to display the most frequent word along with the count inside another `<div>`.


const countTheWord = (startIndex, array) => {

    let count = 0;

    for (let i = startIndex; i < array.length; i++) {

        if (array[startIndex] === array[i]) {

            count++;

        }


    }
    return count;

}

const text = document.getElementById("text");
console.log(text.textContent);

const wordCount = {};

const mostWordText = text.textContent.split(" "); /// convert to array 

console.log(mostWordText);
let ans = "";
let mxNumber = -Infinity;

const ansText = document.getElementById("ans");

for (let i = 0; i < mostWordText.length; i++) {

    // find count
    const result = countTheWord(i, mostWordText);

    console.log(result, mostWordText[i]);
    //    compare value
    if (result > mxNumber) {
        mxNumber = result;
        ans += mostWordText[i];

        console.log(mxNumber, ' number')

    }


}
ansText.innerText = " Most count word is ->" + ans;
console.log(ans, mxNumber);




// ## 2. Create a zebra pattern

// Consider the following HTML:

// ```html
// <ul id="cars">
//     <li>BMW</li>
//     <li>Mahindra</li>
//     <li>Audi</li>
//     <li>Toyota</li>
//     <li>Honda</li>
//     <li>Hundai</li>
//     <li>Tata</li>
//     <li>Suzuki</li>
// </ul>
// ```

// Now put alternate colors and background colors to each of the list tags. for example,

// - If tne BMW is in white color text, the background should be in black color.

// - Then for the next car it will be reversed, the color is black and the background is white.

// - Then again the next one is white color and background black
// - So on.

const carsList = document.getElementById("cars");
console.log(carsList?.children);

function carListColor(value){
    const allElement = value;
    
    for(let i=0; i<allElement.length; i++)
    {
        const index=i;

        if(index%2==0)
        {
            allElement[i].style.color="white"; // text color white
            allElement[i].style.backgroundColor="black"
        }else{
             allElement[i].style.backgroundColor="white"; // text color white
            allElement[i].style.color="black"

        }
    }

}
carListColor(carsList?.children);



// ## 3. Write different ways we can access DOM and what they returns

// 1 - getElementByID - need gave id here -> return all match with className element

const id = document.getElementById("id");
console.log(id , ' get element by id')
// 2 - get elementByClassName
const className = document.getElementsByClassName("class")
console.log(className , ' getElementByClassName')
// 3 - getElementByTag name
const tag = document.getElementsByTagName("section");
console.log(tag ,"get element by name")
// 4 - select 1 element and return
const query = document.querySelector("#id");
console.log(query);
// 5 - all element
const allQuery = document.querySelectorAll("section");
console.log(allQuery , 'all query')

// 
// ## 4. Find and Replace Text Inside a Page

// Write a script that finds all occurrences of a word inside a `<p>` tag and replaces them with another word dynamically.


const p= document.getElementById("p");
console.log(p.textContent)
const pArr = p.textContent.split(" ");
const pNewArr=[];

for(let i=0; i<pArr.length; i++)
{
    const result = countTheWord(i , pArr);

    if(result>1)
    {
       pArr[i]=pArr[i].replaceAll(pArr[i] , 'new word')
    }

}
console.log(pArr)
p.textContent=pArr;





// ## 5. Extract and Count Unique Links from a Page

// Count all the unique hyperlinks (`<a>`) in a page and display their count.

const countA = document.getElementsByTagName("a");
console.log(countA?.length , countA)

for(let i=1; i<countA.length; i++)
{
    countA[i].textContent=i + "         ";
}

