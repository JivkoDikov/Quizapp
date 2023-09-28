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

let i = 0;

function renderCard() {
  let contentright = document.getElementById("content-right");
  contentright.innerHTML = "";
  contentright.innerHTML += /*html*/ `<div id="card"class="card border border-0 bg-color">
    <div class="card-body">
      <p class="card-text">${questions[i]["question"]}</p>
    </div>
    <div onclick="answer('answer_1')"class="card  answer-card mb-2 border border-0">
      
  <div class="card-body card-position">
  <div class="abcd bg-primary">A</div>
    <span class="ms-5">${questions[i]["answer_1"]}</span>
  </div>
</div>
<div onclick="answer('answer_2')"class="card answer-card  mb-2 border border-0">

  <div class="card-body card-position">
  <div class="abcd bg-primary">B</div>
    <span class="ms-5">${questions[i]["answer_2"]}</span>
  </div>
</div>
<div onclick="answer('answer_3')"class="card  answer-card mb-2 border border-0">

  <div class="card-body card-position">
  <div class="abcd bg-primary">C</div>
    <span class="ms-5">${questions[i]["answer_3"]}</span>
  </div>
</div>
<div onclick="answer('answer_4')" class="card answer-card  border border-0">

  <div class="card-body card-position">
  <div class="abcd bg-primary">D</div>
    <span class="ms-5">${questions[i]["answer_4"]}</span>
  </div>
</div>
  </div>
  <div class="question-footer">
    <b>1</b> von <b id="all-questions"></b> Fragen
    <button type="button" onclick="showNextQuestion()"class="btn btn-primary btn-lg btn-pos">Nächste Frage</button>
</div> 

    `;
    document.getElementById('all-questions').innerHTML = questions.length;
}

function showNextQuestion() {
  document.getElementById("card").innerHTML = "";
  renderCard(i++);
  
}

function answer(selection) {
  let question = questions[i];
  let selectedQuestionNumber = selection.slice(-1);
  

  if (selectedQuestionNumber == question['right_answer']) {
    console.log('Richtige Antwort');
  } else {
    console.log('Falsche Antwort');
  }
}
