const formCard = document.querySelector('.form-container');
const quizCard = document.querySelector('.quiz-container');
const scoreCard = document.querySelector('.scoreboard-container');
const submitButton = document.querySelector('.button');
const startButton = document.querySelector('.startbutton');
let totalScore = document.querySelector('.score');
let startQuestion , sortQuestion ;




startButton.addEventListener('click', startQuiz);

function startQuiz(){
    formCard.classList.add('hide');
    quizCard.classList.remove('hide');
}

