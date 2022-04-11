document.addEventListener("click", incorrectAnswer);
document.addEventListener("click", correctAnswer);

function incorrectAnswer() {
    document.querySelector("#answers").style.backgroundColor = "red";
}

function correctAnswer() {
    document.querySelector("#answers-correct").style.backgroundColor = "green";
}