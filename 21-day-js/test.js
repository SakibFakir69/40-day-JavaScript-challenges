



const obj1 = {
  name: "Sakib",
  address: { city: "Dhaka", code: 100 }
};

const obj2 = JSON.parse(JSON.stringify(obj1));

obj2.address.city = "Faridpur";

console.log(obj1.address.city); 
console.log(obj2.address.city); 
console.log(obj2===obj1)