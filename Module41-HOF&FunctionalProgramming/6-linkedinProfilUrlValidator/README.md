- Q. LinkedIn Profile URL Validator.
As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are
formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https://
www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and
end with a letter or digit. The length of the profile ID should be between 5 and 30 characters.
The program should use a regular expression to match valid LinkedIn profile URLs, and should not match URLs
that do not follow this format or contain invalid characters. The program should provide clear output messages
indicating whether each input is a valid LinkedIn profile URL or not.


# LinkedIn Profile URL Validator

## Problem Statement

As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with `https://www.linkedin.com/in/` followed by a combination of one or more letters, digits, underscores, or hyphens, and end with a letter or digit. The length of the profile ID should be between 5 and 30 characters. The program should use a regular expression to match valid LinkedIn profile URLs and should not match URLs that do not follow this format or contain invalid characters. The program should provide clear output messages indicating whether each input is a valid LinkedIn profile URL or not.

## Solution

The solution involves defining a JavaScript program that uses a regular expression to match valid LinkedIn profile URLs according to the given conditions. The program should take a URL as input, validate it against the regular expression pattern, and print a message indicating whether it's a valid LinkedIn profile URL or not.

## Implementation

The implementation involves the following steps:

1. Define a regular expression pattern `linkedinRegex` to match valid LinkedIn profile URLs.
2. Define a function `validateLinkedInURL(url)` to validate a given URL against the regex pattern.
3. Use the `test()` method of the regular expression object to check if the input URL matches the pattern.
4. Print a message indicating whether the input URL is a valid LinkedIn profile URL or not based on the result of the test.

## Example

```javascript
// Regular expression to match valid LinkedIn profile URLs
const linkedinRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

// Function to validate LinkedIn profile URL
function validateLinkedInURL(url) {
  if (linkedinRegex.test(url)) {
    console.log(`${url} is a valid LinkedIn profile URL.`);
  } else {
    console.log(`${url} is not a valid LinkedIn profile URL.`);
  }
}

// Test cases
validateLinkedInURL("https://www.linkedin.com/in/john_doe123"); // Valid URL
validateLinkedInURL("https://www.linkedin.com/in/emma-watson"); // Valid URL
validateLinkedInURL("https://www.linkedin.com/in/jane_doe"); // Valid URL
validateLinkedInURL("https://www.linkedin.com/in/jack-smith123"); // Valid URL
validateLinkedInURL("https://www.linkedin.com/in/invalid@user"); // Invalid URL
validateLinkedInURL("https://www.linkedin.com/invalid"); // Invalid URL
```

This code will output:

```
https://www.linkedin.com/in/john_doe123 is a valid LinkedIn profile URL.
https://www.linkedin.com/in/emma-watson is a valid LinkedIn profile URL.
https://www.linkedin.com/in/jane_doe is a valid LinkedIn profile URL.
https://www.linkedin.com/in/jack-smith123 is a valid LinkedIn profile URL.
https://www.linkedin.com/in/invalid@user is not a valid LinkedIn profile URL.
https://www.linkedin.com/invalid is not a valid LinkedIn profile URL.
```

## Instructions

1. Clone this repository to your local machine.
2. Open the `index.js` file.
3. Modify the `validateLinkedInURL()` function to handle any specific LinkedIn profile URL validation requirements.
4. Run the program using a JavaScript runtime environment like Node.js.
5. Provide LinkedIn profile URLs as input to the program to test their validity.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

[SAGAR SURI]

## Acknowledgments

Special thanks to the problem setters and the community for inspiration and support.

---
