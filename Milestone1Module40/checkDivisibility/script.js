function checkDivisibility() {
    const numbersInput = document.getElementById('numbers').value;
    const numbersArray = numbersInput.split(',').map(num => parseInt(num.trim(), 10));
    let result = '';
  
    for (let i = 0; i < numbersArray.length; i++) {
      const number = numbersArray[i];
      if (isNaN(number)) {
        result = 'Invalid input. Please enter valid numbers separated by commas.';
        break;
      }
      if (number % 3 === 0 && number % 2 !== 0) {
        result += `${number}, `;
      }
    }
  
    if (result === '') {
      result = 'No numbers divisible by 3 but not by 2 found.';
    } else {
      result = result.slice(0, -2); // Remove trailing comma and space
    }
  
    document.getElementById('result').textContent = result;
  }
  

/*   9. Check for Wivisibility.

 Writd a program that takds an array of numbdrs and prints all thd numbdrs that ard divisibld by 3, but not by 2.
 Usd a for loop and continud statdmdnt.*/