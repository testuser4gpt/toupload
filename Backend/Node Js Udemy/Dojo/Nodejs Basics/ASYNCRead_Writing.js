// Read file asyncronously

fs = require("fs");

fs.readFile("./src/async_readme.txt", "utf-8", (error, data) => {
  // when the reading of file is completed, It's
  // going to call this callback function
  console.log(data);

  // now we are leveraging the data of async_readme.txt to read another file
  // Note that, This below readfile thread will only execute if above thread is executed

  fs.readFile(`./src/${data}.txt`, "utf-8", (error1, data1) => {
    console.log(data1); // output of text inside the readme.txt
    // Note if there was some error while executing this code. then error1 is shown as null
    if (error1) {
      console.log(error1);
    }

    fs.readFile("./src/append.txt", "utf-8", (error2, data2) => {
      console.log(data2);
      const timestamp = Date.now();
      const date = new Date(timestamp);

      fs.writeFile("./src/output2.txt", data1 + data2 + date, () => {
        console.log("data appended successfully !");
      });
    });
  });
});

console.log("Reading your file.....");
