function greet(name:string,callback:(message:string)=>void)
{
    console.log(name)
    callback("Hello")
}

function showMessage(message:string)
{
    console.log(message)
}
greet("John",showMessage)

//2.

function sum(a:number,b:number,callback:(result:number)=>void)
{
    let result=a+b
    callback(result)
}
function displayResult(result:number):void
{
console.log(result)
}
sum(10,20,displayResult)