# 14 - JavaScript References VS Copies

## Project Meta Information
---
* Status: COMPLETE


## Things Learned
---
1. **Copies** are created if a variable is assigned to a string, number, or boolean
2. **References** are created if a variable is assigned to an array or object
    - To create a copy of an **array**
        - Array.prototype.slice()
        - Array.prototype.from(array)
        - Array.prototype.concat() with an empty array
            - [].concat(array)
        - ES6 spread
    - To create a (1-level deep) copy of an **object**
        - `const newObj = Object.assign({}, obj, { propertyToAddOrModify: value })`
        - ES6 spread
3. To deep copy an array or object, an external library (like lodash) should have deep clone functions for the task