const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

window.addEventListener("DOMContentLoaded", (event) => {
    video.addEventListener("canplay", paintToCanvas);
    
    if(confirm("Start webcam?")) {
        startWebcam();
    }
});

function startWebcam() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
        video.srcObject = localMediaStream;
        video.play();
    })
    .catch(error => alert("Please check your camera permissions"));
}

function paintToCanvas() {
    const {
        videoWidth: vWidth,
        videoHeight: vHeight,
    } = video;

    canvas.width = vWidth;
    canvas.height = vHeight;

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, vWidth, vHeight);
        
        let pixels = ctx.getImageData(0, 0, vWidth, vHeight);

        pixels = rgbSplit(pixels);
        ctx.putImageData(pixels, 0, 0);
    }, 10);
}

function takePhoto(event) {
    // Play snapshot sound
    snap.currentTime = 0;
    snap.play();

    const data = canvas.toDataURL("image/jpeg");
    const link = document.createElement("a");
    link.href = data;
    link.setAttribute("download", "gpoy");
    link.innerHTML = `<img src="${data}" alt="GPOY">`;

    strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
    for(let i = 0; i < pixels.data.length; i+=4) {
        pixels.data[i] += 100;          // Red
        pixels.data[i + 1] -= 50 ;      // Green
        pixels.data[i + 2] *= 0.5;      // Blue
    }

    return pixels;
}

function rgbSplit(pixels) {
    for(let i = 0; i < pixels.data.length; i+=4) {
        pixels.data[i - 150] = pixels.data[i];      // Red
        pixels.data[i + 500] = pixels.data[i + 1];  // Green
        pixels.data[i - 550] = pixels.data[i + 2];  // Blue
    }

    return pixels;    
}

function greenScreen(pixels) {
    for(let i = 0; i < pixels.data.length; i+=4) {
        pixels.data[i - 150] = pixels.data[i];      // Red
        pixels.data[i + 500] = pixels.data[i + 1];  // Green
        pixels.data[i - 550] = pixels.data[i + 2];  // Blue
    }

    return pixels;    
}