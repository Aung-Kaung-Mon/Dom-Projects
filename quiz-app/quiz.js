const question = document.querySelector("#question");
const answerBtnS = document.querySelector("#answer-buttons");
const nextBtn = document.querySelector("#next-button");

// fields

const questions = [
  {
    question: "What is the largest animal in the world?",
    answers: [
      {
        text: "Elephant",
        correct: false,
      },
      {
        text: "Blue Whale",
        correct: true,
      },
      {
        text: "Shark",
        correct: false,
      },
      {
        text: "Lion",
        correct: false,
      },
    ],
  },

  {
    question: "What is the largest desert in the world?",
    answers: [
      {
        text: "Antarctic Polar Desert",
        correct: true,
      },
      {
        text: "Sahara Desert",
        correct: false,
      },
      {
        text: "Gobi Desert",
        correct: false,
      },
      {
        text: "Great Australian",
        correct: false,
      },
    ],
  },

  {
    question: "What is the largest continent in the world?",
    answers: [
      {
        text: "Australia",
        correct: false,
      },
      {
        text: "Europe",
        correct: false,
      },
      {
        text: "Africa",
        correct: false,
      },
      {
        text: "Asia",
        correct: true,
      },
    ],
  },

  {
    question: "What is the richest person in the world?",
    answers: [
      {
        text: "Elon Musk",
        correct: true,
      },
      {
        text: "Bill Gates",
        correct: false,
      },
      {
        text: "jeff Bezos",
        correct: false,
      },
      {
        text: "Larry Elison",
        correct: false,
      },
    ],
  },
];

let currentQuesIndex;
let score = 0;

const startQuiz = () => {
  currentQuesIndex = 0;
  nextBtn.innerText = "Next";
  showQuiz();
};

const showQuiz = () => {
  resetState();
  question.innerText = questions[currentQuesIndex].question;

  questions[currentQuesIndex].answers.forEach((ans) => {
    const answerBtn = document.createElement("button");
    answerBtn.classList.add(
      "btn",
      "d-block",
      "w-100",
      "btn-outline-dark",
      "mb-3",
      "py-3"
    );
    answerBtn.innerText = ans.text;
    answerBtnS.append(answerBtn);
    answerBtn.dataset.correct = ans.correct;

    answerBtn.addEventListener("click", (e) => {
      let selectedBtn = e.target;
      let isCorrect = selectedBtn.dataset.correct === "true";
      if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
      } else {
        selectedBtn.classList.add("incorrect");
      }

      Array.from(answerBtnS.children).forEach((answerBtn) => {
        if (answerBtn.dataset.correct === "true") {
          answerBtn.classList.add("correct");
        }
        answerBtn.style.pointerEvents = "none";
      });
      nextBtn.style.display = "initial";
    });
  });

  nextBtn.addEventListener("click", () => {
    if (currentQuesIndex < questions.length) {
      handleQuiz();
    } else {
      startQuiz();
    }
  });
};

const resetState = () => {
  nextBtn.style.display = "none";
  while (answerBtnS.firstChild) {
    answerBtnS.firstChild.remove();
  }
};

const showScore = () => {
  resetState();
  nextBtn.innerText = "play again";
  nextBtn.style.display = 'initial';
  question.innerText = `You scored ${score} out of ${questions.length}`;
};

const handleQuiz = () => {
  currentQuesIndex++;
  if (currentQuesIndex < questions.length) {
    showQuiz();
  } else {
    showScore();
  }
};
startQuiz();
