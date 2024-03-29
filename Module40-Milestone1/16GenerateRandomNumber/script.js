document.getElementById('generate-button').addEventListener('click', function() {
    const generateRandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * 100) + 1; // Generates random number between 1 and 100
        document.getElementById('random-number').textContent = `Random Number: ${randomNumber}`;
    };

    generateRandomNumber(); // Generate random number when the button is clicked
});
