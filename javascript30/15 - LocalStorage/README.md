# 15 - LocalStorage and Event Delegation

## Project Meta Information
---
* Status: COMPLETE


## Things Learned
---
1. Only strings may be stored in localStorage
    - Storing objects requires JSON.stringify(obj)
    - localStorage.getItem("key") and localStorage.setItem("key", value)
2. Element.matches("someSelectorString") 
    - function that checks if a certain HTML element matches a selector
3. Events can trickle down to an element's children. Examining the event's target (event.target) is useful