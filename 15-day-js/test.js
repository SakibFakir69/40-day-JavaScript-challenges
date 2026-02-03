

const toArray=[['a', 1], ['b', 2], ['c', 3]].flat(Infinity)
const obj ={};
Object.assign(obj, toArray );
console.log(obj)


// object.entrise convert object to array and return itrator
// Count the occurrences of each fruit in this array: ['apple', 'banana', 'apple', 'mango', 'banana', 'banana']
const arr = ['apple', 'banana', 'apple', 'mango', 'banana', 'banana'];
// use map for count , inside map can store value key , value 


const ans= {};
//// string, arr[0] 
// array run [0] - [arr.size]
/// kintu amaka akta index diye dita hobba suru hobba kotha theka , thahola maka , index ,tagetstring and arr dita hobba
//  ( startIndex, stringTarget,endIndex, array)
export function isFindStringCount(index,str , arr){
    let counter =0

    for(let i=index; i<arr.length; i++)
    {
        if(arr[i]===str){
            counter++;
        }
    }
    return counter;


}

// 61 - Extract extract [‘b’, ‘c’, ‘d’] using slice() from this array: ['a', 'b', 'c', 'd', 'e']

const copySlice = ['a', 'b', 'c', 'd', 'e'].slice(1,4);
console.log(copySlice)

// Sort the array [9, 3, 1, 6, 8] in ascending order using toSorted()
const srt  = [9, 3, 1, 6, 8].toSorted();
console.log(srt)

//   Reverse [1, 2, 3, 4, 5] using toReversed() and compare it with reverse()

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


//  Find the longest word in this sentence using Array and Array methods: "40 Days of JavaScript by tapaScript is a powerful initiative".'

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


// 67 - 

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