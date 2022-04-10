// start with strings, numbers and booleans
// The 2nd variables are all copies
var age = 100;
var age2 = age;
console.log(age, age2);
age = 999;
console.log(age, age2);

var name = "Rodrigo";
var name2 = name;
console.log(name, name2);
name = "Michael";
console.log(name, name2);

var bool = true;
var bool2 = bool;
console.log(bool, bool2);
bool = false;
console.log(bool, bool2);


// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
// You might think we can just do something like this:
const playersRef = players;
console.log("players", players);
console.log("playersRef", playersRef);

// however what happens when we update that array?
// now here is the problem!
console.log("== After Change ==");
playersRef[0] = "Hello";
console.log("players", players);
console.log("playersRef", playersRef);

// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!
// one way
const playersCopy = players.slice();
playersCopy[0] = "this is a copy";
console.log("== Array.prototype.slice() ==");
console.log("players", players);
console.log("playersCopy", playersCopy);


// Use Array.prototype.from()
const playersFrom = Array.from(players);
playersFrom[0] = "copy too!";
console.log("== Array.prototype.from(players) ==");
console.log("players", players);
console.log("playersFrom", playersFrom);


// or create a new array and concat the old one in
const playersConcat = [].concat(players);
playersConcat[0] = "I was made by concat";
console.log("== [].concat(players) ==");
console.log("players", players);
console.log("playersConcat", playersConcat);

// or use the new ES6 Spread
const playersSpread = [...players];
// now when we update it, the original one isn't changed
playersSpread[0] = "Something else";
console.log("== ES6 Spread Copy ==");
console.log("players", players);
console.log("playersSpread", playersSpread);

// The same thing goes for objects, let's say we have a person object

// with Objects
console.log("\n*** With Objects ***");
const person = {
    name: 'Wes Bos',
    age: 80
};
console.log("person", person);

// and think we make a copy:
const personRef = person;

console.log("== After Change ==");
personRef.name = "Rodrigo Bondoc";
console.log("person", person);
console.log("personRef", personRef);


// how do we take a copy instead?
const personCopy = Object.assign({}, person, {
    age: 102
});
console.log("person", person);
console.log("personCopy", personCopy);

// We will hopefully soon see the object ...spread
const personSpread = {...person};
console.log("== After Change ==");
personSpread.name = "Mr. Corgo";
console.log("person", person);
console.log("personSpread", personSpread);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const me = {
    name: "Rodrigo",
    socials: {
        twitter: "@rbondoc",
        instagram: "@idk"
    }
};

const alsoMe = {...me};

console.log("alsoMe", alsoMe.socials.twitter);

alsoMe.name = "Bondoc";
alsoMe.socials.twitter = "@notme";
console.log("**** After Change ****");
console.log("me", me.name, me.socials.twitter);
console.log("alsoMe", alsoMe.name, alsoMe.socials.twitter);

// The nested object is still a reference
// The <name> attribute could still be changed, it's a copy