let addbalance = document.getElementById("addbalance");
let balanceInput = document.getElementById("balanceInput");
let myBalance = document.getElementById("myBalance");
let addExpenseBtn = document.getElementById("addExpenseBtn");
let expenseInput = document.getElementById("expenseInput");
let amountexpense = document.getElementById("amountexpense");
let myTitle = document.getElementById("myTitle");
let myPrice = document.getElementById("myPrice");
let myE = document.querySelector(".myExpense-h");
let titleAndPrice = document.querySelector(".title-and-price");
addbalance.addEventListener("click", addBalance);

let myB = 0;
myBalance.innerHTML = `$${myB}`

function addBalance() {
    
  if (!balanceInput.value) {
    alert("Plz Enter the Balance");
  } else {
    alert("Balance Added!");
    myBalance.innerHTML = `$${balanceInput.value}`;
    balanceInput.value = "";
  }
}
addExpenseBtn.addEventListener("click", addExpense);

function addExpense() {

    let expVal = +amountexpense.value;
    let myBVal = +myBalance.innerHTML.slice(1);
    let result = myBVal - expVal;

  if (!expenseInput.value || !amountexpense.value) {
    alert("Plz Fill Out this Fields!");
  } else if (
    expenseInput.value &&
    amountexpense.value &&
    myBalance.innerHTML == "$0"
  ) {
    alert("Balance Not Yet");
    expenseInput.value = "";
    amountexpense.value = "";
  } else {
    alert("Expense Added!");
    let t = document.createElement("p");
    let createTitleText = document.createTextNode(`${expenseInput.value}`);
    let p = document.createElement("p");
    let pTextN = document.createTextNode(`$${amountexpense.value}`);
    t.setAttribute("class", "tfortitler");
    p.appendChild(pTextN);
    p.setAttribute("class", "PrPrice");
    t.appendChild(createTitleText);
    myE.insertAdjacentElement("afterend", t);
    myE.insertAdjacentElement("afterend", p);
    expenseInput.value = "";
    amountexpense.value = "";
    myBalance.innerHTML = `$${result}`;
  
    function generateRandomNumber(){
        return Math.floor(Math.random()*9)
    }

    let myC = "#" + generateRandomNumber() + generateRandomNumber() + generateRandomNumber() + generateRandomNumber() + generateRandomNumber() + generateRandomNumber() 
    console.log(myC); 
    document.querySelector(".PrPrice").style.backgroundColor = myC;
    document.querySelector(".tfortitler").style.backgroundColor = myC;

  }
}
