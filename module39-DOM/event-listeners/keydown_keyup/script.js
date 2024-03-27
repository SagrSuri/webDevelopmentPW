// Get the container element
const container = document.getElementById("container");
const display = document.getElementById("display");

// Add event listeners for keydown and keyup events
document.addEventListener("keydown", function(event) {
    // Change the text color and display the pressed key when a key is pressed
    display.style.color = "red";
    display.innerText = event.key + " is keyDown";
});

document.addEventListener("keyup", function(event) {
    // Change the text color and display the released key when the key is released
    display.style.color = "green";
    display.innerText = event.key + " is keyUp";
});
