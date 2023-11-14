var startButton = document.getElementById('start-button')
var nextButton = document.getElementById('next-button')
var answerElements = document.getElementById('answer-buttons')
var quizContainer = document.getElementById('quiz-container')

startButton.addEventListener('click', startQuiz);

 function startQuiz() {
    console.log("Quiz started")
    startButton.classList.add('hidden')
    questionElement.clistlist.remove('hidden')

}

// Quesitons 
const quizQuestions = [
    {
      question: "What is the syntax of a closing tag?",
      answers: {
        a: "</head>",
        b: "<head>",
        c: "<\head>",
        d: "None of the above"
      },
      correctAnswer: "a"
    },
    {
      question: "What keyword is used to define a varible in JavaScript?",
      answers: {
        a: "let",
        b: "var",
        c: "const",
        d: "All of the above"
      },
      correctAnswer: "d"
    },
    {
      question: "What CSS property makes the color of the page change?",
      answers: {
        a: "color",
        b: "text-color",
        c: "font",
        d: "background-color"
      },
      correctAnswer: "a"
    },
    {
        question: "Which built-in method removes the last element from an array and returns that element?",
        answers: {
          a: "last()",
          b: "unshift()",
          c: "pop()",
          d: "get()"
        },
        correctAnswer: "c"
      },
      {
        question: "What does HTML stands for?",
        answers: {
          a: "Hypertext Machine Language ",
          b: "Hypertext Markup Language",
          c: "HyperTitle Mild Language",
          d: "All of the above"
        },
        correctAnswer: "b"
      }
  ];
