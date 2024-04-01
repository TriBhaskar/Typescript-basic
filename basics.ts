//primitives: number, string, boolean
//more complex types: arrays, objects, functions
//function types, parameters
//object types, properties

//primitives

let age: number;
age = 12;
let userName: string;
userName = "Bhaskar";
let isInstructor: boolean;
isInstructor = true;

//more complex types
let hobbies: string[];
hobbies = ["Sports", "Cooking"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Bhaskar",
  age: 30,
};

let people: {
  name: string;
  age: number;
}[];

//add 3 people to the people array
people = [
  { name: "Bhaskar", age: 30 },
  { name: "Sachin", age: 40 },
  { name: "Rahul", age: 50 },
];

//Type inference - typescript tries to understand what type a variable is based on the value you assign to it
let course = "React - The Complete Guide";

//course = 1234; //error

//union types - more than one type is possible
let courseName: string | number = "React - The Complete Guide";
courseName = 1234;

//type aliases - create your own types
type Student = {
  name: string;
  rollno: number;
};

let student1: Student[];
student1 = [
  { name: "Bhaskar", rollno: 1 },
  { name: "Sachin", rollno: 2 },
];
