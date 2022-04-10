const canvas = document.querySelector("#draw"); 
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = "#BADA55";
context.lineWidth = 10;
context.lineJoin = "round";
context.lineCap = "round";

var isDrawing = false;
var lastX = 0;
var lastY = 0;
var hue = 0;
var direction = false;

function draw(event) {
    if(!isDrawing) return;

    context.strokeStyle = `hsl(${hue}, 100%, 50%)`
    context.beginPath();

    // Start from
    context.moveTo(lastX, lastY);

    // Go to
    context.lineTo(event.offsetX, event.offsetY);
    context.stroke();

    [lastX, lastY] = [event.offsetX, event.offsetY];
    hue++;

    if(hue >= 360) {
        hue = 0;
    }

    if(context.lineWidth >= 150 || context.lineWidth <= 1) {
        direction = !direction;
    }
    if(direction) {
        context.lineWidth++;
    } else {
        context.lineWidth--;
    }
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (event) => {
    isDrawing = true;
    /* Sets starting position so that it doesn't draw a single continuous 
    line starting at (0, 0) */
    [lastX, lastY] = [event.offsetX, event.offsetY];
});
canvas.addEventListener("mouseup", (event) => {
    isDrawing = false;
});
canvas.addEventListener("mouseout", (event) => {
    isDrawing = false;
});