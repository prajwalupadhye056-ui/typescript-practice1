//Objects

enum ExperienceLevel {
  Fresher = "Fresher",
  MidLevel = "MidLevel",
  Senior = "Senior"
}


const candidate = {
  experience: 3.9,
  expectedSalary: "₹10.5–12 LPA",
  willingToRelocate: true,
  skills: [
    "Python",
    "Selenium",
    "PyTest",
    "Playwright",
    "TypeScript",
    "API Testing",
    "SQL",
    "Jenkins",
    "Git"
  ],
  experienceLevel: ExperienceLevel.MidLevel
};

console.log(candidate);

let x:number=15
let y:string="15"

console.log(x==y)
console.log(x===y)