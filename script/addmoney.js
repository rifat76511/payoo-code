document.getElementById("add-btn").addEventListener("click", function () {
    const bankName = getValueInput("add-money-bank");
    if (bankName == "Select bank") {
        alert("Please Select a Bank ");
        return;
    }

    const account = getValueInput("bank-number");
    if (account.length != 11) {
        alert("Invalid Account Number");
        return;
    }
    const addAmount = getValueInput("add-amount");
    const balance = getBalance();
    const newBalance = balance + Number(addAmount);
    if (addAmount == "") {
        alert("Please Enter Amount");
        return;
    }
    const pin = getValueInput("add-pin");
    if (pin == "1234") {
        alert(`Add Success In 
                ${bankName}
             at ${new Date()}`);
        setBalance(newBalance);
        const history = document.getElementById("history");
        const newHistory = document.createElement("div");
        newHistory.innerHTML = `
        <div id="history-contain" class=" p-3 space-y-2"> 
            Add Success In 
                ${bankName}
             at ${new Date()}     
            </div>
        `
        history.appendChild(newHistory);
    }
    else {
        alert("Invalid Pin");
    }
});