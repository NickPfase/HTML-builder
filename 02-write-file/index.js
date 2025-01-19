const { stdin, stdout } = process;
const fs = require("fs");
const path = require('node:path')
const output = fs.createWriteStream(path.join(__dirname, 'text.txt'));

stdout.write("Hello my friend! Write any information about you and it will be written into the file in that directory.\n");

stdin.on("data", (data) => {
  stdout.write("\nYour information is accepted, thank you!");
  output.write(data);
  process.exit();
});