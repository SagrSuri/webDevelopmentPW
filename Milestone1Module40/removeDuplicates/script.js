function removeDuplicates() {
    const cartInput = document.getElementById('cart').value.trim();
    const resultParagraph = document.getElementById('result');
    const errorMsg = document.getElementById('error-msg');
  
    if (cartInput === "") {
      errorMsg.textContent = "Please enter items in your cart.";
      resultParagraph.textContent = "";
      return;
    }
  
    const cartArray = cartInput.split(',').map(item => item.trim());
    const uniqueCart = Array.from(new Set(cartArray));
  
    resultParagraph.textContent = `Cart without duplicates: ${uniqueCart.join(', ')}`;
    errorMsg.textContent = "";
  }
  