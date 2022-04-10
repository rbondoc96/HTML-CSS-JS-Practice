const code = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowLeft"];
const pressed = [];

// Make cornify_count that appears on the screen reset every time the page is loaded
window.addEventListener("DOMContentLoaded", (event) => {
    cornify_count = 0;
});

window.addEventListener("keyup", (event) => {
    pressed.push(event.key);
    pressed.splice(-code.length - 1, pressed.length - code.length);

    if(pressed.join("").includes(code.join(""))) {
        cornify_add();
    }
});