const path = require("path");

// Gets pathname to main Node module (root directory)
module.exports = path.dirname(process.mainModule.filename);
