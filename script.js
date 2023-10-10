let questions = [
  {
    question: "Wie heißt die Hauptstadt von Bulgarien?",
    answer_1: "Varna",
    answer_2: "Burgas",
    answer_3: "Sofia",
    answer_4: "Plovdiv",
    right_answer: 3,
  },

  {
    question: "Welcher Fluss mündet ins Schwarze Meer?",
    answer_1: "Nil",
    answer_2: "Donau",
    answer_3: "Wolga",
    answer_4: "Rhein",
    right_answer: 2,
  },

  {
    question: "Wie heißt der höchste Berg in Österreich?",
    answer_1: "Grossglockner",
    answer_2: "Grossvenediger",
    answer_3: "Mount Everest",
    answer_4: "Mount Blanc",
    right_answer: 1,
  },

  {
    question: "Welche Weltstadt hat die meisten Einwohner?",
    answer_1: "Delhi",
    answer_2: "Schanghai",
    answer_3: "London",
    answer_4: "Tokio",
    right_answer: 4,
  },
];

let question_index = 0;
let rightquestion = 0;
let audio_success = new Audio("audio/success.mp3");
let audio_fail = new Audio("audio/fail.mp3");

function renderCard() {
  let contentright = document.getElementById("content-right");
  contentright.innerHTML = "";
  contentright.innerHTML += /*html*/ `
  <div id="card"class="card border border-0 bg-color mt-5">
    <div id="card-body"class="card-body">
      <p class="card-text">${questions[question_index]["question"]}</p>
    </div>
    <div id="answer_1"onclick="answer('answer_1')"class="card  answer-card mb-3 border border-0 mt-3">
      
  <div class="card-body card-position">
  <div class="abcd bg-primary">A</div>
    <span class="ms-5">${questions[question_index]["answer_1"]}</span>
  </div>
</div>
<div id="answer_2" onclick="answer('answer_2')"class="card answer-card  mb-3 border border-0">

  <div class="card-body card-position">
  <div class="abcd bg-primary">B</div>
    <span class="ms-5">${questions[question_index]["answer_2"]}</span>
  </div>
</div>
<div id="answer_3"onclick="answer('answer_3')"class="card  answer-card mb-3 border border-0">

  <div class="card-body card-position">
  <div class="abcd bg-primary">C</div>
    <span class="ms-5">${questions[question_index]["answer_3"]}</span>
  </div>
</div>
<div id="answer_4"onclick="answer('answer_4')" class="card answer-card mb-3 border border-0">

  <div class="card-body card-position">
  <div class="abcd bg-primary">D</div>
    <span class="ms-5">${questions[question_index]["answer_4"]}</span>
  </div>
</div>
  </div>
  
  <div id="question-footer"class="question-footer">
    <div class="question-number">
    <b id="question-number">1</b> von <b id="all-questions"></b> Fragen
</div>
    <button id="next-button"disabled type="button" onclick="showNextQuestion()"class="btn btn-primary btn-lg ">Nächste Frage</button>
</div>

    `;

  document.getElementById("all-questions").innerHTML = questions.length;
}


function showNextQuestion() {
  if (gameIsOver()) {
    showEndScreen();
   
  } else {
    updateToNextQuestion();
  
  }
}


function showEndScreen(){
  document.getElementById("content-right").innerHTML = "";
  document.getElementById("content-right").classList.add("content-right-bg-d-none");
  document.getElementById("content-right").innerHTML += /*html*/ `
   <div class="endscreen">
    <img class="brain-result"src="./img/brain result.png">
    <p class="font-endscreen-text">Quit beendet!</p>
    <p class="font-endscreen-text">Dein Ergebnis  <b id="amount-of-right-questions"></b>/<b id="amount-of-questions"></b></p>
    <button class="btn btn-primary btn-width font-endscreen-button" >Quiz teilen</button>
    <button onclick="restart()"class="btn btn-primary mt-2 btn-width font-endscreen-button">Quiz wiederholen</button>
   </div>`;
  document.getElementById("amount-of-questions").innerHTML = questions.length;
  document.getElementById("amount-of-right-questions").innerHTML = rightquestion;
}


function updateToNextQuestion(){
  renderCard(question_index++);
  document.getElementById("question-number").innerHTML = question_index + 1;
}


function gameIsOver(){
  return question_index >= questions.length - 1;
}



function answer(selection) {
  let question = questions[question_index];
  let selectedQuestionNumber = selection.slice(-1);
  let idOfRightAnswer = `answer_${question["right_answer"]}`;
  
  if (rightAnswerSelected(selectedQuestionNumber)) {
    document.getElementById(selection).classList.add("bg-success");
    rightquestion++;
    audio_success.play();
    updateProgressBar();
   
  } else {
    document.getElementById(selection).classList.add("bg-danger");
    document.getElementById(idOfRightAnswer).classList.add("bg-success");
    audio_fail.play();
    updateProgressBar();
  }
  document.getElementById("next-button").disabled = false;
}


function rightAnswerSelected(selectedQuestionNumber){
  let question = questions[question_index];
  return selectedQuestionNumber == question["right_answer"];
}


function updateProgressBar(){
  let percent = (question_index + 1) / questions.length;
  document.getElementById("insert-progress-bar").innerHTML = /*html*/ `
    <div class="progress">
      <div id="progress-bar"class="progress-bar " role="progressbar" style="width: 0%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">0%</div>
    </div>`;
  percent = Math.round(percent * 100);
  document.getElementById("progress-bar").innerHTML = `${percent} %`;
  document.getElementById("progress-bar").style = `width: ${percent}%;`;
}


function restart() {
  document.getElementById("insert-progress-bar").innerHTML = "";
  question_index = 0;
  rightquestion = 0;
  renderCard();
}


function showMenu() {
  document.getElementById("content-right").classList.add("d-none");
  document.getElementById("menu").classList.add("show-overlay-menu");
}


function closeMenu() {
  document.getElementById("menu").classList.remove("show-overlay-menu");
  document.getElementById("content-right").classList.remove("d-none");
}
