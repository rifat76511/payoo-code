document.getElementById("Cashout-btn").addEventListener("click", function(){
  const cashOutNumInput = document.getElementById('agent-number');
  const cashOutNum = cashOutNumInput.value;
  if(cashOutNum.length != 11){
    alert("Invalid Agent Number");
    return;
  }

  const cashOutAmount = document.getElementById("amount-withdraw");
  const cashOut = cashOutAmount.value;
  const totalAmount = document.getElementById("amount");
  const amount = totalAmount.innerText;
  let lastAmount = Number(amount) - Number(cashOut);
  if(lastAmount < 0){
     alert("Invalid Amount");
     return;
  }
const cashOutPin = document.getElementById("withdraw-pin");
const pin = cashOutPin.value;
if(pin === "1234"){
  alert("Cash out sucsscefull");
  totalAmount.innerText = lastAmount;
}
else{
  alert("Invalid Pin");
  return;
}
});