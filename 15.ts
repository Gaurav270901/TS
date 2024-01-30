//Write a function that checks if a variable is of a certain type using a type guard. Use this function to conditionally handle different types.
// Type guard function for checking if a variable is a string
//The "variable is string" syntax in the function return type is a type predicate. It indicates to TypeScript that, if the function returns true, the variable should be considered of type string in the corresponding scope.
function isString(variable: any): variable is string {
  return typeof variable === "string";
}

// Function that conditionally handles different types
function handleVariable(variable: any): void {
  if (isString(variable)) {
    // If variable is a string
    console.log("Variable is a string:", variable.toUpperCase());
  } else if (typeof variable === "number") {
    // If variable is a number
    console.log("Variable is a number:", variable * 2);
  } else {
    // If variable is of an unknown type
    console.log("Variable is of an unknown type");
  }
}

// Example usage
handleVariable("hello"); // Output: Variable is a string: HELLO
handleVariable(42); // Output: Variable is a number: 84
handleVariable(true); // Output: Variable is of an unknown type
