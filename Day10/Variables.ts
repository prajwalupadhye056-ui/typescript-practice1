class exp_var 
{
    b : number = 20; // instance variable
    static c : number = 30; // static variable

//Non-Static method
m1() : void 
{
    let a : number = 10; // local variable
    console.log("M1 method executed");
   
    console.log(a +"is local variable");
    console.log(this.b)
    console.log(exp_var.c,"is static variable");
}

m2() : void 
{
    console.log("M2 method executed");
    console.log(this.b,"is instance variable");
    console.log(exp_var.c,"is static variable");
}

m3() : void 
{
    console.log("M3 method executed");
    console.log(this.b,"is instance variable");
}
//Static method
static m4() : void 
{
    console.log("M4 method executed");
    console.log("static method executed");
    
    
}
}
//Non-static : access by using object of class
let m = new exp_var();
m.m1();
m.m2();
m.m3();

console.log("***************************");
//Static : access by using class name
exp_var.m4();
