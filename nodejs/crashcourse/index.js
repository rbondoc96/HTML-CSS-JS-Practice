// Common js imports are used instead of ES6 imports
// const Person = require("./person")
// const Logger = require("./logger")
const http = require("http")
const path = require("path")
const fs = require("fs")

// console.log("Hello world")
// console.log(new Person("Onika Smith", 30))

// const person1 = new Person("Jane Smith", 35)
// person1.greeting()

const PORT = process.env.PORT || 5050
const server = http.createServer((req, res) => {
    // Build file path
    const filePath = path.join(
        __dirname, 
        "public",
        req.url === "/" ? "index.html" : req.url    
    )

    // Get file extensions
    const extname = path.extname(filePath)
    let contentType = "text/html"
    switch(extname) {
        case ".js":
            contentType = "text/javascript"
            break
        case ".css":
            contentType = "text/css"
            break
        case ".json":
            contentType = "application/json"
            break
        case ".png":
            contentType = "image/png"
            break
        case ".jpg":
            contentType = "image/jpg"
            break
    }

    // Read file
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code == "ENOENT") {
                // Page not found
                fs.readFile(path.join(
                    __dirname,
                    "public",
                    "404.html"
                ), (err, content) => {
                    res.writeHead(200, {
                        "Content-Type": "text/html"
                    })
                    res.end(content, "UTF-8")
                })
            } else {
                // Some server error
                res.writeHead(500)
                res.end(`Server error: ${err.code}`)
            }
        } else {
            res.writeHead(200, {
                "Content-Type": contentType
            })
            res.end(content)
        }
    })


    // // Index page
    // if(req.url === "/") {
    //     fs.readFile(path.join(__dirname, "public", "index.html"), (err, content) => {
    //         if(err) throw err

    //         // Write to header
    //         res.writeHead(200, {
    //             "Content-Type": "text/html"
    //         })
    //         res.end(content)
    //     })
    // }

    // else if(req.url == "/about") {
    //     fs.readFile(path.join(__dirname, "public", "about.html"), (err, content) => {
    //         if(err) throw err

    //         // Write to header
    //         res.writeHead(200, {
    //             "Content-Type": "text/html"
    //         })
    //         res.end(content)
    //     })
    // }

    // else if(req.url == "/api/users") {
    //     const users = [
    //         { name: "Bob Smith", age: 25 },
    //         { name: "Amy Johnson", age: 56 },
    //     ]
    //     res.writeHead(200, {
    //         "Content-Type": "application/json"
    //     })
    //     res.end(JSON.stringify(users))
    // }
})

server.listen(PORT, () => {
    console.log(`Serving running on port ${PORT}`)
})