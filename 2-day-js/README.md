# variable

`Variable use to store data`
` In javaScript we can declar variable many way -> var , let , const`

` Example: var/let/const storage_name=value`

`let fruit="mango"`
`inside fruit we store mango`

# primative and non-primative

- primitive value

1.  number
2.  string
3.  boolean
4.  undefine
5.  null
6.  BigInt

- non-primitive value

1. Array
2. Object
3. function

let $ = "dollar";
-> is valid
let 2numbr;
-> not valid

`Javascript case Sensitive`

`var is a function scope can re-declare `
`let is block scope - re assine`
`const is a block scope  can not re-assin and re-declar`

# undefine vs null

= Undefine means variable declaer but not assine
= null means nothing not primative ans not non-primative

# normal variabl and bigint

``let num = 1000000000000000000000000000000000000 can not store big value`
but bigInt take and store easily let num=bigInt(1000000000000000000000000000000000000000000000000000) `

# object ar non-primitive value store value on key value and pair

`const info={
name:"sakib fakir",
age:20,
city:"dhaka"
}

-> object info
name: key
"sakib fakir" : value
console.log(info.city);
console.log(info.age);
`


# primitive data type store stack and non primitive data store on heap

# how javascript see code
 1. tokenizing
 2. Parsing
 3. Ast
 4. source code
