questions = [
  {
    question: "WHAT DOES HTML STAND FOR",
    answer: "HYPERTEXT MARKUP LANGUAGE",
    choices: [
      "HELLO PROGRAMMING LANGUAGE",
      "HYPERTEXT MARKUP LANGUAGE",
      "HAPPY TERMINAL LEARNING",
      "HUNDRED LINES OF CODE",
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
];

const quizTitle = document.querySelector(".quiz-title");
const quizAnswer = document.querySelector(".quiz-answers");
const submitButton = document.querySelector(".button");

let i = 0;

  let questionTag = `${questions[i].question}`;
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
