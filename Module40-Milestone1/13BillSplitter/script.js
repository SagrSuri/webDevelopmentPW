function calculateBill() {
    var dishCost = parseFloat(document.getElementById('dish-cost').value);
    var peopleCount = parseInt(document.getElementById('people-count').value);

    if (isNaN(dishCost) || isNaN(peopleCount) || dishCost <= 0 || peopleCount <= 0) {
        alert('Please enter valid values.');
        return;
    }

    var totalBill = dishCost * peopleCount;
    var billPerPerson = totalBill / peopleCount;

    document.getElementById('total-bill').textContent = '$' + totalBill.toFixed(2);
    document.getElementById('bill-per-person').textContent = '$' + billPerPerson.toFixed(2);
}
