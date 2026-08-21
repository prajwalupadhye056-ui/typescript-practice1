//1.Named function with no parameters and return type

function display():void

{
    console.log("This is named function")

}
display()

//2.Named function with parameters and return type

function addNumbers(x:number,y:number):number
{
   return x+y
}

console.log(addNumbers(30,50))

//3.Named function with Rest Parameters- same type

function addNumbers1(...nums:number[])
{
 
 let sum:number=0

 for(let i=0;i<nums.length;i++)
 {
  sum=sum+nums[i];
 }
 console.log("sum of the numbers",sum)
 
}

addNumbers1(1,2)
addNumbers1(1,2,3)
addNumbers1(10,20,30,40,50)

//4.Named function with Rest Parameters -multiple types

function findElements(...elements:(number | string)[]):number
{
 return elements.length;
}
console.log(findElements(3,"John",2,1,"scott"))
console.log(findElements(10,20,30,90,40,"70"))


//5.Named functions with Optional Parameters

function displayDetails(id:number,name:string,mailId?:string):void

{
    console.log("ID:",id)
    console.log("Name:",name)

    if(mailId !== undefined)
    {
        console.log("Email:",mailId);
    }
}

displayDetails(123,"Scott","Scot@gmail.com")

displayDetails(123,"Scott")

//6.Named function with default Parameters

function calculateDiscount(price:number,rate:number=0.50):void
{
    let discount:number=price*rate;
    console.log("Discount Amount:",discount)


}
calculateDiscount(1000,0.30)
calculateDiscount(1000)