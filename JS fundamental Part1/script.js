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
//Program to create a Clock Note. where output will come every second

const clock = function () {
  let currDate = new Date();
  let hour = currDate.getHours();
  let minute = currDate.getMinutes();
  let second = currDate.getSeconds();

  hour = hour < 10 ? "0" + hour : hour;

  minute = minute < 10 ? "0" + minute : minute;

  second = second < 10 ? "0" + second : second;

  let time = hour + ":" + minute + ":" + second + " ";
  document.getElementById("clock").innerHTML = time;
  let t = setTimeout(function () {
    clock();
  }, 1000);
};
clock();

//ans no 4

function FindAllMethods(obj) {
  return Object.getOwnPropertyNames(obj).filter(function (property) {
    return typeof obj[property] == "function";
  });
}
const Student = {
  name: "Hamza Ahmed",
  age: 47,
  getName() {
    return this.name;
  },
  calcAge() {
    this.age > 18 ? `Adult` : `child`;
  },
};

const methods = FindAllMethods(Student);
console.log(`The methods inside object Student is  ${methods}`);

//ans no 5
//Js function to convert an object intto list of [key,value ] pairs

function convertToKeyValuePair(obj) {
  return Object.entries(obj);
}
const sampleObject = {
  fullName: "Hamza AHmed",
  rollNO: 47,
};
console.log(convertToKeyValuePair(sampleObject));

//ans no 6
//JS program to reverse a number

const reversedNum = (num) =>
  parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num);

console.log(reversedNum(-1.567));
console.log(reversedNum(260.05));

//ans no 7

const combination = (str) => {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      arr.push(str.slice(i, j));
    }
  }
  console.log(arr);
};
combination("hamza");
