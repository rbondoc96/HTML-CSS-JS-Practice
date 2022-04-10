const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const pixelWalk = 200;

window.addEventListener("DOMContentLoaded", (event) => {
    hero.addEventListener("mousemove", shadow);
});

function shadow(event) {
    const {
        offsetWidth: width,
        offsetHeight: height,
    } = this;

    let {
        offsetX: x,
        offsetY: y,
    } = event;

    // Offset needed if element triggering MouseEvent is
    // .hero's child element (h1 in this case)
    if(this !== event.target) {
        x += event.target.offsetLeft;
        y += event.target.offsetTop;
    }

    const xWalk = Math.round(((x/width) * pixelWalk) - (pixelWalk/2));
    const yWalk = Math.round(((y/height) * pixelWalk) - (pixelWalk/2));

    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgb(255, 0, 0),
        ${xWalk * -1}px ${yWalk}px 0 rgb(0, 255, 0),
        ${yWalk}px ${xWalk * -1}px 0 rgb(0, 0, 255),
        ${yWalk * -1}px ${xWalk}px 0 rgb(125, 125, 125)
    `;
}