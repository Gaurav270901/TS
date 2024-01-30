//Create an interface representing a dictionary with a dynamic set of keys and values. Use an index signature to define the type.
// Interface representing a dictionary with dynamic keys and values
interface Dictionary {
  [key: string]: any;
}

// Example usage
const myDictionary: Dictionary = {
  key1: "value1",
  key2: 42,
  key3: ["a", "b", "c"],
};

// Accessing values using keys
const value1: string = myDictionary.key1; // Valid
const value2: number = myDictionary.key2; // Valid
const value3: string[] = myDictionary.key3; // Valid

console.log("Value 1:", value1);
console.log("Value 2:", value2);
console.log("Value 3:", value3);
