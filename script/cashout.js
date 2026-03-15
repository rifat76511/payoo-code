document.getElementById("Cashout-btn").addEventListener("click", function () {
  const cashOutNum = getValueInput('agent-number');
  if (cashOutNum.length != 11) {
    alert("Invalid Agent Number");
    return;
  }
  const cashOut = getValueInput('amount-withdraw');
  const amount = getBalance();
  let lastAmount = amount - Number(cashOut);
  if(lastAmount < 0){
    alert("Invalid Amount");
    return;
  }
  const pin = getValueInput("withdraw-pin");
  if(pin === "1234"){
    alert("CashOut Successfully");
    setBalance(lastAmount);
     const history = document.getElementById("history");
        const newHistory = document.createElement("div");
        newHistory.innerHTML = `
        <div id="history-contain" class=" p-3 space-y-2"> 
            CashOut Success Last Amount
                ${lastAmount}
             at ${new Date()}     
            </div>
        `
        history.appendChild(newHistory);
  }
  else{
    alert("Invalid Pin");
    return;
  }
});







// document.getElementById("Cashout-btn").addEventListener("click", function(){
//   const cashOutNumInput = document.getElementById('agent-number');
//   const cashOutNum = cashOutNumInput.value;
//   if(cashOutNum.length != 11){
//     alert("Invalid Agent Number");
//     return;
//   }

//   const cashOutAmount = document.getElementById("amount-withdraw");
//   const cashOut = cashOutAmount.value;
//   const totalAmount = document.getElementById("amount");
//   const amount = totalAmount.innerText;
//   let lastAmount = Number(amount) - Number(cashOut);
//   if(lastAmount < 0){
//      alert("Invalid Amount");
//      return;
//   }
// const cashOutPin = document.getElementById("withdraw-pin");
// const pin = cashOutPin.value;
// if(pin === "1234"){
//   alert("Cash out sucsscefull");
//   totalAmount.innerText = lastAmount;
// }
// else{
//   alert("Invalid Pin");
//   return;
// }
// });