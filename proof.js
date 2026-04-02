const quitButtons = document.querySelectorAll('.quit-button');
const boyfriendButton = document.querySelector('.boyfriend-button');
const initialMessage = document.querySelector('.initial-message');
const initialButtons = document.querySelector('.initial-buttons');
const boyfriendText = document.querySelector('.boyfriend-text');
const quizContainer = document.querySelector('.quiz-container');
const okButton = document.getElementById('okButton');
const hintLinks = document.querySelectorAll('.hint-link');
const hintFailSection = document.querySelector('.hint-fail-section');
const wrongAnswerSection = document.querySelector('.wrong-answer-section');
const tryAgainButtons = document.querySelectorAll('.try-again-button');
const submitButtons = document.querySelectorAll('.submit-button');
const optionButtons = document.querySelectorAll('.option-button');

const title = document.getElementById('title');
const initialCatImage = document.querySelector('.initial-cat-image');
const image1 = document.querySelector('.image-1');
const image3 = document.querySelector('.image-3');
const image4 = document.querySelector('.image-4');
const image6 = document.querySelector('.image-6');
const image7 = document.querySelector('.image-7');
const image8 = document.querySelector('.image-8');
const image9 = document.querySelector('.image-9');
const image10 = document.querySelector('.image-10');
const hintImage = document.querySelector('.hint-image');

let currentQuestion = 1;

function showQuestion(qNum) {
    document.querySelectorAll('.quiz-section').forEach(section => {
        section.style.display = 'none';
    });
    document.querySelectorAll('.quiz-image').forEach(image => {
        image.style.display = 'none';
    });
    document.querySelector(`.q${qNum}-section`).style.display = 'block';

    if (qNum === 1) image6.style.display = 'block';
    if (qNum === 2) image7.style.display = 'block';
    if (qNum === 3) image8.style.display = 'block';
    if (qNum === 4) image9.style.display = 'block';
    if (qNum === 5) image10.style.display = 'block';
}

function showWrongAnswer() {
    quizContainer.style.display = 'none';
    wrongAnswerSection.style.display = 'block';
}

function showHintFail() {
    quizContainer.style.display = 'none';
    hintFailSection.style.display = 'block';
    hintImage.classList.add('show-image');
}

function handleQuit() {
    alert("BYE BYE");
    window.close();
}
if (quitButtons) {
    quitButtons.forEach(button => {
        button.addEventListener('click', handleQuit);
    });
}

if (tryAgainButtons) {
    tryAgainButtons.forEach(button => {
        button.addEventListener('click', () => {
            wrongAnswerSection.style.display = 'none';
            hintFailSection.style.display = 'none';
            if (hintImage) {
                hintImage.classList.remove('show-image');
            }
            quizContainer.style.display = 'block';
            showQuestion(currentQuestion);
        });
    });
}

if (boyfriendButton) {
    boyfriendButton.addEventListener('click', () => {
        title.style.display = 'none';
        initialMessage.style.display = 'none';
        initialButtons.style.display = 'none';
        initialCatImage.style.display = 'none';
        boyfriendText.style.display = 'block';

        const lines = document.querySelectorAll('.boyfriend-text span');
        lines.forEach((line, index) => {
            setTimeout(() => {
                line.style.opacity = '1';
            }, 1500 * index);
        });

        setTimeout(() => {
            image1.style.display = 'block';
            okButton.style.display = 'block';
        }, 1500 * lines.length);
    });
}

if (okButton) {
    okButton.addEventListener('click', () => {
        boyfriendText.style.display = 'none';
        quizContainer.style.display = 'block';
        showQuestion(1);
    });
}

if (hintLinks) {
    hintLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            showHintFail();
        });
    });
}

if (submitButtons) {
    submitButtons.forEach(button => {
        button.addEventListener('click', () => {
            const questionNum = parseInt(button.dataset.question);
            let answer;
            if (questionNum === 1) {
                answer = document.getElementById('answer-input-1').value.trim().toLowerCase();
                if (answer === 'peanut') {
                    currentQuestion++;
                    showQuestion(currentQuestion);
                } else {
                    showWrongAnswer();
                }
            } else if (questionNum === 2) {
                answer = document.getElementById('answer-input-2').value.trim();
                if (answer === '22.2.2004') {
                    currentQuestion++;
                    showQuestion(currentQuestion);
                } else {
                    showWrongAnswer();
                }
            } else if (questionNum === 4) {
                answer = document.getElementById('answer-input-4').value.trim();
                if (answer === '18.1.2024') {
                    currentQuestion++;
                    showQuestion(currentQuestion);
                } else {
                    showWrongAnswer();
                }
            } else if (questionNum === 5) {
                answer = document.getElementById('answer-input-5').value.trim().toLowerCase();
                if (answer === 'yes') {
                    window.location.href = "congrats.html";
                } else {
                    showWrongAnswer();
                }
            }
        });
    });
}

if (optionButtons) {
    optionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.dataset.answer;
            if (answer === 'b') {
                currentQuestion++;
                showQuestion(currentQuestion);
            } else {
                showWrongAnswer();
            }
        });
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const confessionMessageContainer = document.querySelector('.confession-message');
    if (confessionMessageContainer) {
        const lines = confessionMessageContainer.querySelectorAll('span');
        lines.forEach((line, index) => {
            setTimeout(() => {
                line.style.opacity = '1';
            }, 1500 * index);
        });
    }
});