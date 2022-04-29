/**
 * Gives information about our environment and OS
 */

const os = require("os")


// Get platform (Windows, OSX)
console.log(os.platform())

// Get CPU architecture
console.log(os.arch())

// Get CPU core info
// Returns and object for every object for the CPU
const cpus = os.cpus()
console.log(cpus)
console.log(cpus.length)

// Get memory
console.log("Free Memory:", os.freemem(), "bytes")
console.log("Total Memory:", os.totalmem(), "bytes")

// Get home dir
console.log(os.homedir())

// Uptime
console.log(os.uptime())