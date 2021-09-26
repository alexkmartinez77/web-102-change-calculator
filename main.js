// Calculate Change function
function calculateChange(tendered, cost){

    var change = tendered - cost;

    //Calculate quantity of $20 bills to return
    var twentyChange = Math.floor(change / 20);
    var remainingChange = change % 20;
    document.getElementById('twenty-dollars-output').innerHTML = twentyChange;
    

    //Calculate quantity of $10 bills to return
    //Calculate quantity of $50 bills to return
    //Calculate quantity of $2 bills to return
    //Calculate quantity of $1 bills to return
}

// handleClickEvent function
function handleClickEvent(e){
    var cost = document.getElementById('amount-due').value;
    var tendered = document.getElementById('amount-received').value;

    calculateChange(tendered, cost);
}
