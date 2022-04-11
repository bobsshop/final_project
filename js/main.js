const question = document.querySelector("#fill-in-questions-container");
const answersList = document.getElementById("answers");

question.addEventListener("submit", answerEntry);

function answerEntry(event) {
    event.preventDefault();

    answersList.innerHTML = "";


}
