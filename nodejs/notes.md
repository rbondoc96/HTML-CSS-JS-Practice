# Node.js Notes


## Why Use Node?
- It's fast, efficient, and highly scalable.
    - One of the reasons for that is that it's event driven. 
    - It runs on a single loop
    - It's non-blocking; has a non-blocking I/O model.
- It's popular in the industry, especially in startups.
    - Lots of full stack jobs that have Node.
- Allows for the same language on the Frontend and Backend.


### Non-Blocking I/O
Node.js is non-blocking and is asynchronous. It works on a single thread, using non-blocking I/O calls. 
    Something like PHP is usually synchronous, running on multiple threads.
        - Every time a request is made, it spawns a new thread. These new threads take system memory and can eventually max out.
        - Since it's synchronous, the software has to wait for one process to complete before starting the next.
    
Since Node.js works asynchronously and is non-blocking on a single thread. The single thread can support tens of thousands of connections which are held in an "Event Loop".
    This optimizies throughout and scalability in applications with many I/O operations.

You wouldn't want to use Node.js with CPU-intensive apps (long-running calculations, etc.)


### Node's Event Loop
The Event Loop runs on a single thread. Events are run asynchronously. Basically, when an event is triggered, a callback fires.
    This way, the system doesn't have to run a process, sit and wait for it to end, then run the next like it does in other synchronous languages. This allows for concurrency (multiple computations happening at the same time).

It simply fires an event/process and moves on. Once that event is fulfilled, it runs in the loop.

The `EventEmitter` class is used to bind events and listeners.


### Best Types of Projects for Node
**Short Answer**: Anything that is not CPU intensive
- I/O operations are asynchronous
    - Like making a server request, sending data to a server, getting a response, etc.
- CPU calculations can block the whole server and make the application very slow.

* REST API & Microservices
    - You might not even be serving HTML pages and instead serving JSON data.
    - Database interactions would occur in Node.js.
* Real Time Services (Chat, Live Updates)
* CRUD Apps - Blogs, Shopping Carts, Social Networks
    - Applications where you fetch or update things in the database
* Tools & Utilities
    - As long as they're not CPU intensive


## NPM - Node Package Manager
`npm` is used to install 3rd party packages and modules (frameworks, libraries, tools, etc)
    Packages get stored in the `node_modules` folder. All dependencies are listed in `package.json`. Every Node project should include this file

`npm` scripts can also be created to run certian tasks, such as run a server.


## Node Modules
Node core modules include:
* `path`
    - Commonly used to work with file directories
* `fs`
* `http`

3rd party modules/packages are installed via NPM. Custom modules can also be included.

```js
const path = require("path");
const myFile = require("./myFile");
```


## Running Node
Installing Node on a computer also includes a REPL (Read, Evaluate, Print, Loop), which essentially a shell for running a Node script. 

Simply type `node` in a terminal window to start the REPL.