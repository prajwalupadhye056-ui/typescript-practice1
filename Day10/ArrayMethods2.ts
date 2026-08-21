//1.forEach()

let fruits :string[]=['apple','banana','orange','mango','kiwi']

console.log("Printing fruites along with index using for in loop")

for(let i in fruits)
{
    console.log(i,fruits[i])
}

console.log("Printing fruites along with index using for each loop")

fruits.forEach(function(element,index)
{
    console.log(index,element)
})

//Using Arrow functions
console.log("************************")
fruits.forEach((element,index)=>{
    console.log(index,element)
})

//Ex.2 Print all the fruit names in Uppercase

fruits.forEach((element)=>{

    console.log(element.toUpperCase())
})

//Ex.2 Map(): Creates a new Array with the result of a function applied to every element.
// It takes function as an argument


let numbers:number[]=[1,2,3,4,5]
let squarenumber=numbers.map((num)=>num*num)
//let doubledNumber=numbers.map((element)=>element*2)
console.log(squarenumber)

//Ex3.filter() 

//Creates the new array with all the elements that pass/satisfy the function

//It takes function as a parameter

let evenNumbers=numbers.filter((num)=>num%2==0)
console.log(evenNumbers)

let filterNumbers=numbers.filter((num)=>num>3)
console.log(filterNumbers)

//4.Reduce() :- Applies a function on every element of an array and returns a single value

let reducedResult=numbers.reduce((total,element)=>total+element,0)
console.log(reducedResult)

//5.some() : Checks if any element satifies a condition

//Returns true if atleast one element passes the condition ,else false

let hasPositive=numbers.some((num)=>num>0)
console.log(hasPositive)

//6.Every() : Checks all the elements satifies a condition
//Returns true if all the elements pass the condition else false

let Alleven=numbers.every((num)=>num%2==0)
console.log(Alleven)