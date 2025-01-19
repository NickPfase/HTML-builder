const path = require('node:path');
const fs = require("node:fs");
// const { fstatSync, fstat, stat, Stats } = require('node:fs');

// fs.readdir((path.join(__dirname, 'secret-folder')), { withFileTypes: true }, (err, filenames) => {


//   if (err) {
//     console.log("error")
//   } else {
// filenames.forEach(filename => {
//   console.log(filename);
//   console.log(fs.stat(__filename))
// }
// )
fs.stat((path.join(__dirname, 'secret-folder')), { withFileTypes: true }, (err, files) => {

  files.forEach(file => {
    if (err) {
      console.log('shit')
    } else {
      console.log(stats.size);
      console.log(stats.isFile());
      console.log(stats.isDirectory());
    }
  })
})
//   }
// }
// )


// .then(filenames => {
//   for (let filename of filenames) {
//     console.log(filename);
//   }
// }
// )

//   НАПИСАННОЕ ВЫШЕ - ВОЗВРАЩАЕТ ВСЕ ИЗ ПАПКИ


// stat((path.join(__dirname, 'secret-folder')));
// console.log(stats);

// fs.promises.readdir(path.join(__dirname, 'secret-folder'))
//   // if (filenames)
//   .then(filenames => {
//     for (let filename of filenames) {
//       if (dirent.isFile(filename) === true) {
//         console.log(filename)
//       } else {
//         console.log('none')
//       }

//     }
//   })