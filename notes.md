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

# React & Typescript

- Now we will learn typescript with react:

## React Funtions

- To define the type of a jsx component(React Functional Component), we use the **REACT.FC** for _React Functional Component_

```ts
import React from "react";
const App: React.FC = () => {
  return <div className="App">hello world</div>;
};
export default App;
```

- Also we can use the **React.ReeactNode** as a general type, because it supports a lot of the diffrent React Types.

## UseState Types

```ts
const [todo, setTodo] = useState<string>("");
const [todo, setTodo] = useState<string | number>("");
const [todo, setTodo] = useState<string[]>([]);
// etc...
```

- Now in other to pass the useState as props, we just do it the normal React way,
- But when receiving it, we will have to declare their types:

```ts
import InputField from "./components/InputField";
<InputField todo={todo} setTodo={setTodo} />;

// inputField.tsx
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}
const InputField = ({ todo, setTodo }: Props) => {
  return <input type="text" />;
};
```

- **Note** to get the type of the setTodo we hover over the text and copy the type.
- Also we can use a diffrent method to pass the types of our props to the component:

```ts
const InputField: React.FC<Props> = ({ todo, setTodo }) => {
  return <input type="text" />;
};
```

### Array of Objects in useState

- Like show above we can have an array of objects in a useState, here is how we can give its type:

```ts
const [todos, setTodos] = useState<Todo[]>([]);
```

## Type of an even in form Submit

- The type of the **e** in the submit is **React.FormEvent**
- You can use google to look for types of other types.
- Below is an example of usage

```tsx
// App.tsx
const handleAdd = (e: React.FormEvent) => {
  e.preventDefault();
};

// inputField.tsx
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void; //
}
```

## Type of a HTML Element(Input Element)

- To get the type of a HTML element you can simply hover over the element or google to find out more.
- Example would be the input element:

```tsx
const inputRef = useRef<HTMLInputElement>(null)
 <input
  ref={inputRef}
/>
```
