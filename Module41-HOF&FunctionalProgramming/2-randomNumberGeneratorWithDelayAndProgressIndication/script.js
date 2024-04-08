// Define the delay duration (in seconds)
let delay = 3;

// Function to generate a random number after a delay
function generateRandomNumber() {
  console.log(`Generating random number in ${delay} seconds...`);
  
  // Display progress messages every second
  const interval = setInterval(() => {
    delay--;
    if (delay > 0) {
      console.log(`Time remaining: ${delay} seconds...`);
    } else {
      clearInterval(interval);
      const randomNumber = Math.floor(Math.random() * 100); // Example: generates a random number between 0 and 99
      console.log("Random number generated:", randomNumber);
    }
  }, 1000); // 1 second interval
  
  // Generate random number after delay
  setTimeout(() => {
    clearInterval(interval);
    const randomNumber = Math.floor(Math.random() * 100); // Example: generates a random number between 0 and 99
    console.log("Random number generated:", randomNumber);
  }, delay * 1000); // Convert delay to milliseconds
}

// Call the function to generate random number after delay
generateRandomNumber();
