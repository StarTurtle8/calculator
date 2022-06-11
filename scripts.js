const zeroBtn = document.getElementById('zero');
const oneBtn = document.getElementById('one');
const twoBtn = document.getElementById('two');
const threeBtn = document.getElementById('three');
const fourBtn = document.getElementById('four');
const fiveBtn = document.getElementById('five');
const sixBtn = document.getElementById('six');
const sevenBtn = document.getElementById('seven');
const eightBtn = document.getElementById('eight');
const nineBtn = document.getElementById('nine');
const allClearBtn = document.getElementById('allClear');
const clearBtn = document.getElementById('clear');
const modularBtn = document.getElementById('modular');
const divisionBtn = document.getElementById('division');
const multiplicationBtn = document.getElementById('multiplication');
const subtractionBtn = document.getElementById('subtraction');
const additionBtn = document.getElementById('addition');
const equalsBtn = document.getElementById('equals');
const decimalBtn = document.getElementById('decimal');
const calcNumber = document.getElementById('userInput')


let mainNumber = []
let savedNumber = []
let result = 0;
let operatorSelect = 'standby';
let checker = 'standby';

zeroBtn.addEventListener('click', function() {
    mainNumber.push(0)
    calcNumber.textContent = `${mainNumber.join('')}`
    operCheck()

});

oneBtn.addEventListener('click', function() {
    mainNumber.push(1)
    calcNumber.textContent = `${mainNumber.join('')}`
    operCheck()
});

twoBtn.addEventListener('click', function() {
    mainNumber.push(2)
    calcNumber.textContent = `${mainNumber.join('')}`
    operCheck()
});

threeBtn.addEventListener('click', function() {
    mainNumber.push(3)
    calcNumber.textContent = `${mainNumber.join('')}`
    operCheck()
});

fourBtn.addEventListener('click', function() {
    mainNumber.push(4)
    calcNumber.textContent = `${mainNumber.join('')}`
    operCheck()
});

fiveBtn.addEventListener('click', function() {
    mainNumber.push(5)
    calcNumber.textContent = `${mainNumber.join('')}`
    operCheck()
});

sixBtn.addEventListener('click', function() {
    mainNumber.push(6)
    calcNumber.textContent = `${mainNumber.join('')}`
    operCheck()
});

sevenBtn.addEventListener('click', function() {
    mainNumber.push(7)
    calcNumber.textContent = `${mainNumber.join('')}`
    operCheck()
});

eightBtn.addEventListener('click', function() {
    mainNumber.push(8)
    calcNumber.textContent = `${mainNumber.join('')}`
    operCheck()
});

nineBtn.addEventListener('click', function() {
    mainNumber.push(9)
    calcNumber.textContent = `${mainNumber.join('')}`
    operCheck()
});

decimalBtn.addEventListener('click', function() {
    mainNumber.push('.')
    calcNumber.textContent = `${mainNumber.join('')}`
    operCheck()
});

clearBtn.addEventListener('click', function() {
    mainNumber.pop()
    if (calcNumber.textContent = []) {
        calcNumber.textContent = 0
    }   
    else { calcNumber.textContent = `${mainNumber.join('')}`
    operCheck()
}

});

const operCheck = () => {
    if (operatorSelect === 'plus') {
        calcNumber.textContent = `${savedNumber} + ${mainNumber.join('')}`
    } else if (operatorSelect === 'minus') {
        calcNumber.textContent = `${savedNumber} - ${mainNumber.join('')}`
    } else if (operatorSelect === 'multiply') {
        calcNumber.textContent = `${savedNumber} * ${mainNumber.join('')}`
    } else if (operatorSelect === 'division') {
        calcNumber.textContent = `${savedNumber} / ${mainNumber.join('')}`
    } else if (operatorSelect === 'standby') {
        calcNumber.textContent = `${mainNumber.join('')}`
    }
}

const checkOperator = () => {
    if (operatorSelect != 'empty' && checker != 'triggered'){
        savedNumber = mainNumber.join('')
        mainNumber = []
    }
}

const evaluate = () => {
    if (operatorSelect === 'plus' && checker === 'triggered'){
        addFunc()
        savedNumber = result
        mainNumber = []
        // calcNumber.textContent = `${savedNumber} +`
        operatorSelect = 'standby'
    } else if (operatorSelect === 'minus' && checker === 'triggered'){
        minusFunc()
        savedNumber = result
        mainNumber = []
        // calcNumber.textContent = `${savedNumber} -`
        operatorSelect = 'standby'
    } else if (operatorSelect === 'multiply' && checker === 'triggered'){
        multiplyFunc()
        savedNumber = result
        mainNumber = []
        // calcNumber.textContent = `${savedNumber} *`
        operatorSelect = 'standby'
    } else if (operatorSelect === 'division' && checker === 'triggered'){
        divisionFunc()
        savedNumber = result
        mainNumber = []
        // calcNumber.textContent = `${savedNumber} /`
        operatorSelect = 'standby'
    }
}
    

additionBtn.addEventListener('click', function() {
    evaluate()
    operatorSelect = 'plus'
    checkOperator()
    calcNumber.textContent = `${savedNumber} +`
    checker = 'triggered'
});

subtractionBtn.addEventListener('click', function() {
    evaluate()
    operatorSelect = 'minus'
    checkOperator()
    calcNumber.textContent = `${savedNumber} -`
    checker = 'triggered'
});

multiplicationBtn.addEventListener('click', function() {
    evaluate()
    operatorSelect = 'multiply'
    checkOperator()
    calcNumber.textContent = `${savedNumber} *`
    checker = 'triggered'
});

divisionBtn.addEventListener('click', function() {
    evaluate()
    operatorSelect = 'division'
    checkOperator()
    calcNumber.textContent = `${savedNumber} /`
    checker = 'triggered'
});

equalsBtn.addEventListener('click', function() {
    evaluate()
    screen.textContent = `${savedNumber}`
    operatorSelect = 'standby'
});

allClearBtn.addEventListener('click', function() {
    mainNumber = []
    savedNumber = []
    operatorSelect = 'standby';
    calcNumber.textContent = `0`
    checker = 'standby'
})

const addFunc = () => {
    mainNumber = mainNumber.join('')
    result = parseFloat(mainNumber) + parseFloat(savedNumber)
    calcNumber.textContent = `${result}`
}

const minusFunc = () => {
    mainNumber = mainNumber.join('')
    result = parseFloat(savedNumber) - parseFloat(mainNumber)
    calcNumber.textContent = `${result}`
}

const multiplyFunc = () => {
    mainNumber = mainNumber.join('')
    result = parseFloat(mainNumber) * parseFloat(savedNumber)
    calcNumber.textContent = `${result}`
}

const divisionFunc = () => {
    mainNumber = mainNumber.join('')
    if (mainNumber == 0) { 
        mainNumber = []
        savedNumber = []
        operatorSelect = 'standby';
        checker = 'standby'
        calcNumber.textContent = `Impossible!`
    }
    else {
        result = parseFloat(savedNumber) / parseFloat(mainNumber)
        calcNumber.textContent = `${result}`
    }
}