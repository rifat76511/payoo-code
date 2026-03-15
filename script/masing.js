function getValueInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(value);
    return value;
}

function getBalance(){
    const currentBalance =document.getElementById("amount");

    const balance =currentBalance.innerText;
    return Number(balance);
}

function setBalance(value){
    const currentBalance =document.getElementById("amount");
    currentBalance.innerText = value;
}

function showOnly(id) {
const addMoneys = document.getElementById("add-money");
const cashOuts = document.getElementById("cash-out");
const history = document.getElementById("history");

addMoneys.classList.add("hidden");
cashOuts.classList.add("hidden");
history.classList.add("hidden");

const selected = document.getElementById(id);
selected.classList.remove("hidden");
}