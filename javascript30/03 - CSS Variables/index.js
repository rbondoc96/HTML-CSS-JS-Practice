function handleUpdate(event) {
    const rootElement = document.documentElement; /* Like selecting the :root selector */
    const sizing = this.dataset.sizing || "";

    /* input's name attribute was set to be the CSS variable to change */
    rootElement.style.setProperty(`--${this.name}`, this.value + sizing);
}

const inputs = document.querySelectorAll(".controls input");
inputs.forEach(input => {
    input.addEventListener("change", handleUpdate);
    input.addEventListener("mousemove", handleUpdate);
})