var changeObject = [
  { currency: "twenties", value: 20 },
  { currency: "tens", value: 10 },
  { currency: "fives", value: 5 },
  { currency: "twos", value: 2 },
  { currency: "ones", value: 1 },
  { currency: "quarters", value: 0.25 },
  { currency: "dimes", value: 0.1 },
  { currency: "nickels", value: 0.05 },
  { currency: "pennies", value: 0.01 },
];

//Callled on by Submit Function to calculate each monetary change value and display it
let calculateChange = (tendered, cost) => {
  var remainingChange = tendered - cost;

  for (denomination of changeObject) {
    let { currency, value } = denomination;
    document.getElementById(`${currency}-output`).innerHTML = Math.floor(
      remainingChange / value
    );
    remainingChange = (remainingChange % value).toFixed(2);
  }
};

// Submit function
let submitFunction = () => {
  const cost = parseFloat(document.getElementById("amount-due").value);
  const tendered = parseFloat(document.getElementById("amount-received").value);

  if (cost > tendered) {
    const deficit = (cost - tendered).toFixed(2);
    document.getElementById(
      "helperAmountTendered"
    ).innerHTML = `Your are $${deficit} short.`;
  } else if (cost <= tendered) {
    calculateChange(tendered, cost);
    document.getElementById("helperAmountTendered").innerHTML = "";
  }
};
