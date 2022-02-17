document.getElementById("calculate-btn").addEventListener('click',function () {
    const incomeInput = document.getElementById('income-input');
    const foodInput = document.getElementById('food-input');
    const rentInput = document.getElementById('rent-input');
    const clothesInput = document.getElementById('clothes-input');

    let incomeAmount = parseFloat(incomeInput.value);
    let foodAmount = parseFloat(foodInput.value);
    let rentAmount = parseFloat(rentInput.value);
    let clothesAmount = parseFloat(clothesInput.value);
    let expencess = foodAmount + rentAmount + clothesAmount;

    if (isNaN(incomeAmount) || incomeAmount < 0) {
        incomeInput.value='';
        return alert('Input valid number in income box');
    }
    else if (isNaN(foodAmount) || foodAmount < 0) {
        foodInput.value='';
        return alert('Input valid number in food box');
    }
    else if (isNaN(rentAmount) || rentAmount < 0) {
        rentInput.value='';
        return alert('Input valid number in rent box');
    }
    else if (isNaN(clothesAmount) || clothesAmount < 0) {
        clothesInput.value='';
        return alert('Input valid number cloth box');
    }
    else if (incomeAmount < expencess) {
        incomeInput.value='';
        foodInput.value='';
        rentInput.value='';
        clothesInput.value='';
        return alert("Your expences can't larger than your income!!!")
    }
    else{ 
    
    let totalExpencess = document.getElementById('expencess-total');
    let previousExpencess = parseFloat(totalExpencess.innerText);
    totalExpencess.innerText = previousExpencess + expencess;

    let balance = incomeAmount - expencess;

    let totalBalance =document.getElementById('balance-total');
    let previousBalance = parseFloat(totalBalance.innerText);
    totalBalance.innerText = previousBalance + balance;
    }


    //clear input
    incomeInput.value='';
    foodInput.value='';
    rentInput.value='';
    clothesInput.value='';
})



//saving part

document.getElementById('save-btn').addEventListener('click',function () {
    const savingInput = document.getElementById('saving-input');

    let savingParcentage = parseFloat(savingInput.value);

    let 
})