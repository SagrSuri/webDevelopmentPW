let customer = null;

const createAccount = () => {
    const name = document.getElementById('customer-name').value;
    const balance = parseFloat(document.getElementById('customer-balance').value);

    if (name.trim() === '' || isNaN(balance) || balance < 0) {
        alert('Please enter valid customer details.');
        return;
    }

    customer = {
        name: name,
        balance: balance
    };

    document.getElementById('transaction-section').style.display = 'block';
    document.getElementById('output-section').textContent = `Account created for ${customer.name} with balance $${customer.balance}`;
};

const deposit = () => {
    if (customer === null) {
        alert('No customer account exists.');
        return;
    }

    const amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid deposit amount.');
        return;
    }

    customer.balance += amount;
    document.getElementById('output-section').textContent = `Deposit of $${amount} successful. New balance: $${customer.balance}`;
};

const withdraw = () => {
    if (customer === null) {
        alert('No customer account exists.');
        return;
    }

    const amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(amount) || amount <= 0 || amount > customer.balance) {
        alert('Please enter a valid withdrawal amount.');
        return;
    }

    customer.balance -= amount;
    document.getElementById('output-section').textContent = `Withdrawal of $${amount} successful. New balance: $${customer.balance}`;
};
