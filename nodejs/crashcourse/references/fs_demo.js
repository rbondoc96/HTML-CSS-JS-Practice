const fs = require("fs");
const path = require("path");

TEST_DIR = path.join(__dirname, "test")
console.log(TEST_DIR)

/**
 * Most functions in fs are asynchronous, but also have synchronous versions
 *      The async functions take a 'completion callback function' as its last argument
 *      and invokes the operation asynchronously.
 *      
 *      The args passed to the callback vary, but the first arg is ALWAYS RESERVED FOR AN EXCEPTION
 *          If the operation completed successfully, then the first arg is `null` or `undefined`
 */

// Create a folder
// mkdir(path, options, callback) is asynchronous
// mkdirSync(path, options) is a synchronous version
if(!fs.existsSync(TEST_DIR)) {
    fs.mkdir(TEST_DIR), {}, (error) => {
        if(error) {
            throw error;
        }
        console.log("Folder created.");
    };
}


// Create and write to a file
// fs.writeFile(
//     path.join(__dirname, "/test", "hello.txt"), 
//     "Hello World!", 
//     (error) => {
//         if(error) throw error;
//         console.log("File created.");
//     }
// )

// // Overwrites the current file
// fs.writeFile(
//     path.join(__dirname, "/test", "hello.txt"), 
//     "Now, I overwrote the file.", 
//     (error) => {
//         if(error) throw error;
//         console.log("File overwritten.");
//     }
// )


// Create a file, then append to it.
// fs.writeFile(
//     path.join(__dirname, "/test", "hello2.txt"), 
//     "This one's a new file.", 
//     (error) => {
//         if(error) throw error;
        
//         // Update the file
//         fs.appendFile(
//             path.join(__dirname, "/test", "hello2.txt"), 
//             "\nI appended to the file!", 
//             (error) => {
//                 if(error) throw error;
//                 console.log("hello2.txt has been updated.");
//             }
//         )
//     }
// )

// Read a file
fs.readFile(path.join(TEST_DIR, "hello2.txt"), "utf-8", (err, data) => {
    if(err) throw err
    console.log(data)
})


// Rename a file
if(fs.existsSync(path.join(TEST_DIR, "hello.txt"))) {
    fs.rename(
        path.join(__dirname, "/test", "hello.txt"), 
        path.join(__dirname, "/test", "helloworld.txt"), 
        (err) => {
            if(err) throw err
            console.log("File renamed...")
        }
    )
}
