const openMenu = document.querySelector(".menu-links");

function openmenu(){
    openMenu.style.width = "250px";
}
function closeMenu(){
    openMenu.style.width = "0px";
}

/*MODAL PAGE FOR BILLING*/
const bodyModal = document.querySelector(".payment");
const closeChildModal = document.querySelector(".nextsub");

function openBills(){
    bodyModal.style.display = "block";
}

function exit(){
    bodyModal.style.display = "none";
    paymentB.style.display = "none";
}

bodyModal.addEventListener("click", bClose)
function bClose(e){
    if(e.target.className == "payment"){
        bodyModal.style.display = "none";
    }
}

/*Second modal*/
var paymentB = document.querySelector(".paymentB");

function calculat(){

    bodyModal.style.display = "none";
    paymentB.style.display = "block";

    const acctNo = document.querySelector("#num").value
    const acctName = document.querySelector("#nim").value;
    const acctDate = document.querySelector("#dayte").value;
    const acctAmount = document.querySelector("#amt").value;
    const acctEmail = document.querySelector("#acctEm").value;

    document.getElementById("moneyy").innerText = acctAmount;
    document.getElementById("acctNo").innerText = acctNo;
    document.getElementById("acctName").innerText = acctName;
    document.getElementById("dispDate").innerText = acctDate;
    document.getElementById("acctEmail").innerText = acctEmail;

    
}
function exitMo(){
    paymentB.style.display = "none";
}

function closeDal(e){
    paymentB.addEventListener("click", closeDal)

    if(e.target.className == paymentB){
        paymentB.style.display = "none";
    }
}

