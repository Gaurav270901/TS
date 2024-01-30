//Define two interfaces, one with properties for a person's name and another with properties for their contact information. Create a new interface using intersection to combine both.
interface Person {
  firstName: string;
  lastName: string;
}
interface ContactInfo {
  email: string;
  phoneNumber: string;
}
interface PersonWithContactInfo extends Person, ContactInfo {}
const person: PersonWithContactInfo = {
  firstName: "Gaurav",
  lastName: "Shimpi",
  email: "gaurav.shimpi@gmail.com",
  phoneNumber: "7798142226",
};
console.log("Person with Contact Info:", person);
