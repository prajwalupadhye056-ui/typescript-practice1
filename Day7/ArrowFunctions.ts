//1.Arrow functions with No Parameters and No Return Type

let greet=():void=>
{
    console.log("Hello Typescript")
}
greet()

//2.Arrow fucntions with Parameters and Return type

let add=(a:number,b:number):number=>
{
    return a+b
}
console.log(add(10,30))

//3.Arrow functions with implicit return

let add1=(a:number,b:number):number =>a+b
let multiply=(a:number,b:number):number =>a*b

console.log(add1(20,30))
console.log(multiply(20,3))