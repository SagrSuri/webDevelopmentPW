const calculateTotalCost = (cart) => {
    if (cart.length === 0) {
        return 0;
    }

    const totalCost = cart.reduce((acc, item) => {
        return acc + (item.unitPrice * item.quantity);
    }, 0);

    return totalCost;
};

const calculateTotal = () => {
    const cartItems = document.querySelectorAll('.item');
    const cart = [];

    cartItems.forEach(item => {
        const unitPrice = parseFloat(item.querySelector('.unit-price').value);
        const quantity = parseInt(item.querySelector('.quantity').value);
        
        if (!isNaN(unitPrice) && !isNaN(quantity) && unitPrice > 0 && quantity > 0) {
            cart.push({ unitPrice, quantity });
        }
    });

    const totalCost = calculateTotalCost(cart);
    document.getElementById('total-cost').textContent = `Total Cost: $${totalCost.toFixed(2)}`;
};
