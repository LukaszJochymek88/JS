const numQuestions = 3;
const maxNumber = 10;
const minNumber = 1;
let numGoodAnswers = 0;

function getRandomNumber() {
    return Math.floor((Math.random() * maxNumber) + minNumber);
}

for (let i = 0; i < numQuestions; i++) {
    let firstNumber = getRandomNumber();
    let secondNumber = getRandomNumber();


    let result = firstNumber * secondNumber;
    let answer = prompt('Ile to jest  ' + firstNumber + '  razy  ' + secondNumber + '  ?');


    if (result.toString() === answer) {
        console.log('Dobra odpowiedz!')
        numGoodAnswers++;
    } else {
        console.log('Zła odpowiedź')
    }

    console.log('poprawne odpowiedzi to :' + numGoodAnswers);
}

if (numGoodAnswers === numQuestions) {
    alert('Brawo! umiesz tabliczkę mnożenia');
} else {
    alert('Musisz się jeszcze poduczyć!');
}
