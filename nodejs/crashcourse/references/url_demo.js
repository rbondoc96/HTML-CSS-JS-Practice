const url = require("url")

const myUrl = new URL("http://mywebsite.com:8000/hello.html?id=100&status=active")

// Serialized URL
console.log(myUrl.href)
console.log(myUrl.toString())

// Host (root domain)
console.log(myUrl.host)
// Hostname -- doesn't include the port
console.log(myUrl.hostname)

// Pathname
console.log(myUrl.pathname)

// Serialized query
console.log(myUrl.search)
// Query as params object
console.log(myUrl.searchParams)

// Add parameters
myUrl.searchParams.append("abc", "123")
console.log(myUrl.searchParams)

// Loop through params
myUrl.searchParams.forEach((value, key) => {
    console.log(`${key}: ${value}`)
})