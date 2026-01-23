window.onload = function() {
//For windows authorization
const userInput = window.prompt('Please enter your name to continue');
if (!userInput) {
    window.alert('Please input your username');
        return;
}else{
        Change = userInput.trim().charAt(0).toUpperCase() + userInput.trim().slice(1);
        userName.textContent = `Welcome back, ${Change}`;
}};

// For username
const userName = document.getElementById('userName');

//For dashboard
const Income = document.getElementById('Income');
const Expense = document.getElementById('Expense');
const Balance = document.getElementById('Balance');
const Savings = document.getElementById('Savings');
const Superscript = document.getElementById('super');
const mediaQuery = window.matchMedia('(max-width: 50rem)');

function updateText(){
    if (mediaQuery.matches) {
        Income.textContent = `Income: `;
        Income.style.fontWeight = '800';
        Expense.textContent = `Expense: `;
        Expense.style.fontWeight = '800';
        Balance.textContent = `Balance: `;
        Balance.style.fontWeight = '800';
        Savings.textContent = `Savings(20%): `;
        Savings.style.fontWeight = '800';

    } else {
        Income.textContent = `Income`;
        Income.style.fontWeight = '500';
        Expense.textContent = `Expense`;
        Expense.style.fontWeight = '500';
        Balance.textContent = `Balance`;
        Balance.style.fontWeight = '500';
        Savings.textContent = `Savings(20%)`;
        Savings.style.fontWeight = '500'
    }
}

mediaQuery.addEventListener('change', updateText);
//Initial check
updateText();
// For dashboard values
const income = document.getElementById('incomeValue');
const expense = document.getElementById('expenseValue');
const balance = document.getElementById('balanceValue');
const savings = document.getElementById('savingsValue');

//For inputs and button
const incomes = document.getElementById('Incomes');
const expenses = document.getElementById('Expenses');
const button = document.getElementById('trackButton');
const errorMessage = document.getElementById('error');

function checkInputs(){
    if(incomes.value.trim() !== '' && expenses.value.trim() !== ''){
        button.disabled = false;
        errorMessage.textContent = '';
    } else{
        button.disabled = true;
        errorMessage.textContent = 'Please input the both input fields';
    }
}
incomes.addEventListener('input', checkInputs);
expenses.addEventListener('input', checkInputs);
//Initialize button state
checkInputs();

//For Currency
const Naira = document.getElementById('naira');
const Dollar = document.getElementById('dollars');
const Euros = document.getElementById('euros');
const Pounds = document.getElementById('pounds');

let Result;
let RecommendSavings;
let currency = '₦'

function track(){

    //Currency function
    currency = Dollar.checked? '$' : currency;
    currency = Euros.checked? '£' : currency;
    currency = Pounds.checked? '₱' :  currency;
    currency = Naira.checked? '₦' : currency;

    //Arithmetric function
    incomes.value = Number(incomes.value);
    expenses.value = Number(expenses.value);
    Result = (incomes.value - expenses.value).toFixed(2);
    RecommendSavings = ((incomes.value / 100) * 20).toFixed(2);
    income.textContent = `${currency}${incomes.value}`;
    expense.textContent = `${currency}${expenses.value}`;
    balance.textContent = `${currency}${Result}`;
    savings.textContent = `${currency}${RecommendSavings}`;
}