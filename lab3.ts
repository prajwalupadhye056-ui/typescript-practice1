class Student
{
    studentid:number;
    name:string;
    email:string
    //static variable
    static schoolName:string="St.Xaviers High School"

    constructor(sid:number,sname:string,email:string)
    {
        this.studentid=sid
        this.name=sname
        this.email=email

    }

    displayinfo():void
    {
        console.log(this.studentid)
        console.log(this.name)
        console.log(this.email)
    }

    static changeSchoolName(newName:string):void{
        Student.schoolName=newName
    }
}

let obj1=new Student(101,"Prajwal","prajwal.upadhye@gmail.com")
let obj2=new Student(102,"Tarun","tarun.kataria@gmail.com")
obj1.displayinfo()
obj2.displayinfo()

console.log(Student.schoolName)

console.log("aFter changing school name")

Student.changeSchoolName("Sunrise Academy")
console.log(Student.schoolName)

