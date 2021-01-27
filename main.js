const loginBtn = document.querySelector(".login-btn");
const depositBtn = document.querySelector(".btn-deposit");
const withdrawBtn = document.querySelector(".btn-withdraw");
const loginForm = document.querySelector(".main-form");
const mainInterface = document.querySelector(".main-content");
const dipositMonitor = document.querySelector(".deposit");
const withdrawMonitor = document.querySelector(".withdraw");
const balanceMonitor = document.querySelector(".balance");



var depositInit = 0;
var withdrawInit = 0;
var balanceInit = 1300;

dipositMonitor.innerText = depositInit;
withdrawMonitor.innerText = withdrawInit;
balanceMonitor.innerText = balanceInit;


loginBtn.addEventListener("click", login);
depositBtn.addEventListener("click", deposit);
withdrawBtn.addEventListener("click", withdraw);

function login() {
    loginForm.style.display = "none";
    mainInterface.style.display = "block";
}

function deposit() {
    const depoValue = document.querySelector(".depo-inp").valueAsNumber;
    if (isNaN(depoValue)) {
        alert("enter a valid number");
        return false;
    }
    else {
        depositInit = depositInit + depoValue;
        balanceInit = balanceInit + depoValue;
        dipositMonitor.innerText = depositInit;
        balanceMonitor.innerText = balanceInit;
        document.querySelector(".depo-inp").value = "";
    }
}


function withdraw() {
    const withValue = document.querySelector(".with-inp").valueAsNumber;
    if (isNaN(withValue)) {
        alert("enter a valid number");
        return false;
    }
    else {
        withdrawInit = withdrawInit + withValue;
        balanceInit = balanceInit - withValue;
        withdrawMonitor.innerText = withdrawInit;
        balanceMonitor.innerText = balanceInit;
        document.querySelector(".with-inp").value ="";
    }
}
