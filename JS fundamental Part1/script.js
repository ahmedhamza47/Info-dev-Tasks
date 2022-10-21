// Ans no 1

const student = {
  Sname: "Hamza Ahmed",
  sclass: {
    level: "bachelors",
    sem: "6th sem",
  },
  rollno: 47,
};
const { Sname, sclass, rollno } = student;
console.log(
  `Name: ${Sname} \nClass: \n\t Level: ${sclass.level} \n\t Sem: ${sclass.sem},\nRollNo: ${rollno} `
);

//delete rollno property
delete student.rollno;
console.log(student);

//length of JS object
const ObjLength = Object.keys(student).length;
console.log(`Length of object is ${ObjLength}`);

//Ans No 2

// function Cylinder(height, radius) {
//   this.height = height;
//   this.radius = radius;
//   const volume = Math.PI * this.height * radius * radius;
//   return volume.toFixed(4);
// }

// const height = prompt("Enter height of cylinder:");
// const radius = prompt("Enter radius of cylinder:");

// alert(`The volume of cylinder is ${Cylinder(height, radius)}`);

//Ans No 3
