// Hämtar element från DOM
// # är för att hämta ID.
//xxxxInput = för det jag döper det till
//Const och inte let för att det inte ska ändras
//Queryselector - Tar det första ID element som matchar mitt
// Vänster om likamed tecknet är vad jag döper dem till.
const descInput = document.querySelector("#desc");
const amountInput = document.querySelector("#amount");

const incomeButton = document.querySelector("#incomeBtn");
const expenseButton = document.querySelector("#expenseBtn");

const incomeList = document.querySelector("#incomeList");
const expenseList = document.querySelector("#expenseList");

const balanceElement = document.querySelector("#balance");

// Startvärde för saldo
let balance = 0;

// ====================
// INKOMST
// ====================
// addeventlistener är min trigger till incomebutton - När användaren trycker på knappen körs funktionen
//.value = själva texten i fältet
incomeButton.addEventListener("click", function (event) {
  const desc = descInput.value;
  const amount = amountInput.value;

  // Validering: tomma fält
  if (desc === "" || amount === "") {
    alert("Fyll i båda fälten");
    return;
  }

  const amountNumber = Number(amount);

  // Validering: måste vara siffra
  if (isNaN(amountNumber)) {
    alert("Belopp måste vara en siffra");
    return;
  }

  // Skapar listitem
  const listItem = document.createElement("li");
  listItem.textContent = `${desc} - ${amountNumber} kr (Inkomst)`;

  incomeList.appendChild(listItem);

  // Uppdaterar saldo
  balance += amountNumber;
  balanceElement.textContent = balance;

  // Rensar fält
  descInput.value = "";
  amountInput.value = "";
});

// ====================
// UTGIFT
// ====================
expenseButton.addEventListener("click", function () {
  const desc = descInput.value;
  const amount = amountInput.value;

  if (desc === "" || amount === "") {
    alert("Fyll i båda fälten");
    return;
  }

  const amountNumber = Number(amount);

  if (isNaN(amountNumber)) {
    alert("Belopp måste vara en siffra");
    return;
  }

  const listItem = document.createElement("li");
  listItem.textContent = `${desc} - ${amountNumber} kr (Utgift)`;

  expenseList.appendChild(listItem);

  // Uppdaterar saldo (minus)
  balance -= amountNumber;
  balanceElement.textContent = balance;

  // Rensar fält
  descInput.value = "";
  amountInput.value = "";
});
