//Define two function types, one representing a function that takes a number and another that takes a string. Create a new type that represents the intersection of these two function types.
type NumberFunction = (input: number) => void;
type StringFunction = (input: string) => void;
type NumberAndStringFunction = NumberFunction & StringFunction;

const combinedFunction: NumberAndStringFunction = (input: number | string) => {
  console.log("Combined Function:", input);
};

combinedFunction(42); // Output: Combined Function: 42
combinedFunction("Hello"); // Output: Combined Function: Hello
// combinedFunction(true);     // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'
