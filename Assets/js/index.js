const formCard = document.querySelector('.form-container');
const quizCard = document.querySelector('.quiz-container');
const scoreCard = document.querySelector('.scoreboard-container');
const startButton = document.querySelector('.startbutton');
let totalScore = document.querySelector('.score');
let startQuestion , sortQuestion ;

const startQuiz = ()=>{
    formCard.classList.add('hide');
    quizCard.classList.remove('hide');
}

const showResult = ()=>{
    scoreCard.classList.remove('hide');
    quizCard.classList.add('hide');
}

startButton.addEventListener('click', startQuiz);








