//Write a function that infers the return type based on the input type. For example, if the input is a string, the function returns a number; if it's an array, it returns a boolean.
// Function to infer return type based on input type
function inferReturnType(input) {
    if (typeof input === "string") {
        return input.length;
    }
    else if (Array.isArray(input)) {
        return input.length > 0;
    }
    else {
        throw new Error("Unsupported input type");
    }
}
var resultString = inferReturnType("hello");
var resultArray = inferReturnType([1, 2, 3]);
console.log("Result for string:", resultString);
console.log("Result for array:", resultArray);
