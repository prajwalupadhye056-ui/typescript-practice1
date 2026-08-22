//1. Add an element to the end of an array using push

let numbers:number[]=[1,2,3,4,5]
numbers.push(6,7)
console.log(numbers)


//2.Remove the last element of an array using pop
let arr1:number[]=[10,20,30]
arr1.pop()
console.log(arr1)


//3.shift()
let arr2:number[]=[20,45,67]
arr2.shift()
console.log(arr2)

//4.unshift
let arr3:number[]=[23,45,6,78]
arr3.unshift(90)
console.log(arr3)


//5.Concatenate two arrays using concat
let num1:number[]=[2,6,8]
let num2:number[]=[1,8,9]
let combined=num1.concat(num2)
console.log(combined)

//6.slice()

let arr4:number[]=[1,4,6,7,9]
let extractedarray=arr4.slice(1,4)
console.log(extractedarray)

//7.splice()
let arr5:number[] = [100, 200, 300, 400];
arr5.splice(2, 1, 350);
console.log(arr5);

//8.indexOf()

let fruits:string[]=['apple','pear','mango']
console.log(fruits.indexOf("mango"))

//9.includes()

let str:string[]=['pear','mango','apple']
console.log(str.includes('pear'))


//10.toString()

let a:number[]=[1,5,6]
console.log(a.toString())

//11.forEach()

let str1:string[]=['mango','pear','apple']

str1.forEach(item=>console.log(item))

//12.map()

let item:number[]=[3,6,8]
let doubleValues=item.map(element=>element*2)
console.log(doubleValues)

//13.filter()
let even:number[]=[100,102,123,345,897,345,90,67,98]
let evenNumbers=even.filter(num=>num%2==0)
console.log(evenNumbers)

//14.Reduce():

let sum1:number[]=[23,67,89,90]
let sumOfNumbers=sum1.reduce((total,element)=>total+element,0)
console.log(sumOfNumbers)


//15.some():
let even1:number[]=[2,5,6,7,8]
let Evensum=even1.some(element=>element%2===0)
console.log(Evensum)

//16.Every():
let arr90:number[]=[23,78,-98,90,12,56]
console.log(arr90.every(num=>num>0))

//17.filter() and indexOf()-Interview Questions

let dup:number[]=[12,12,13,13,14,15,14]
let unique = dup.filter((item, index) => dup.indexOf(item) === index);
console.log(unique)

//index → current position of the element.
// dup.indexOf(item) → position where that value first appears.
// If both are equal → keep the element.
// If they are different → it's a duplicate, so filter() removes it.

// | item | index | `indexOf(item)` | Keep? |
// | ---: | ----: | --------------: | :---: |
// |   12 |     0 |               0 |   ✅   |
// |   12 |     1 |               0 |   ❌   |
// |   13 |     2 |               2 |   ✅   |
// |   13 |     3 |               2 |   ❌   |
// |   14 |     4 |               4 |   ✅   |
// |   15 |     5 |               5 |   ✅   |
// |   14 |     6 |               4 |   ❌   |


//18.reverse()
let rev:number[]=[1,7,8]
console.log(rev.reverse())

//19.length
let str5="Prajwal"
console.log(str5.length)

//20.toUpperCase()
let str6:string="Hello Playwright"
console.log(str6.toUpperCase())

//21.toLowerCase()
let str7:string="Hello Playwright"
console.log(str6.toLowerCase())

//22.charAt()
let str24 = "Pavan";
console.log(str24.charAt(2));

//23.indexOf()
let str45='Prajwal is a good boy'
console.log(str45.indexOf('Good'))

//24.includes()
let str67:string='Prajwal is learning playwright'
console.log(str67.includes("learning"))

//25.startsWith()
let st:string="good health is always better"
console.log(st.startsWith("bete"))

//26.endsWith()
let st1:string="good health is always better"
console.log(st.endsWith("be I"))

//27.replace()
let str2:string="Yashwaswini is my wife"
console.log(str2.replace("my","you"))

//28.split() and trim()

let str9:string="     prajwal.uapdhye@gmail.com,goodmorning@ghu   "
let words=str9.trim().split("@")
console.log(words)

let str30 = "   Hello World from TypeScript   ";
let words1 = str30.trim().split(" ");
console.log(words1);