const rollBtn = document.getElementById('rollBtn');

rollBtn.onclick = rollDice;

function rollDice() {
    const numOfDice = document.getElementById('numOfDice').value;
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');
    const sum = document.getElementById('sum');
    let added = 0;
    const values = [];
    const images = [
        'https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-one.png',
        'https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-two.png',
        'https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-three.png',
        'https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-four.png',
        'https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-five.png',
        'https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-six.png'
    ];
    const displayImages = [];
    const invalidInput = /\D/.test(numOfDice);


    if (numOfDice == 0 || numOfDice == null) {
        sum.innerText = "Enter how many dice you would like to roll";
        diceResult.innerText = "";
        diceImages.innerHTML = "";
    } else if (!invalidInput) {
        for (let i = 0; i < numOfDice; i++) {
            const value = Math.floor(Math.random() * 6) + 1;
            values.push(value);
            displayImages.push('<img src='+ images[value-1] + '>');
            added += values[i];
        }
    
        sum.innerText = "Sum = " + added;
        diceResult.innerText = "Dice: " + values.join(', ');
        diceImages.innerHTML = displayImages.join(" ");
    } else {
        sum.innerText = "Invalid Input";
        diceResult.innerText = "";
        diceImages.innerHTML = "";
    }
}