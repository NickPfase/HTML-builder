const fs = require('node:fs');
const path = require('node:path')
const rr = fs.createReadStream(path.join(__dirname, 'text.txt'));
rr.on('readable', () => {
  let data
  while ((data = rr.read()) !== null) {
    console.log(`${data}`);
  }
});