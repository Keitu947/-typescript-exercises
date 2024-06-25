// 1. Declare a variable that holds a string value without explicitly stating its type
let myString = "Hello, World!";

// 2. Declare a variable that holds a number value and explicitly state its type
let myNumber: number = 42;

// 3. Declare a variable that can hold a value of any type
let anyValue: any;
anyValue = "A string";
anyValue = 100;
anyValue = true;

// 4. Declare a variable that can hold either a string or a number
let stringOrNumber: string | number;
stringOrNumber = "This is a string";
stringOrNumber = 123;
