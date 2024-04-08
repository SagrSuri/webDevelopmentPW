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
