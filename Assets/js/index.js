const startButton = document.querySelector('.submit');
const formCard = document.querySelector('.form-container');
const quizCard = document.querySelector('.quiz-container');




startButton.addEventListener('click', startQuiz);

function startQuiz(){
    formCard.classList.add('hide');
    quizCard.classList.remove('hide');
}