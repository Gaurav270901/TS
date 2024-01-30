//Define a tuple type representing a person's information, including name, age, and address.
//A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.
// Tuple type representing a person's information
type PersonInfo = [string, number, string];

// Example usage
const p1: PersonInfo = ["Gaurav Shimpi", 22, "Kothrud, Pune"];

// Accessing tuple elements
const nam: string = p1[0];
const age: number = p1[1];
const address: string = p1[2];

console.log("Name:", name);
console.log("Age:", age);
console.log("Address:", address);
