const fs = require("fs");

let input: string = fs.readFileSync("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  return data;
});

console.log(input);

let updatedInput: string[] = input.split(/\n\n/);
let updatedInput2: string[][] = updatedInput.map(x => {
  return x.split(/\n/);
});
let updatedInput3: number[][] = updatedInput2.map(arr => arr.map(num => +num));
let updatedInput4: number[] = updatedInput3.map(arr => arr.reduce((a, b) => a + b, 0));

const highToLow: number[] = updatedInput4.sort(function (a, b) {
  return b - a;
});

console.log(highToLow);
