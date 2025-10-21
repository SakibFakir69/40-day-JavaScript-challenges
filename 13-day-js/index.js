


// 1 question 

const question = {


  info: {
    name: "sakib",
    hello: function () {
      console.log("hello");





    },
    arrow:()=>{
      console.log("arroe")

      obj:{
        a:10
        
      }
      console.log(obj);

    },

  },








}

const table = {

  situation: {



  },
  value: {

  }

}



// 2 question 

const user = {
  name: "tapaScript",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

user.greet();


// question 3
const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

obj.greet();


// here is main problem is arrow function , in the arrow function , not create this context 
// if we define arrow function it gave undefine , after change arrow function into arrow function 
// we solved this probelem and get correct result

// 5 question


class SportPlayer {

  static stroage = [];
  constructor(number, ...players) {

    SportPlayer.stroage.push({ number, players })



  }

  showPlayer() {
    console.log(SportPlayer.stroage);

  }
}
const team1 = new SportPlayer(5, "Sakib", "Rakib", "Fahim", "Rafiq", "Imran");
const team2 = new SportPlayer(3, "Amin", "Rahim", "Kabir");

console.log(team1.showPlayer());
console.log(team2.showPlayer());



// 6 question



const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};
// we can attach with = or assine oprator 
car2.describe = car1.describe;
console.log(car2.describe()) /// output will be get car2 object 
// we can use , call  -> use use to refer object




//  7 question
// - B: "Charlie" and undefined ( output )
// arrow function do not create this context and normal function experssion can create
// this context and arrow function introduce us on es6 

