const person = {
    name: "John Doe",
    age: 30
};

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }
}

// Full, absolute path to containing directory
console.log(__dirname)
// Full, absolute path to the file
console.log(__filename)

module.exports = Person;


/* 
When including a module, the module is actually wrapped in a Module Wrapper Function:

(function(exports, require, module, __filename, __dirname) {

})

We have access to "exports", "require", "module", "__filename", "__dirname"
- `require` would be used to include other modules
- `module.exports` is being used above

*/