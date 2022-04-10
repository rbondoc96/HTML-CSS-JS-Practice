# 12 - Key Sequence Detection (KONAMI CODE)

## Project Meta Information
---
* Status: COMPLETE


## Things Learned
---
1. Using Array.prototype.splice()
    * splice(start, deleteCount)
        - If deleteCount <= 0, no elements are removed
        - If start < 0 and N=start, splicing will at the N-1 element away from the last index
            - `list = [1, 2, 3, 4]`
            - `list.splice(-3, 1)`
            - N = 3, `2` was removed from `list`, since it is 2 elements from the last index
            - `list = [1, 3, 4]`
2. Figuring out what keys were pressed from the Event object