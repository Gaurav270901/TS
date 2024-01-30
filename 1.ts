//Create a TypeScript function that takes either a string or a number as a parameter. Use a union type to define the parameter.
function processInput(input: string | number): void {
  if (typeof input === "string") {
    console.log("Input is a string:", input.toUpperCase());
  } else if (typeof input === "number") {
    console.log("Input is a number:", input * 2);
  } else {
    console.log("Invalid input type");
  }
}
processInput("Champ");
processInput(5);
