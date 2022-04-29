const http = require("http")

// Create server object
http.createServer((req, res) => {
    // Write a response on request
    res.write("Hello world")
    res.end()
}).listen(5050, () => {
    console.log(`Server running on port ${5050}`)
})