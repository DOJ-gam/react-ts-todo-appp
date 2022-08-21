import React from "react";
import "./App.css";

function App() {
  let name: string; //string type
  let age: number; //number type
  let isStudent: boolean; // boolean type
  let hobbies: string[]; // array of strings
  let marks: number[]; // array of numbers
  let role: [number, string]; // turple type(It contains a fixed amount of characters), eg, 1 number, 1 string

  name = "Daddy Omar Jeng";
  age = 25;
  isStudent = true;
  hobbies = ["Programming", "Playing Game"];
  marks = [90, 100, 95, 96];
  role = [1, "Administrator"];

  let person: Object; // Object type:=> not the recomended way because an object might have diffrent properties inside of it, like: name, age, etc... but how do we know that this object is expecting those propertiies? We will use the type keyword or interface keyword

  person = { name: "John", age: 20, role: 111 };

  // its always good practice to start types withcapital letters
  type Student = {
    name: string;
    age: number;
  };

  let student: Student;
  student = { name: "John", age: 20 };

  // In the above, both name and age will be required or else typescript will complain,
  // To make a particular property optional we add a question mark between it and the semicolon:
  type Student2 = {
    name: string;
    age?: number; //age is optional
  };

  let student2: Student2;

  student2 = { name: "John" };

  // Array of Objects(eg Array of Person objects)
  let students: Student[]; // Array of students
  students = [
    { name: "John", age: 20 },
    { name: "Amy", age: 22 },
  ];

  let phone: number | string; //union type
  phone = "990011111";

  // functions
  function printName(name: string) {
    console.log(name);
  }
  printName("DOJ");

  let printStudent: (name: string, age: number) => void;

  let height: any; // any type
  height = "10cm";

  let weight: unknown; // any type(unknown)
  weight = 75;

  type Contact = {
    phone: string;
    address: string;
    email: string;
  };

  interface Employee extends Contact {
    name: string;
    age: number;
  }

  interface Developer extends Employee {
    role: string;
    salary: number;
  }

  return <div className="App">hello world</div>;
}

export default App;
