//Define two interfaces representing different types of objects. Create a new type that represents the union of these two object types.
// Interface representing a person
interface Person {
  name: string;
  age: number;
}

// Interface representing an address
interface Address {
  street: string;
  city: string;
}

// Type representing the union of Person and Address
type PersonOrAddress = Person | Address;

// Example usage
const personObject: PersonOrAddress = {
  name: "John",
  age: 30,
};

const addressObject: PersonOrAddress = {
  street: "123 Main St",
  city: "Cityville",
};

// Functions that can handle both types
function printName(obj: PersonOrAddress): void {
  if ("name" in obj) {
    console.log("Name:", obj.name);
  } else {
    console.log("No name property in the object");
  }
}

// Example usage of functions
printName(personObject); // Output: Name: John
printName(addressObject); // Output: No name property in the object
