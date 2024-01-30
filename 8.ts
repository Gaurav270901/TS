//Define a conditional type that checks if a given type is an array. Use it to conditionally assign a type based on whether a variable is an array or not.
// Conditional type to check if a given type is an array

type IsArray<T> = T extends any[] ? true : false;
function processArrayOrNot<T>(input: T): void {
  type ResultType = IsArray<T> extends true ? string[] : number;
  let result: ResultType;
  if (Array.isArray(input)) {
    result = input.map(String) as ResultType;
  } else {
    result = parseInt(String(input), 10) as ResultType;
  }
  console.log(result);
}
processArrayOrNot([1, 2, 3]);
processArrayOrNot(42);
