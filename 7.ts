//Create a mapped type that converts all properties of an interface to be optional. Apply this mapped type to an existing interface.
interface MyInterface {
  name: string;
  age: number;
  city: string;
}
type OptionalProps<T> = {
  [K in keyof T]?: T[K];
};
type MyOptionalInterface = OptionalProps<MyInterface>;
const optionalObject: MyOptionalInterface = {
  name: "John",
  age: 30,
};
console.log(optionalObject);
