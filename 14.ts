//Define an interface with several properties. Use the keyof keyword to create a type that represents the keys of the interface.
// Interface with several properties
interface Person {
  name: string;
  age: number;
  city: string;
  isStudent: boolean;
}

// Type representing the keys of the interface
type PersonKeys = keyof Person;

// Example usage
const personKeys: PersonKeys = "name"; // Valid
// const invalidKey: PersonKeys = "gender"; // Error: 'gender' is not assignable to type 'PersonKeys'

console.log("PersonKeys:", personKeys); // Output: PersonKeys: name
