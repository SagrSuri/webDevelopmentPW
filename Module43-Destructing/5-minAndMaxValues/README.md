# Find Maximum and Minimum Values in an Array

This JavaScript function finds the maximum and minimum values in an array of numbers. It accomplishes this by using the spread operator with the Math methods `max()` and `min()`.

## Functionality

The `findMinMax` function takes an array of numbers as input and finds its maximum and minimum values. It then returns an object with two properties, `max` and `min`, representing the maximum and minimum values in the input array, respectively.

## Usage

```javascript
function findMinMax(array) {
    /*
    Find the maximum and minimum values in the input array.

    Parameters:
        array (Array<number>): The input array of numbers.

    Returns:
        Object: An object containing properties `max` and `min`, representing the maximum and minimum values, respectively.
    */
    // Implementation details...
}

// Example usage:
const numbers = [5, 2, 7, 1, 9];
const result = findMinMax(numbers);
console.log(result); // Output: { max: 9, min: 1 }
