


//  reverse



const arr = [1, 3, 2, 1, 4, 1, 3, 3, 3];

let 
counter = 0 ;


for(let i=0; i<arr.length; i++)
{
    if(arr.includes(arr[i]))
    {
        counter++;
    }else{
        counter=0
    }
    console.log(counter , arr[i]);
}