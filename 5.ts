//Use type assertions to convert a variable from one type to another. Explain why you chose type assertions over other options.

let totalBill: any = 123;
let finalBill = <number>totalBill + 200;
console.log(finalBill);

let someValue: any = "this is a string";
let strLength = (someValue as string).length;
console.log(strLength);

let flag: any = true;
if (flag as boolean) {
  console.log("true");
}
