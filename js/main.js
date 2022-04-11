const answer = document.querySelector("#answers");
const answerCorrect = document.querySelector("#answers-correct");

document.addEventListener("click", incorrectAnswer);
document.addEventListener("click", correctAnswer);

function incorrectAnswer() {
    document.answer.style.backgroundColor = "red";
}

function correctAnswer() {
    document.answerCorrect.style.backgroundColor = "green"
}