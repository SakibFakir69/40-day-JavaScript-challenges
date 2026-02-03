import { isFindStringCount } from "./test";

// 1  Create an array of 5 elements using the Array Constructor.
const fiveArray = new Array(1, 2, 3, 4, 5);
/// 2  Create an array of 3 empty slots.
const arr = new Array(3);
/// 3 Create an array of 6 elements using the Array literals and access the fourth element in the array using its `length` property
const sixArray = [1, 2, 3, 4, 5, 6];
// 4 Use the `for` loop on the above array to print elements in the odd index.
const loopArray = [1, 2, 54, 56];
for (let i = 0; i < loopArray.length; i++) {
    if (loopArray[i] % 2 == 0) {
        console.log(i);
    }
}
// 5- Add one element at the front and the end of an array.
const addElement = [10, 20, 30, 40];
addElement.unshift(1);
addElement.push(6);
//  6-  Remove an element from the front and the end of an array.
addElement.shift();
addElement.pop();

// 7 Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.
const foodArray = ["mango", "jackfruits", "onoion", "apple", 'patoto', "leci", "watermalon", "pinaaple", "sugarbit", "ok"]
const [first, second, three, four, five, six] = foodArray;
console.log(six);
////  Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.
const [n, n1, ...sixFood] = foodArray;
console.log(sixFood);

console.log(sixArray[4], sixArray[sixArray.length - 2])
//9 - Clone an Array(Shallow cloning)

const arrClone = [1, 2, 34];
const clone = arrClone;
// copy refernce
// 10 - Empty an array using its length property

arrClone.length = 0;
// empty array now 

const ele = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].splice(0, 6);
ele.forEach((num) => {
    if (num == 5) {
        console.log(num);
    }
})
// 12 -Create an Array of 10 elements. Use the `splice()` method to empty the array.
const ele2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(ele2.splice(0, 0))


// 13-  Create an Array of 10 elements. You can empty the array in multiple ways: using the `length` property, using the `pop()` method, using the `shift()` method, setting the array with `[]`, or the `splice()` method. Which among these methods are most efficient and why?

const ten = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/// use length because no need loop for remove just make empty and replace the array length
// 14 -  What happens when you concatenate two empty arrays?
// if add 2 array with concat make one array with this two array

//15 -  How can you check if a value is partially matching with any of the elements of an Array?
// i check use find , include,filter
// 16- What is the difference between the slice() and splice() methods?
// slice -> copy ( startIndex, endINdex)
// splice -> delete (startIndex, EndIndex)

// 16 - Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. You must be doing this in an immutable way such that the source array never gets modified.
const myStr = ['a', 'b', 'c', 'd'];
const asc = myStr.slice().sort();
const desc = myStr.slice().sort().reverse();
console.log(asc, desc)

// 18 - Can you give examples of sparse and dense arrays?
///  dens = [ 1,2,3,4,5] , parse = [1,,4]
//  19 - Give a practical usages of the .fill() method
/// if we need full all array in same value 
const money = [1, 2, 4];
money.fill(100);
console.log(money)
// 20 -  How to convert an array to a string?
const cnvArr = [1, 3];
const strArr = String(cnvArr);
console.log(strArr);


const employees = [
    { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
    { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
    { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
    { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
    { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
    { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
    { id: 7, name: "George", departmentId: 3, salary: 5200 },
    { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
    { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
    { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];
const departments = [
    { id: 1, name: "HR" },
    { id: 2, name: "Engineering" },
    { id: 3, name: "Marketing" },
    { id: 4, name: "Sales" },
];

// 21 -  Can you filter employees who work in the "Engineering" department?

const empEngineering = employees.map((emp) => {
    const empId = emp.departmentId;
    const department = departments.find((dep) => dep.id == empId);
    /// get department
    const payload = {
        ...emp,
        department: department,

    }

    return payload;

}).filter((emp) => emp.department.name === 'Engineering');
console.log(empEngineering)

// 22 -Create a new array that combines employee names and department names in the format: "Alice (HR)".

const newDepartmentArray = employees.map((emp) => {

    const empID = emp.departmentId;
    const department = departments.find((dep) => dep.id === empID);

    const { name, ...obj } = emp;

    const newPayload = {
        name: `${name}(${department.name})`,
        ...obj

    }
    return newPayload;


})
console.log(newDepartmentArray, "new");


// 23- Find the highest salary among employees

let highestSalary = -Infinity;
for (let i = 0; i < employees.length; i++) {
    highestSalary = Math.max(employees[i].salary, highestSalary);
}
console.log(highestSalary);
//24-  Check if there is at least one employee in the "Sales" department.

let isFlag = false;
for (let i = 0; i < newDepartmentArray.length; i++) {
    const nameStr = newDepartmentArray[i].name;
    const newName = nameStr.split('(')

    if (newName[1].at(0) === 's' || newName[1].at(0) === 'S') {
        isFlag = true;
        break;
    }

}
console.log(`Sales department ${isFlag}`)

// 25 -  Write a function to filter employees earning more than 6000.

const highPayEmploy = employees.filter((emp) => emp.salary > 6000);
console.log(highPayEmploy, 'asdf');

// 26 - Create an array of employee names only.

const onlyName = employees.map((emp) => {
    const { name } = emp;
    return { name }
})
console.log(onlyName)
// 27 - Calculate the total salary of all employees using
const totalSalary = employees.reduce((acc, currEmploy) => acc + currEmploy.salary, 0);
console.log(totalSalary);
// 28 -  Is there any employee earning less than 5000?
const lessThen = employees.filter((emp) => emp.salary < 5000);
console.log(lessThen)
// 29  -  Find the first employee who earns exactly 5100.
const exactSalary = employees.find((emp) => emp.salary === 5100);
console.log(exactSalary)

// 30 - Find the last employee in the "HR" department.
const hrDepartMentlastHr = employees.map((emp) => {
    const empID = emp.id;
    const department = departments.find((dep) => dep.id === empID && dep.name.includes("HR"));

    return { ...emp, department }


})
const newHr = hrDepartMentlastHr.filter((hr) => hr.department?.name.includes("HR"));
console.log(newHr[newHr.length - 1])
// 31 -  Find the first employee in the "Marketing" department.

const marketingDepartment = employees.map((mr) => {
    const id = mr.id;
    const department = departments.find((dep) => dep.id === id);

    return { ...mr, department };
})
console.log("marketing")
const ans = []
for (let i = 0; i < marketingDepartment.length; i++) {
    console.log(marketingDepartment[i])
    if (marketingDepartment[i]?.department?.name.includes("Marketing")) {

        ans.push(marketingDepartment[i]);
        break;
    }
}
console.log("ans")
console.log(ans)


const moreThansFourThousand = employees.filter((emp) => emp.salary > 4000);
console.log(moreThansFourThousand)

// 33 -  Find the first employee in the "Sales" and "HR" department. 

// 
let isHr = false
let isSales = false;
const hrAndSalesDepartment = newDepartmentArray.forEach((dep) => {


    if (isHr === false) {
        if (dep.name.includes("HR")) {
            console.log(dep)
            isHr = true;
        }
    }
    if (isSales === false) {
        if (dep.name.includes("Sales")) {
            console.log(dep);
            isSales = true;

        }

    }


})

// 34 - Verify if all employees belong to a department listed in the departments array.
console.log(newDepartmentArray)
// 35 - Log each employee's name and department name to the console.
newDepartmentArray.forEach((dep) => {
    const { name } = dep;
    const symbolIndex = name.indexOf("(");
    const lastSymbol = name.lastIndexOf(")");
    const empName = name.slice(0, symbolIndex);
    const depName = name.slice(symbolIndex + 1, lastSymbol);
    console.log(empName, depName)

}
)

// 36 - Extract all employee names into a single array.
const allName = [];

newDepartmentArray.forEach((dep) => {
    const { name } = dep;
    const symbolIndex = name.indexOf("(");
    const lastSymbol = name.lastIndexOf(")");
    const empName = name.slice(0, symbolIndex);
    allName.push(empName)

}
)
console.log(allName)

// 37 - Increment each employee's salary by 10%


const salaryIncrement = employees.map((emp) => {
    let { salary } = emp;
    // (salary*10)/100
    const addSalary = (salary * 10) / 100;
    salary += addSalary;

    const mixEmp = departments.find((dep) => dep.id === emp.id || {});

    const payload = {
        ...mixEmp,

        salary: salary
    }

    return payload;

})
console.log(salaryIncrement, " new one");


// 38 - Assume each employee can have multiple skills. Create an array of employee skills and flatten them. Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].
const fln = employees.flat();
console.log(fln)
// in flat use make flatten we can pass depth number

// 39 - Find the total salary of all employees working in the "Engineering" department

const engrSalary = empEngineering.reduce((acc, currValue) => acc + currValue.salary, 0);
console.log(engrSalary)

// 40-  Check if there is any department where all employees earn more than 5000.
// first find salary upper than 5000 then check which departments


// 1 -> first mix one object then check 
const mixDepartmentForSalary = employees.map((item) => {
    const { departmentId } = item;
    const departmentItems = departments.filter((dep) => dep.id === item.departmentId);
    const { id, name } = departmentItems[0];

    /// ami sudu first oitar name use korci aikana

    const payload = {
        ...item, departmentName: name
    }
    return payload;
})

console.log(mixDepartmentForSalary)
console.log("-------------")
const x = mixDepartmentForSalary.find((dep) =>

    employees.filter((item) => item.departmentId == dep.id).every
        ((items) => items.salary > 5000)

)
console.log(x.departmentName);

/// 41 - Assume each employee has a projects array (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }).
///Find the total number of unique projects being handled across all employees.

const project = [
    {
        id: 1,
        name: "Alice",
        projects: ["Project A", "Project B"]
    },
    {
        id: 2,
        name: "Bob",
        projects: ["Project C"]
    },
    {
        id: 3,
        name: "Charlie",
        projects: []
    }
];

/// use include or set  handel unique project 
const allProject = [];
project.forEach((item) => {
    const projectsValue = item.projects;

    for (let i = 0; i < projectsValue.length; i++) {
        allProject.push(projectsValue[i])


    }


})
let uniqueProject = [];
for (let i = 0; i < allProject.length; i++) {
    if (!uniqueProject.includes(allProject[i])) {
        uniqueProject.push(allProject[i])
    }
}
console.log(uniqueProject.length)

// 42 - For each employee, find their department name and return an array of employee names with their department names
//  mix department and name

const newEmployNameAndDepartment = mixDepartmentForSalary.map((item) => {
    const { name, departmentName } = item;
    const payload = {
        name: name,
        departmentName: departmentName
    }
    return payload;
})
console.log(newEmployNameAndDepartment);

// 43 -  Get a list of names of employees earning more than 6000.

const moreThanSixThousand = mixDepartmentForSalary.filter((emp) => emp.salary > 6000);
console.log(moreThanSixThousand);

// 44 - Write a for-of loop to print the names of all employees from the employees array.
for (let i = 0; i < employees.length; i++) {
    const { name } = employees[i];
    console.log(name)
}

// 45 -  Using a for-of loop, print the names of employees earning more than 5000.
for (let i = 0; i < employees.length; i++) {
    const { salary } = employees[i];
    if (salary > 5000) {
        console.log(employees[i])
    }
}
// 46 - Modify the for-of loop to destructure each employee object and log their name and salary.

for (let i = 0; i < employees.length; i++) {
    const { name, salary } = employees[i];
    console.log(name, salary);
}

// 47 -  Write a for-of loop to match employees with their departments and print the results.
/// for match department use id  and nested for loop use bruthforce 
for (let i = 0; i < employees.length; i++) {
    for (let j = 0; j < departments.length; j++) {

        const { departmentId, salary, name } = employees[i];

        const { id } = departments[j];
        const departmentName = departments[j]?.name;

        if (departmentId === id) {
            const payload = {

                name: name,
                departmentName: departmentName,
                salary: salary

            }
            console.log(payload);

        }
    }
}


// 48 -  Use Array.prototype.entries() with a for-of loop to print the index and name of each employee// .
// break , continue
const empArray = employees.entries();

for (let [index, item] of empArray) {
    console.log(item?.name, index)
}

// 49 -  Given the array-like object below, access the second element and log it:
const arrayLike = { 0: "First", 1: "Second", length: 2 };
const isMakeArray = Array.from(arrayLike); /// convert array like to array  
console.log(isMakeArray[1])
// 50 - Write a function that takes a variable number of arguments and converts the arguments object into a real array using Array.from.

function variableToArray() {

    const arr = Array.from(arguments);
    console.log(arr)


}
variableToArray(1, 2, 3, 4, 5);

// 51 - Write a snippet to select all div elements on a webpage (using document.querySelectorAll) and convert the resulting NodeList into an array.

const allElement = document.querySelectorAll("div");
const eleArray = Array.from(allElement);
console.log(eleArray)
console.log(Array.isArray(eleArray))

// 52 - Merge these two arrays into a single array:
//   ```js
const arr1 = [1, 2];
const arr2 = [3, 4];
const arrAdd = arr1.concat(arr2);
console.log(arrAdd)

// 53- Create an array of n duplicate values using Array.from. Input: Create an array with 5 "A" values. Output: ["A", "A", "A", "A", "A"]

const dupArray = Array.from({ length: 5 }, () => "A");
console.log(dupArray)

// 54 - Use Array.from to convert a string like "Hello" into an array of characters.
// from({},function, this)
const text = "Hello";
const textToChar = Array.from(text);
console.log(textToChar)

// 55 -For the array, ['apple', 'banana', 'apricot', 'mango', 'blueberry'], group words by their first letter using group().

const fruitsItems = ['apple', 'banana', 'apricot', 'mango', 'blueberry']
const groupFruits = Object.groupBy(fruitsItems, (item) => item.at(0));

// 57 -  From this array [3, 7, 3, 2, 3, 8, 7, 7], find the most repeated number. Hint: Use array method.
/// sort array then check 
const mostElement = [3, 7, 3, 2, 3, 8, 7, 7].sort();







let mostRepatedNumber = mostElement[0];
let cnt = 0;
let mxCnt = 0;
for (let i = 0; i < mostElement.length - 1; i++) {
    if (mostElement[i] == mostElement[i + 1]) {
        cnt++;

    } else {
        cnt = 1;
    }
    if (cnt >= mxCnt) {
        mxCnt = cnt;
        mostRepatedNumber = mostElement[i];


    }

}
console.log(mostRepatedNumber);

//58- Find the median of [5, 2, 9, 1, 3, 6, 8].
let left=0;
let right=0;
const median=[5, 2, 9, 1, 3, 6, 8]
console.log(median[arr.length/2]);
// 60 -Convert this array [['a', 1], ['b', 2], ['c', 3]], into { a: 1, b: 2, c: 3 } using array method(s).
const toArray=[['a', 1], ['b', 2], ['c', 3]].flat(Infinity)
const obj ={};
Object.assign(obj, toArray );
console.log(obj)

// 61 - Count the occurrences of each fruit in this array: ['apple', 'banana', 'apple', 'mango', 'banana', 'banana']
for(let i=0; i<arr.length; i++)
{
    const counter = isFindStringCount(i,arr[i],arr);
   console.log(arr[i],counter)
 
}
console.log(ansValue);

// 62 - Extract extract [‘b’, ‘c’, ‘d’] using slice() from this array: ['a', 'b', 'c', 'd', 'e']

const copySlice = ['a', 'b', 'c', 'd', 'e'].slice(1,4);
console.log(copySlice)
// 63 - Sort the array [9, 3, 1, 6, 8] in ascending order using toSorted()
// Sort the array [9, 3, 1, 6, 8] in ascending order using toSorted()
const srt  = [9, 3, 1, 6, 8].toSorted();
console.log(srt)

// 64-  Reverse [1, 2, 3, 4, 5] using toReversed() and compare it with reverse()

const str =[1, 2, 3, 4, 5];
str.reverse();
const isStr = str.reverse();
isStr[6]=10

console.log(str , isStr)

// to reverse 
const str2 =[1, 2, 3, 4, 5];
const isStr2 = str2.toReversed();
isStr2[10]=10;
console.log(str2, isStr2)


// 65- Group the follwing array elements based on age(Adult vs Non-Adult):
const users = [
  { name: 'Alice', age: 55 },
  { name: 'Bob', age: 3 },
  { name: 'Charlie', age: 25 },
];
const adult = users?.filter((item)=> item.age>18);
const nonAdult = users?.filter((item)=> item.age<18)
// 66 -  Find the longest word in this sentence using Array and Array methods: "40 Days of JavaScript by tapaScript is a powerful initiative".'


const long = "40 Days of JavaScript by tapaScript is a powerful initiative";
// convert into array then find lenfrg 
// split , length , max , 
const newLongString = long.split(" ");
let mx=newLongString[0].length;
let index=0;

for(let i=1; i<newLongString.length; i++)
{
   
    if(newLongString[i].length>mx)
    {
        mx=newLongString[i].length;
        index=i;
        console.log(newLongString[i] , mx)
    }
    console.log(mx ,index )
}
console.log(newLongString[index])



- 

// Find common elements between two arrays, [1, 2, 3, 4], [3, 4, 5, 6]
const a = [1, 2, 3, 4];
const b = [3, 4, 5, 6];
const common = [];

for(let i=0; i<a.length; i++)
{
    for(let j=0; j<b.length; j++)
    {
        if(a[i]==b[j])
        {
            common.push(b[j])
        }
    }
}
console.log(common)