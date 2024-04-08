
- Q. 1. Reverse String.
The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay
of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of
2 seconds before reversing the string. The reversed string should then be printed as output.
# Reverse String Program

## Problem Statement

The problem is to create a program that reverses a given string after a delay of 2 seconds using the `setTimeout()` function. The program should use a variable `input` to store the input string, implement a delay of 2 seconds before reversing the string, and then print the reversed string as output.

## Solution

The solution involves defining a JavaScript program that utilizes the `setTimeout()` function to delay the reversal of the input string by 2 seconds. Upon reversal, the reversed string is printed as output.

## Implementation

The implementation involves the following steps:

1. Define the input string variable `input`.
2. Define a function `reverseString()` to reverse a given string.
3. Define a function `reverseAfterDelay()` to reverse the input string after a delay of 2 seconds using `setTimeout()`.
4. Call the `reverseAfterDelay()` function with the input string.
5. Print the reversed string as output.

## Example

```javascript
// Define the input string
const input = "Hello, world!";

// Function to reverse the string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Function to reverse the string after a delay of 2 seconds
function reverseAfterDelay(input) {
  setTimeout(() => {
    const reversedString = reverseString(input);
    console.log("Reversed string:", reversedString);
  }, 2000); // 2 seconds delay
}

// Call the function with the input string
reverseAfterDelay(input);
```

This code will output:

```
Reversed string: !dlrow ,olleH
```

## Instructions

1. Clone this repository to your local machine.
2. Open the `index.js` file.
3. Modify the `input` variable to contain the string you want to reverse.
4. Run the program using a JavaScript runtime environment like Node.js.
5. After 2 seconds, the reversed string will be printed to the console.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

[SAGAR SURI]

## Acknowledgments

Special thanks to the problem setters and the community for inspiration and support.

---
