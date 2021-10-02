// Calculate Change function
let calculateChange = (tendered, cost) => {

    var change = tendered - cost;

    //Calculate quantity of $20 bills to return
    var twentyChange = Math.floor(change / 20);
    var remainingChange = (change % 20).toFixed(2);
    document.getElementById('twenty-dollars-output').innerHTML = twentyChange;

    //Calculate quantity of $10 bills to return
    var tenChange = Math.floor(remainingChange / 10);
    remainingChange = (remainingChange % 10).toFixed(2);
    document.getElementById('ten-dollars-output').innerHTML = tenChange;

    //Calculate quantity of $5 bills to return
    var fiveChange = Math.floor(remainingChange / 5);
    remainingChange = (remainingChange % 5).toFixed(2);
    document.getElementById('five-dollars-output').innerHTML = fiveChange;
    
    //Calculate quantity of $2 bills to return
    var twoChange = Math.floor(remainingChange / 2);
    remainingChange = (remainingChange % 2).toFixed(2);
    document.getElementById('two-dollars-output').innerHTML = twoChange;

    //Calculate quantity of $1 bills to return
    var oneChange = Math.floor(remainingChange / 1);
    remainingChange = (remainingChange % 1).toFixed(2);
    document.getElementById('dollars-output').innerHTML = oneChange;
    
    //Calculate quantity of quarters to return
    var quarterChange = Math.floor(remainingChange / .25);
    remainingChange = (remainingChange % .25).toFixed(2);
    document.getElementById('quarters-output').innerHTML = quarterChange;

    //Calculate quantity of dimes bills to return
    var dimeChange = Math.floor(remainingChange / .10);
    remainingChange = (remainingChange % .10).toFixed(2);
    document.getElementById('dimes-output').innerHTML = dimeChange;

    //Calculate quantity of nickels bills to return
    var nickelChange = Math.floor(remainingChange / .05);
    remainingChange = (remainingChange % .05).toFixed(2);
    document.getElementById('nickels-output').innerHTML = nickelChange;

    //Calculate quantity of pennies bills to return
    var pennyChange = Math.floor(remainingChange / .01);
    remainingChange = (remainingChange % .01).toFixed(2);
    document.getElementById('pennies-output').innerHTML = pennyChange;
}

// Submit function
let submitFunction = () => {
    var cost = parseFloat(document.getElementById('amount-due').value);
    var tendered = parseFloat(document.getElementById('amount-received').value);

    if(cost > tendered){
        var deficit = (cost - tendered).toFixed(2);
        document.getElementById('helperAmountTendered').innerHTML = `Your are $${deficit} short.`
    } else if(cost <= tendered){
        calculateChange(tendered, cost);
        document.getElementById('helperAmountTendered').innerHTML = ""
    }

    }

