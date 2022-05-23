questions = [
  {
    question: "WHAT DOES HTML STAND FOR",
    answer: "HYPERTEXT MARKUP LANGUAGE",
    choices: [
      "HELLO PROGRAMMING LANGUAGE:",
      "HYPERTEXT MARKUP LANGUAGE:",
      "HAPPY TERMINAL LEARNING:",
      "HUNDRED LINES OF CODE:",
    ],
  },
  {
    question: "WHAT DOES CSS STAND FOR",
    answer: "CASCADING STYLESHEET",
    choices: [
      "CASCADING STYLESHEET",
      "CARS STYLING STRUCTURE",
      "CONDUSIVE SITE STRUCTURING",
      "SCANDID SPLENDING HONEY",
    ],
  },
  {
    question: "WHAT DOES JAVASCRIPT DO",
    answer: "Allows Webpages to become interactive",
    choices: [
      "Styles the Webpage",
      "Creates the Basic Structure of the Webpage",
      "Adds interactivity and functionality to the webpage",
      "SCANDID SPLENDING HONEY",
    ],
  }
];

const quizTitle = document.querySelector(".quiz-title");
const quizAnswer = document.querySelector(".quiz-answers");
const submitButton = document.querySelector(".button");
// const quizChoice = document.querySelector('.quiz-answers');

let i = 0;

submitButton.addEventListener('click',()=>{
    if(i<questions.length){
        i++;
        showQuestions(i);
    }
})

  function showQuestions(){
    let questionTag = questions[i].question;
    let answerTag =
      '<span class="quiz-answer"> ' +
      questions[i].choices[0] +
      "</span>" +
      '<span class="quiz-answer"> ' +
      questions[i].choices[1] +
      "</span>" +
      '<span class="quiz-answer"> ' +
      questions[i].choices[2] +
      "</span>" +
      '<span class="quiz-answer"> ' +
      questions[i].choices[3] +
      "</span>";
  
    quizTitle.textContent = questionTag;
    quizAnswer.innerHTML = answerTag;
    
    function optionSelected(answer){
        let userAns = answer.textContent;
        let correctAns = questions[i].answer;
        console.log(correctAns);
    }
    const option = quizAnswer.querySelectorAll('.quiz-answer');
    for(i=0;i<option.length;i++){
        option[i].setAttribute(`${onclick, optionSelected(this)}`)
    }
    
}


let score = 0;



  console.log(score);

  