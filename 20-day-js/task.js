



const list = document.querySelector(".list");
// use event deligation 

list.addEventListener("click", (event) => {

  console.log(event.target.textContent);
  const eventValue = event.target;


  console.log(list.children, 'ev');
  const menu = list.children;


  console.log(eventValue, menu, ' data for menu ')

  if (eventValue.classList || eventValue) {
    console.log(eventValue.classList, 'classlist');

    eventValue.classList.add("active")
  }

  for (let i = 0; i < menu.length; i++) {
    if (eventValue !== menu[i]) {
      menu[i].classList.remove("active");
    }
    console.log(menu[i].classList)
  }


})

// 2
const mark = document.getElementById("mark");
const range  = new Range(); /// range 


// 3 
const list2 = document.getElementById("list");
console.log(list2)
for(let i=0; i<100; i++)
{
  let p = document.createElement("p");
  p.textContent=i;
  list.appendChild(p);
}
console.log(list2.children)



// fragment
const list3 = document.getElementById("list3");
const fragment = document.createDocumentFragment();


for(let i=0; i<100; i++){
  let p = document.createElement('a');
  p.textContent="ok";
  fragment.appendChild(p);
}
list3.appendChild(fragment);



// button

let button = document.getElementById("clone");

  let copy = button.cloneNode(true);
  let copy2 = button.cloneNode(false);
copy2.textContent="button 3"
console.log(copy2 , ' button 2 ')
copy.textContent="button 2"
console.log(copy , ' clone button')
document.body.appendChild(copy);
document.body.appendChild(copy2);


// 5   MutationObserver Watcher

const observer = new MutationObserver((mutations)=>{
  console.log(observer , ' mt')

  for(const mt of mutations)
  {
    console.log(mt.type , ' changes')
  }
})

observer.observe(document.getElementById("target"), {
  childList:true,
  attributes:true , 
  subtree:true
})

let target = document.getElementById("target");
target.setAttribute("height",300)
target.firstChild.textContent="first text content"