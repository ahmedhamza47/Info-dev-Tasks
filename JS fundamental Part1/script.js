// Ans no 1
console.log(`--------------------ANS NO 1-------------------------- \n`);
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
console.log("After deletion");
console.log(student);

//length of JS object
const ObjLength = Object.keys(student).length;
console.log(`Length of object is ${ObjLength}`);

//Ans No 2
/*
function Cylinder(height, radius) {
  this.height = height;
  this.radius = radius;
  const volume = Math.PI * this.height * radius * radius;
  return volume.toFixed(4);
}

const height = prompt("Enter height of cylinder:");
const radius = prompt("Enter radius of cylinder:");

alert(`The volume of cylinder is ${Cylinder(height, radius)}`);
*/
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
console.log(`\n--------------------ANS NO 4-------------------------- \n`);
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
console.log(`\n--------------------ANS NO 5-------------------------- \n`);
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

console.log(`\n--------------------ANS NO 6-------------------------- \n`);
const reversedNum = (num) =>
  parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num);
console.log(reversedNum(-1.567));
console.log(reversedNum(260.05));

//ans no 7

console.log(`\n--------------------ANS NO 7-------------------------- \n`);
const combination = (str) => {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      arr.push(str.slice(i, j));
    }
  }

  console.log(arr);
};
console.log("Word : hamza");
combination(`hamza`);

//ans no 8
// JavaScript function that returns a passed string with letters in alphabetical order.
console.log(`\n--------------------ANS NO 8-------------------------- \n`);
const sortString = (str) => str.split("").sort().join("");
console.log("Word: infodev");
console.log(`After Sorting : ${sortString("infodev")}`);

// ans no 9
//JavaScript function that accepts a string as a parameter and find the longest word within the string.
console.log(`\n--------------------ANS NO 9-------------------------- \n`);
const longestWord = (str) =>
  str
    .split(" ")
    .sort((a, b) => b.length - a.length)[0]
    .toUpperCase();
let sentence = "I want to work in Info-Developers";
console.log(`Sentence : ${sentence}`);
console.log(`Longest word: ${longestWord(sentence)}`);

//ans no 10
// Program to Count number of Vowels in String
console.log(`\n--------------------ANS NO 10-------------------------- \n`);
const countVowels = (str) =>
  str
    .toLowerCase()
    .split("")
    .filter((letter) => "aeiou".includes(letter)).length;

console.log(`Vowels in word Hamza Ahmed is ${countVowels("Hamza Ahmed")}.`);
const n = 5;

//ans 11
// function to generate a random number and find the factorial of the random number generated in javascript.
console.log(`\n--------------------ANS NO 11-------------------------- \n`);
const factorial = function (num) {
  if (num == 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};
const randNum = (min, max) => Math.trunc(Math.random() * (max - min) + 1) + min;
const rNum = randNum(1, 10);
console.log(` The factorial of ${rNum} is ${factorial(rNum)}`);

//ans no 12
// JavaScript program to check two given numbers and return true if one of the numbers is 50 or if their sum is 50.
console.log(`\n--------------------ANS NO 12-------------------------- \n`);
function checkFifty(a, b) {
  return a == 50 || b == 50 || a + b == 50;
}
console.log(checkFifty(20, 28));
console.log(checkFifty(25, 25));
console.log(checkFifty(50));

// JavaScript program to create a new string with the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.ans no 13
console.log(`\n--------------------ANS NO 13-------------------------- \n`);
const lower = function (str) {
  if (str.length < 3) return str.toUpperCase();
  else {
    return str.substring(0, 3).toLowerCase() + str.substring(3, str.length);
  }
};
console.log(lower("HAMZA")); //hamzZA
console.log(lower("ha"));

//ans no 14
console.log(`\n--------------------ANS NO 14-------------------------- \n`);
function arrangeAlphabets(str) {
  let strArr = str.toLowerCase().split("");
  let vowels = [];
  let consonant = [];
  for (let letter of strArr) {
    if (["a", "e", "i", "o", "u"].includes(letter)) vowels.push(letter);
    else consonant.push(letter);
  }
  vowels.sort();
  consonant.sort();
  return {
    vowels,
    consonant,
  };
}

let { vowels, consonant } = arrangeAlphabets("InfoDevelopers");
console.log(`Word : InfoDevelopers`);
console.log(`Vowels: ${vowels}\nConsonants: ${consonant}`);
