//Create a function that takes a parameter and allows it to be either a string or null/undefined. Handle both cases in the function.
// Function that takes a parameter of type string or null/undefined
function processStringOrNull(input: string | null | undefined): void {
  if (input !== null && input !== undefined) {
    // Handle the case when the input is a string
    console.log("Processing string:", input.toUpperCase());
  } else {
    // Handle the case when the input is null or undefined
    console.log("Input is null or undefined");
  }
}
processStringOrNull("Hello"); // Output: Processing string: HELLO
processStringOrNull(null); // Output: Input is null or undefined
processStringOrNull(undefined); // Output: Input is null or undefined
