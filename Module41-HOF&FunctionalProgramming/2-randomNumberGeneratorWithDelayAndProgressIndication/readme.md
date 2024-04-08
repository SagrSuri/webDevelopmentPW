- Q.2. Random Number Generator with Delay and Progress Indication:
The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
variable so can be modified. The program displays a message every second indicating the time remaining
until the random number is generated and then outputs the generated number.

# Random Number Generator with Delay and Progress Indication

## Problem Statement

The goal of this program is to generate a random number after a delay of 3 seconds, with the ability to modify the delay duration. The program should display a message every second indicating the time remaining until the random number is generated and then output the generated number.

## Solution

The solution involves defining a JavaScript program that utilizes the `setTimeout()` function to delay the generation of a random number by 3 seconds. During the delay, the program should display progress messages indicating the time remaining. Once the delay is complete, a random number is generated and outputted.

## Implementation

The implementation involves the following steps:

1. Define a variable `delay` to store the delay duration (initially set to 3 seconds).
2. Define a function `generateRandomNumber()` to generate a random number after the specified delay.
3. Within the `generateRandomNumber()` function, use `setTimeout()` to delay the execution by the specified duration.
4. During the delay, display progress messages every second indicating the time remaining.
5. After the delay, generate a random number and output it.

## Example

```javascript
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
```

This code will output progress messages indicating the time remaining until the random number is generated, followed by the generated random number.

## Instructions

1. Clone this repository to your local machine.
2. Open the `index.js` file.
3. Modify the `delay` variable to adjust the delay duration if needed.
4. Run the program using a JavaScript runtime environment like Node.js.
5. Progress messages indicating the time remaining will be displayed every second until the random number is generated.
6. After the delay, the generated random number will be outputted.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

[SAGAR SURI]

## Acknowledgments

Special thanks to the problem setters and the community for inspiration and support.

---
