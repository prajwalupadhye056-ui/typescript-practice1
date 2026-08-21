1.//  To Reverse the given number

let numrev:number=12345
let revnum:number=0

while(numrev>0)
{
    let digit:number=numrev %10  //Get last digit
    revnum=revnum*10+digit  //// Append digit
    numrev = Math.floor(numrev / 10); /// Remove last digit
}

console.log("Reversed number is:",revnum)

//2. Check whether given number is prime or not
let numval:number=7

let count:number=0

for(let i:number=1;i<=numval;i++)
{
    if(numval%i===0)
    {
        count++
    }
}
if(count===2)
{
    console.log(numval +" number is prime")
}
else
{
    console.log(numval +" number is not prime")
}

//5. Write a program to find the largest digit in a given number using a while loop.


 let num: number = 58329;
let largest: number = 0;

while (num > 0) 
    {
    let digit: number = num % 10;

    if (digit > largest) 
    {
        largest = digit;
    }

    num = Math.floor(num / 10);
}

console.log("Largest digit is:", largest);

//6.Check if a number is a palindrome

let num3:number =121
let originalnum:number=num3
let reverse:number=0

while(num3>0)
    {
        let digit:number=num3 % 10
        reverse=reverse * 10 + digit
        num3=Math.floor(num3/10)

    }
    if(originalnum===reverse)
{
    console.log("Number is palindrome")
}
else
{
    console.log("Number is not a palindrome")
}

//7.Write a program to print numbers from 1 to 10 using a do-while loop.

let i1:number=1

do
{
   console.log(i1)
   i1++;
}
while(i1<=10)


