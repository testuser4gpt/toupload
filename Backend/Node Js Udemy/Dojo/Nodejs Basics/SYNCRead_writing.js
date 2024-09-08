fs = require("fs");

// Read file Synchrously

const varr = fs.readFileSync("./src/readme.txt", "utf-8"); // .readFileSync reads the file synchronously
console.log(varr);

// Writing file Synchronously

readline = require("readline");
rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the text prompt you want to enter : ", (prompt1) => {
  const timestamp = Date.now();
  const date = new Date(timestamp);
  final_prompt = `${prompt1} \n Date Created : ${date.toLocaleString()}`;
  fs.writeFileSync("./src/output.txt", final_prompt);
  rl.close();
});
