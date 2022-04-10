function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;

      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll(".slide-in");

function checkScroll(event) {
  sliderImages.forEach(image => {
    // Slide in when scroll is 1/5th through the image
    const slideInPos = (window.scrollY + window.innerHeight) - (image.height / 5);
    const imageBtmPos = image.offsetTop + image.offsetHeight;

    // Position has passed the top of the image
    const isHalfShown = slideInPos > image.offsetTop;
    const hasNotScrolledPast = window.scrollY < imageBtmPos;

    if(isHalfShown && hasNotScrolledPast) {
      image.classList.add("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkScroll));