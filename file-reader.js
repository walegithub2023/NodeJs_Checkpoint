//import/include/require the file system module
const fs = require("fs");

//open a file called welcome.txt
console.log("Going to open file!");
fs.open("welcome.txt", "w+", function (err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("File opened successfully!");
});

// Write to file
fs.writeFileSync("welcome.txt", "Hello Node");

// Read from file and console.log
const data = fs.readFileSync("welcome.txt", "utf8");
console.log(data);
