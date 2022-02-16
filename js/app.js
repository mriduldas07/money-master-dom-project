


function calculationMoney() {
    const incomeInput = document.getElementById('income-input');
    const rentInput = document.getElementById('rent-input');
    const foodInput = document.getElementById('food-input');
    const clothesInput = document.getElementById('clothes-input');
    
    const expencess = parseFloat(foodInput.value) + parseFloat(rentInput.value) + parseFloat(clothesInput.value);
    const expencessTotal = document.getElementById('expencess-total');
    expencessTotal.innerText = expencess;


    const balance = parseFloat(incomeInput.value) - parseFloat(expencessTotal.innerText);
    const balanceTotal = document.getElementById('balance-total');
    balanceTotal.innerText = balance;


    // clear input
    incomeInput.value = '';
    foodInput.value = '';
    rentInput.value = '';
    clothesInput.value = '';

}

//save money

function saveMoney() {
    const incomeInput = document.getElementById('income-input');
    const savingInput = document.getElementById('saving-input');
    const saveMoney = parseFloat(incomeInput.value) / parseFloat(savingInput.value);

    const savingAmount = document.getElementById('saving-total');
    savingAmount.innerText = saveMoney;

    //clear saving input
    savingInput.value = '';
}   


