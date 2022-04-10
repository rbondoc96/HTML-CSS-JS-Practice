const video = document.querySelector(".player video");

const progress = document.querySelector(".player .progress");
const progressBar = document.querySelector(".player .progress__filled");
const playButton = document.querySelector(".player__button");
const ranges = document.querySelectorAll("input[type='range']");
const skipButtons = document.querySelectorAll("[data-skip]");


function handleProgress(event) {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(event) {
    const time = (event.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = time;
}

function togglePlay(event) {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updatePlayButton(event) {
    playButton.innerHTML = this.paused? "►" : "❚ ❚";
}

function handleVideoSlider(event) {
    video[this.name] = this.value;
}

// No need to check for lower/upper bounds of video time
// Video will adjust its currentTime property accordingly
function skip(event) {
    const skipStep = parseInt(this.dataset.skip);
    video.currentTime += skipStep;
}

video.addEventListener("timeupdate", handleProgress);
video.addEventListener("click", togglePlay);
video.addEventListener("play", updatePlayButton);
video.addEventListener("pause", updatePlayButton);

var progressMouseDown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (event) => progressMouseDown && scrub(event));
progress.addEventListener("mousedown", (event) => progressMouseDown = true);
progress.addEventListener("mouseup", (event) => progressMouseDown = false);

playButton.addEventListener("click", togglePlay);

ranges.forEach(range => {
    range.addEventListener("change", handleVideoSlider);
    range.addEventListener("mousemove", handleVideoSlider);
});

skipButtons.forEach(button => button.addEventListener("click", skip));

