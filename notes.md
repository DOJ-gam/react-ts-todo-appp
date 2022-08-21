> # Learning Typescript

# Types

- We can assign types very easily in typescript:

## String Types

```ts
let name: string;
name = "Daddy Omar Jeng";
```

## Number Types

```ts
let age: number;
age = 25;
```

## Boolean Types

```ts
let isStudent: boolean;
isStudent = true;
```

## Array of Strings

```ts
let hobbies: string[];
hobbies = ["Programming", "Playing Game"];
```

## Array of Numbers

```ts
let marks: number[];
marks = [90, 100, 95, 96];
```

## Turples

- turple type(It contains a fixed amount of characters), eg, (1 number, 1 string) as in the case of the below example

```ts
let role: [number, string];
role = [1, "Administrator"];
```

## Objects

- Objects are represented in key, values pairs.

```ts
let person: Object;
person = { name: "John", age: 20, role: 111 };
```

- OThe above is not the recomended way because an object might have diffrent properties inside of it, like: name, age, etc...
- So how do we know that this object is expecting those propertiies?
  - We will use the **type keyword** or **interface keyword**:

```ts
type Student = {
  name: string;
  age: number;
};

let student: Student;

student = { name: "John", age: 20 };
```

- In the above, both name and age will be required or else typescript will complain,
- To make a particular property optional we add a question mark between it and the semicolon:

```ts
type Student2 = {
  name: string;
  age?: number; //age is optional
};
let student2: Student2;

student2 = { name: "John" };
```

## Array of Objects(eg Array of Person objects)

```ts
type Student = {
  name: string;
  age: number;
};
let students: Student[]; // Array of students
students = [
  { name: "John", age: 20 },
  { name: "Amy", age: 22 },
];
```

## Unions (Assign more than one type to a variable)

- With unions you can assign more than one type to a variable, we seperate the diffrent allowed types with the pipe **|**:

```ts
let phone: number | string;
phone = "990011111";
```

## Function Types

- There are many ways to define functions in typescript, the easiest way is:

```ts
function printName(name: string) {
  console.log(name);
}
printName("DOJ");
```

- Also we can predefine the function by giving it a type of function:

```ts
let printStudent: (name: string, age: number) => void;
```

- The void above specifies the retuen type, it can be string, number, etc...

## Any Type

- The any type does not have a specific data type, you can give it any value:

```ts
let height: any; // any type
height = "10cm";
```

- Note: It is not recomended to use the any type because its the same as using javascrit without typescript.
- Instead we can use the below type in place of any

## Unknown Type

- Its similar to any type, buts its recomended to use it

```ts
let weight: unknown; // any type(unknown)
weight = 75;
```

- Similarly, we can return **never** for the retrn type of a function if we do not know what to return..
- Note:
  - _void_ => retuens undefined
  - _never_ => does not return anything

## Types and Interfaces

- As seen above with types: Types and interfaces are **aliases** that we can use
- They both work alomost the same way, the main difference is that:
  - In Interfaces you can extend interfaces easier than types,
  - With types you will have to re-enter all the properties in the type you are extending from,
  - But with interfaces, you can easily extend other interfaces and other types

```ts
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
```

- We can use the interfaces to also provide type for our classes in js:

```ts
class manager extends Employee {}
```
