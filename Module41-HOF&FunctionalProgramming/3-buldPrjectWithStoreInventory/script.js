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
  