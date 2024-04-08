- Q. URL validation.
Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
Print a message indicating if the input matches the conditions or not.

# URL Validation Program

## Problem Statement

Write a program using a regular expression that matches valid URLs. Valid URLs should start with either `http://` or `https://`, followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters. The program should print a message indicating if the input matches the conditions or not.

## Solution

The solution involves defining a JavaScript program that uses a regular expression to match valid URLs according to the given conditions. The program should take a URL as input, validate it against the regular expression pattern, and print a message indicating whether it's a valid URL or not.

## Implementation

The implementation involves the following steps:

1. Define a regular expression pattern `urlRegex` to match valid URLs.
2. Define a function `validateURL(url)` to validate a given URL against the regex pattern.
3. Use the `test()` method of the regular expression object to check if the input URL matches the pattern.
4. Print a message indicating whether the input URL is valid or not based on the result of the test.

## Example

```javascript
// Regular expression to match valid URLs
const urlRegex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;

// Function to validate URL
function validateURL(url) {
  if (urlRegex.test(url)) {
    console.log(`${url} is a valid URL.`);
  } else {
    console.log(`${url} is not a valid URL.`);
  }
}

// Test cases
validateURL("http://www.example.com"); // Valid URL
validateURL("https://www.example.com"); // Valid URL
validateURL("ftp://www.example.com"); // Invalid URL
validateURL("http://example"); // Invalid URL
```

This code will output:

```
http://www.example.com is a valid URL.
https://www.example.com is a valid URL.
ftp://www.example.com is not a valid URL.
http://example is not a valid URL.
```

## Instructions

1. Clone this repository to your local machine.
2. Open the `index.js` file.
3. Modify the `validateURL()` function to handle any specific URL validation requirements.
4. Run the program using a JavaScript runtime environment like Node.js.
5. Provide URLs as input to the program to test their validity.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

[SAGAR SURI]

## Acknowledgments

Special thanks to the problem setters and the community for inspiration and support.

---
