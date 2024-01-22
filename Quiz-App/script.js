const quizData = [
    {
        question: 'What is Java?',
        a: 'Programming Language',
        b: 'Coffee Mix',
        c: 'A slang',
        d: 'All the answer above',
        correct: 'a'
    }, 
    {
        question: 'What is a variable?',
        a: 'A number',
        b: 'A word',
        c: 'A place or a store to keep a value in it',
        d: 'Nothing above',
        correct: 'c'
    },
    {
        question: 'What is the boolean value?',
        a: 'A number',
        b: 'A value which is true or false to indicate',
        c: 'A phrase',
        d: 'A natural value',
        correct: 'b'
    },
    {
        question: 'What is a function?',
        a: 'A value',
        b: 'The name of the program',
        c: 'A program which is written to perform a certain task',
        d: 'Nothing above',
        correct: 'c'
    },
    {
        question: 'What year was Java launched?',
        a: 'May 12, 2001',
        b: 'July 1, 2000',
        c: 'Dec 4, 1999',
        d: 'May 23, 1995',
        correct: 'd'
    }
];

const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectedAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectedAnswers() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You Answered correctly at ${score}/${quizData.length}</h2> 
            <button onclick="location.reload()">Reload</button>`;
        }
    }
});
