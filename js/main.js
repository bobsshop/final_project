const incorrect1 = document.getElementById("incorrect1")
const incorrect2 = document.getElementById("incorrect2")
const incorrect3 = document.getElementById("incorrect3")
const correct = document.getElementById("correct-answer")

incorrect1.addEventListener("click", incorrectAnswer1);
incorrect2.addEventListener("click", incorrectAnswer2);
incorrect3.addEventListener("click", incorrectAnswer3);
correct.addEventListener("click", correctAnswer);

function incorrectAnswer1() {
    incorrect1.style.backgroundColor = "red";
}

function incorrectAnswer2() {
    incorrect2.style.backgroundColor = "red";
}

function incorrectAnswer3() {
    incorrect3.style.backgroundColor = "red";
}

function correctAnswer() {
    correct.style.backgroundColor = "green";
}