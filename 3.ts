//Create a type alias for a complex data structure, such as a nested object or an array of objects.
// Type alias for a complex data structure (nested object)
type UserProfile = {
  userId: number;
  userName: string;
  personalInfo: {
    age: number;
    address: {
      street: string;
      city: string;
      zipCode: string;
    };
  };
  hobbies: string[];
};
const user: UserProfile = {
  userId: 1,
  userName: "Gaurav",
  personalInfo: {
    age: 22,
    address: {
      street: "Mangalam Traders",
      city: "Lothrud",
      zipCode: "411038",
    },
  },
  hobbies: ["Reading", "Cricket", "Coding"],
};
console.log("User Profile:", user);
// Type alias for an array of objects with specific properties
type PersonArray = {
  name: string;
  age: number;
  city: string;
}[];
const people: PersonArray = [
  { name: "person1", age: 25, city: "City A" },
  { name: "person2", age: 30, city: "City B" },
  { name: "person3", age: 22, city: "City C" },
];
const firstPersonName: string = people[0].name;
const secondPersonAge: number = people[1].age;
console.log("First person's name:", firstPersonName);
console.log("Second person's age:", secondPersonAge);
