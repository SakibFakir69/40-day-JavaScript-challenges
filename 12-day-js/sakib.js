
// # Tasks

// Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

// > **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

// ## 1. What will be the output and why?

// ```js
// const user = { name: "Alex", age: undefined };
// console.log(user.age ?? "Not provided");
// ```

// output -> not provide because here nullish colision oprator chck null , undefine return right side 

// ## 2. What will happen if we try to modify a frozen object?

// ```js
// const obj = Object.freeze({ a: 1 });
// obj.a = 2;
// console.log(obj.a);
// ```

/// output -> 1 because frezze do not allow to change object value 





// ## 3. Given an object with deeply nested properties, extract name, company, and address.city using destructuring

// ```js
const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107"
    }
  }
};


const { name, company, } = person;
console.log(name, company, company.location.city)



// ## 4. Build a Student Management System

// - Store student details in an object (name, age, grades).
// - Implement a method to calculate the average grade.



class StudentMangementSystem {

  allStudents=[];


  constructor(name, age,grades)
  {
    this.name=name;
    this.age=age;
    this.grades=grades;
  }


  avgGrade(){

    const mark = Array.isArray(this.grades) && this.grades.reduce((prev, curr)=> prev+curr,0);
    const ans = (mark/this.grades.length);

    if(ans>80 && ans<=100)
    {
      console.log("A+");
    }else if(ans>70 && ans<=79)
    {
      console.log("A")
    }else if(ans>59  && ans<=69)
    {
      console.log("a-")
    }else{
      console.log("failed")
    }

  }



}


const s1 = new StudentMangementSystem("Sakib", 20, [8, 90, 85]);


s1.avgGrade()

// ## 5. Book Store Inventory System

// - Store books in an object.
// - Add functionality to check availability and restock books.
class BookInventory {

  static books = [];

  constructor(name, size, stock) {
    this.name = name;
    this.size = size;
    this.stock = stock;
    const book = { name: this.name, size: this.size, stock: this.stock };
    BookInventory.books.push(book);

  }

  // find this book 



  // take book
  takeBook(name, number) {

    if (!name || !number) {
      console.log("please full fill info");
      return;
    }

    const findBooks = BookInventory.books.find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );

    const { stock } = findBooks;

    if (stock<=0 || stock==0) {
      console.log("book not avaiable");
      return;
    } else {
      findBooks.stock -= number;
    }



  }


  // add book

  addBook(name, stock) {

    if (!name || !stock) {

      console.log("not find full info");
      return;
    }
    const findBooks = BookInventory.books.find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );


    if (findBooks) {
      findBooks.stock += stock;
      console.log(findBooks.stock, ' stock ')
    } else {
      console.log("failed to add ")
    }


  }

  show() {
    console.log(BookInventory.books, "show");
  }


}


const book = new BookInventory("sakib", 10, 120);
const book2 = new BookInventory("sakib2", 10, 120);

book.addBook("sakib", 540)
console.log(book);
book2.takeBook('sakib2',20)
console.log(book, "latest")
book.show()


// this is inheritence



// ## 6. What is the difference between Object.keys() and Object.entries()? Explain with examples



// object we got key of object , and object.entrise convrt object to array

const info = {
  name: "sakib fakir",
  age: 10
}
// object key 
console.log(Object.keys(info)) /// name ,age 
console.log(Object.entries(info))

// ## 7. How do you check if an object has a certain property?

// hasOwnProperty(object, property)

// ## 8. What will be the output and why?

// ```js
// const person = { name: "John" };
// const newPerson = person;
// newPerson.name = "Doe";
// console.log(person.name);
// ```
// output -> doe because overwrite prevous name  and this is refernce type point same object



// ## 9. What’s the best way to deeply copy a nested object? Expalin with examples

// we can use json,parse(json.stringfy(obj)) , is copy not gave memory refeercene it create new memory location
// shoallow copy create reference and point same value and deep copy not point and create new memory location

// ## 10. Loop and print values using Object destructuiring

// ```js
const users = [
  {
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
  },
  {
    'name': 'Bob',
    'address': 'Canada',
    'age': 53
  },
  {
    'name': 'Carl',
    'address': 'Bangalore',
    'age': 26
  }
];


users.forEach((item, key) => {
  const { name, address, age } = item;
  console.log(name, address, age)
})