const path = require('node:path')
const fs = require("fs");
const search = fs.createWriteStream(path.join(__dirname, 'secret-folder'));
