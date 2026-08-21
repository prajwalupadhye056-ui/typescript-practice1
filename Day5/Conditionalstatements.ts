
//if
// 1. Check whether character is uppercase

let char:String='A';

if(char>='A' && char<='Z')
    {
    console.log(char+ " is an uppercase character");
}

//2.Check if a number is a multiple of 10.
let num:number=50;

if(num % 10 ===0)
{
console.log(`${num} is a multiple of 10`);
}

//if else

//3.Check if a person is a teenager (age between 13 and 19).

let age:number=15

if(age>=13 && age<=19)
{
  console.log("person is tennager")
}
else{
    console.log("person is not a tennager")
}

//4. Check if a character is an uppercase vowel.

let char1:string='A'
if(char1>='A' && char1<='Z')
{
    if(char==='A' || char==='E' || char==='I' || char==='O' || char==='U')
    {
        console.log(`${char} is a uppercase vowel`)
    }
}

//5.Find the largest of three numbers

let a1:number=12, a2:number=40,a3:number=23

if(a1>a2 && a1>a3)
{
    console.log(`${a1} is the largest`)
}
else if(a2>a3)
{
    console.log(`${a2} is the largest`)
}
else
{
    console.log(`${a3} is the largest of the numbers`)
}

//6.Check if a character is a vowel or consonant.

let ch:string='a'

if(ch==='A' || ch=== 'E' || ch==='I' || ch==='O' || ch==='U')
{
    console.log(`${ch} is the vowel`)
}
else if(ch==='a' || ch==='e' || ch==='i' || ch==='o' || ch==='u')
{
    console.log(`${ch} is the vowel`)
}
else{
    console.log(`${ch} is the consonant`)
}