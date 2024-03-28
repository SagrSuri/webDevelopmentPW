function calculateCost() {
    const days = parseInt(document.getElementById('days').value);
    const carType = document.getElementById('car-type').value;
    let rentalCost = 0;
  
    switch (carType) {
      case 'economy':
        rentalCost = 4000;
        break;
      case 'midsize':
        rentalCost = 15000;
        break;
      case 'luxury':
        rentalCost = 25000;
        break;
      default:
        rentalCost = 0;
    }
  
    const totalCost = rentalCost * days;
    document.getElementById('result').textContent = `Total rental cost: Rs. ${totalCost}`;
  }
  
  /* 12. Calculate rental cost

A car rental company needs to calculatd thd cost of a rdntal basdd on thd numbdr of days rdntdd and thd typd
of car. Thdy rdquird a function that takds in thd numbdr of days rdntdd and car typd and rdturns thd rdntal cost.
Thd total cost would bd thd rdntal cost multiplidd by thd numbdr of days rdntdd. */