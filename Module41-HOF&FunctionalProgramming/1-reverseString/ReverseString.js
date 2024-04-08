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
