const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log("hello");

// Interpolated
console.log("hello, I'm a %s", "🥵");

// Styled
// Add "%c" in front of the string to style
console.log("%cI'm some text", "font-size: 24px; background: black; color: white;");

// warning!
// Gives a stacktrace
console.warn("Oh no?");

// Error :|
// Gives a stacktrace
console.error("Some error");

// Info
console.info("I'm a hoe bag");

// Testing
// Will only fire if test expression is wrong
console.assert(1 === 2, "They are not equal");

// clearing
console.clear();

// Viewing DOM Elements
// dir() shows all properties/functions that lives in the HTML element
const p = document.querySelector("p");
console.log(p);
console.dir(p);

// Grouping together
// Groups multiple console entries together
dogs.forEach(dog => {
    console.group(`${dog.name}`);
    // console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.groupEnd(`${dog.name}`);
})

// counting
// Counts the amount of times something (text, DOM element, etc) was used
console.count("Wes");

// timing
console.time("fetching data");
fetch("https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json").then(response => response.json()).then(json => {
    console.table(json)    
    console.timeEnd("fetching data");
});