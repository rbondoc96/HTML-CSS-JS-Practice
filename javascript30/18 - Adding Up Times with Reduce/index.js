const timeNodes = Array.from(document.querySelectorAll("[data-time]"));
const seconds = timeNodes.map(node => node.dataset.time)
    .reduce((total, time) => {
        const tokens = time.split(":");
        const seconds = parseInt(tokens[0]) * 60 + parseInt(tokens[1]);
        
        return total + seconds;
    }, 0)

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft %= 3600;
const mins = Math.floor(secondsLeft / 60);
secondsLeft %= 60;

console.log("Total Time:", `${hours}:${mins}:${secondsLeft}`);