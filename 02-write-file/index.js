const { stdin, stdout } = process;
const fs = require("fs");
const path = require('node:path')
const output = fs.createWriteStream(path.join(__dirname, 'text.txt'));

stdout.write("Hello my friend! Write any information about you and it will be written into the file in that directory.\n");

process.on("SIGINT", () => {
  stdout.write("\nThank you for your information.\n");
  process.exit();
})

stdin.on("data", (data) => {
  if (data.toString().trim() === 'exit') {
    stdout.write("\nThank you for your information.\n");
    process.exit();
  } else {
    output.write(data);
  }
})