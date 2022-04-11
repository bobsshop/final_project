document.addEventListener("click", incorrectAnswer);
document.addEventListener("click", correctAnswer);

function incorrectAnswer() {
    document.getElementById("incorrect").style.backgroundColor = "red";
}

function correctAnswer() {
    document.getElementById("correct-answer").style.backgroundColor = "green";
}