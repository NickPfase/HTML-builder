const path = require('node:path');
const fs = require("node:fs");
const source = path.join(__dirname, 'files');
const dist = path.join(__dirname, 'files-copy')

fs.mkdir(dist, (err) => {
  if (err) {
    console.log("Directory is not created");
  }
  console.log('Directory created successfully!');
});

fs.readdir(source, (err, files) => {
  if (err) {
    console.log("error")
  } else {
    files.forEach(file => {
      fs.copyFile(path.join(__dirname, `files/${file}`), path.join(__dirname, `files-copy/${file}`), (err) => {
        if (err) {
          console.log('no copy is made');
          process.exit();
        } else console.log('files are copied')
      }
      )
    }
    )
  }
}
)