const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;
    return Math.round(discountPercentage * 100) / 100;
};

const calculateDiscount = () => {
    const originalPrice = parseFloat(document.getElementById('original-price').value);
    const discountedPrice = parseFloat(document.getElementById('discounted-price').value);

    if (isNaN(originalPrice) || isNaN(discountedPrice) || originalPrice <= 0 || discountedPrice <= 0) {
        alert('Please enter valid prices.');
        return;
    }

    const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
    document.getElementById('discount-percentage').textContent = discountPercentage;
};
