
//1. Different parameter Types

function getInfo(id:number):string
function getInfo(name:string):string

function getInfo(n1:number | string ):string
{
 if (typeof n1 ==="number")
 {
    return (`User ID is ${n1}`)
 }
 else
 {
    return(`User Name is ${n1}`)
 }
}

console.log(getInfo(101))
console.log(getInfo("John"))