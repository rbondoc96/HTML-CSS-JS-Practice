const EventEmitter = require("events")
const uuid = require("uuid")
const { runInThisContext } = require("vm")

class Logger extends EventEmitter {
    log(msg) {
        // Call event
        this.emit("message", {
            id: uuid.v4(),
            msg
        })
    }
}

const logger = new Logger()
logger.on("message", (data) => {
    console.log("Called listener:", data)
})

logger.log("hello world")
logger.log("hi")
logger.log("bye")

module.exports = Logger