# 13 - Image Slide In on Scroll

## Project Meta Information
---
* Status: COMPLETE


## Things Learned
---
1. Debouncing events
2. HTMLElement.offsetTop
    - Distance from outer border of the current element to the inner border of the `offsetParent`
    - `offsetParent` is essentially the element's parent element
3. HTMLElement.offsetHeight
    - Integer height of HTML element, including vertical padding & borders
4. window.scrollY
    - Pixel position of the top of the scrollbar
5. window.innerHeight
    - Height of the current viewport
6. scroll events