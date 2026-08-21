1//1.push()
let numbers:number[]=[10,20,30,56,78,90]

let fruits:string[]=['apple','banana','cherry','orange','mango']

numbers.push(6,7)
console.log("After push():",numbers)

//2.pop()


let lastfruit=fruits.pop()
console.log(fruits)
console.log(lastfruit)

//3.shift()

let fn=numbers.shift()
console.log(numbers)
console.log(fn)

//4.unshift()
fruits.unshift('kiwi','pear')
console.log(fruits) //[ 'kiwi', 'pear', 'apple', 'banana', 'cherry', 'orange' ]

//5.concat()

let combinedArray=numbers.concat( [8,9],[10] )
console.log(combinedArray)

//6.slice()

let extractedArray=fruits.slice(1,3)
console.log(fruits)
console.log(extractedArray)


//7.splice()

console.log(fruits)

//1]only removing

let elements=fruits.splice(1,2)
console.log(fruits)

//2]Not removed but added
fruits.splice(1,0,'pineapple','grape')
console.log(fruits)

//3]both remove and add

fruits.splice(1,2,'mango','cherry')
console.log(fruits)

//8.indexOf()

let bananaIndex=fruits.indexOf("banana")
console.log(bananaIndex)

//9.includes()

let AppleExists=fruits.includes('cherry')
console.log(AppleExists)

//10.toString()
console.log(numbers)
let numberString:string=numbers.toString()
console.log(numberString)