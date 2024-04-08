# Swap Values Without Temporary Variable

This JavaScript function swaps the values of two variables without using a temporary variable. It achieves this by utilizing destructuring assignment with an array.

## Functionality

The `swapValues` function takes two variables as input and swaps their values. It accomplishes this by destructuring the variables into an array, swapping their positions within the array, and then returning an array with the swapped values.

## Usage

```javascript
function swapValues(x, y) {
    /*
    Swap the values of two variables without using a temporary variable.

    Parameters:
        x: The first variable.
        y: The second variable.

    Returns:
        Array: An array containing the swapped values.
    */
    // Implementation details...
}

// Example usage:
let a = 5;
let b = 10;
console.log("Before swap:", "a =", a, ", b =", b); // Output: Before swap: a = 5 , b = 10
[a, b] = swapValues(a, b);
console.log("After swap:", "a =", a, ", b =", b); // Output: After swap: a = 10 , b = 5
