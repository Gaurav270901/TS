//Create a generic function that takes an array and returns the first element. Use the function with arrays of different types.
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[0] : undefined;
}
const numbersArray: number[] = [1, 2, 3, 4, 5];
const stringsArray: string[] = ["apple", "banana", "cherry"];

const firstNumber = getFirstElement(numbersArray);
const firstString = getFirstElement(stringsArray);

console.log("First Number:", firstNumber); 
console.log("First String:", firstString); 
