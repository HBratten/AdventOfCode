let fs = require("fs");
let path = "dayoneInput";
let input = fs.readFileSync(path, { encoding: "utf8" });
let frequency = 0;
let result = input.split("\n");

for (let index = 0; index < result.length; index++) {
  frequency = frequency + parseInt(result[index]);
}
console.log(frequency);
