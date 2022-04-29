const path = require("path");

// Full absolute path to the path_demo.js
console.log("[Full Path]:", __filename);

// Just the filename, path_demo.js
console.log("[Filename]:", path.basename(__filename));

// Equivalent to __dirname
console.log("[__dirname]:", path.dirname(__filename));

// Path object
console.log("[Path Object]:", path.parse(__filename));

// Concatenate paths
// Desired: ./test/hello.html
// Useful for issues with delimiters based on OS
console.log(path.join(__dirname, "test", "hello.html"))
