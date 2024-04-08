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
