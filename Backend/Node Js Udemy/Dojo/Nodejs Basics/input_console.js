const readline = require("readline");
rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your age : ", (age) => {
  console.log(`Your age is : ${age}`);
  rl.close();
});

rl.on("close", () => {
  console.log("Interface Has been closed");
  process.exit(0);
});
