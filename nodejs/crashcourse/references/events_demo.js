const EventEmitter = require("events")

class MyEmitter extends EventEmitter {}

const emitter = new MyEmitter()
emitter.on("event", function(err) {
    console.log("Event fired.")    
})

emitter.emit("event")