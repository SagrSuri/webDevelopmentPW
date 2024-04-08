- Q. Build a feature for Store's Inventory.
Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
use the map higher-order function to create a new object with the converted prices in Rupees.
# Store's Inventory Price Conversion

## Problem Statement

Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should use the `map` higher-order function to create a new object with the converted prices in Rupees.

## Solution

The solution involves defining a JavaScript program that takes the existing inventory object with prices in US Dollars and converts them to Indian Rupees using a predefined exchange rate. The program should utilize the `map` higher-order function to iterate over the items in the inventory and create a new object with the converted prices.

## Implementation

The implementation involves the following steps:

1. Define the inventory object containing items and their prices in US Dollars.
2. Define a function `convertPricesToINR()` to convert the prices to Indian Rupees using the exchange rate.
3. Use the `map` higher-order function to iterate over the inventory object and apply the conversion function to each item's price.
4. Create a new object with the converted prices.
5. Output the new inventory object with prices in Indian Rupees.

## Example

```javascript
// Existing inventory object with prices in USD
const inventoryUSD = {
  apple: 1.99,
  banana: 0.99,
  orange: 2.49
};

// Function to convert prices to Indian Rupees using exchange rate
function convertPricesToINR(usdPrice) {
  const exchangeRate = 80; // 1 USD = 80 INR
  return usdPrice * exchangeRate;
}

// Use map function to create a new object with prices converted to INR
const inventoryINR = Object.fromEntries(
  Object.entries(inventoryUSD).map(([item, priceUSD]) => [item, convertPricesToINR(priceUSD)])
);

// Output the new inventory object with prices in Indian Rupees
console.log("Inventory (in INR):", inventoryINR);
```

This code will output:

```
Inventory (in INR): { apple: 159.2, banana: 79.2, orange: 199.2 }
```

## Instructions

1. Clone this repository to your local machine.
2. Open the `index.js` file.
3. Modify the `inventoryUSD` object to contain the items and their prices in US Dollars as needed.
4. Run the program using a JavaScript runtime environment like Node.js.
5. The program will convert the prices to Indian Rupees using the predefined exchange rate and output the new inventory object with prices in INR.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

[SAGAR SURI]

## Acknowledgments

Special thanks to the problem setters and the community for inspiration and support.

---
