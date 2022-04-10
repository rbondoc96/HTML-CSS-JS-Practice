# 19 - Webcam Fun

## Project Meta Information
---
* Status: IN PROGRESS


## Things Learned
---
1. Using the navigator.mediaDevices.getUserMedia() function to get access to the user's webcam
2. Attaching the webcam MediaStream to a video element's srcObject property
3. Attaching the video element to a canvas element
4. Taking a snapshot of the canvas element to allow for webcam snapshots
5. Using the `debugger` keyword to invoke the debugger
6. The browser-sync npm library will allow a webpage to be access on a mobile devices
7. Getting canvas context image data
    - Special array is returned for storing large values
    - Each value in the array is grouped in 4's
        - Red channel
        - Green channel
        - Blue channel
        - Alpha channel
8. d