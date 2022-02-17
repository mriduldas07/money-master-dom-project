document.getElementById("calculate-btn").addEventListener('click',function () {
    const incomeInput = document.getElementById('income-input');
    const foodInput = document.getElementById('food-input');
    const rentInput = document.getElementById('rent-input');
    const clothesInput = document.getElementById('clothes-input');

    let incomeAmount = parseFloat(incomeInput.value);
    let foodAmount = parseFloat(foodInput.value);
    let rentAmount = parseFloat(rentInput.value);
    let clothesAmount = parseFloat(clothesInput.value);

    if (isNaN(incomeAmount) || incomeAmount < 0) {
        return alert('Input valid number');
    }
    else if (isNaN(foodAmount) || foodAmount < 0) {
        return alert('Input valid number');
    }
    else if (isNaN(rentAmount) || rentAmount < 0) {
        return alert('Input valid number');
    }
    else if (isNaN(clothesAmount) || clothesAmount < 0) {
        return alert('Input valid number');
    }
    else{
        let expencess = foodAmount + rentAmount + clothesAmount; 
    
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