function playSound(event) {
    let code = event.code;  // 'KeyA'

    let element = document.querySelector(`div[data-key='${code}']`);
    let audio = document.querySelector(`audio[data-key='${code}']`);
    
    if(element != null && audio != null) {
        element.classList.add("playing");
        audio.currentTime = 0;  // Rewinds sound file to the start
        audio.play()
    }
}

function removeStyle(event) {
    console.log(this)
    if(event.propertyName === "transform") {
        this.classList.remove("playing");
    }
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeStyle));

window.addEventListener("keydown", playSound);