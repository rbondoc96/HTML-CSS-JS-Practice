const inputs = document.querySelectorAll(".inbox .item input[type='checkbox']");

var lastChecked = null;

function handleClick(event) {

  var inBetween = false;

  if(event.shiftKey && this.checked) {

    // Scanning starts from top to bottom
    inputs.forEach(input => {
      
      /*
        Top->Bottom: 
          - `input === this` is the Start Condition
          - `input === lastChecked` is the Exit Condition
        Bottom->Top:
          - `input === lastChecked` is the Start Condition
          - `input === this` is the Exit Condition
        
        Start Condition - Leading element when traversing the inputs top-bottom
        End Condition - Trailing element when traversing the inputs top-bottom
      */
      if(input === this || input === lastChecked) {
        inBetween = !inBetween;
      }

      if(inBetween) {
        input.checked = true;
      }
    });
  }

  lastChecked = this;
}

inputs.forEach(input => {
  input.addEventListener("click", handleClick);
});

