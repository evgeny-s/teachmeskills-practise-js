import navigation from "./navigation";
import questions from "./questions";
import answersStatus from "./answersStatus";

const data = [{
  question: "What technology is the most popular in 2019?",
  multiple: false,
  answers: [{
    "title": "Javascript",
    "id": 1,
  }, {
    "title": "C++",
    "id": 2,
  }, {
    "title": "GoLang",
    "id": 3,
  }],
  correctAnswers: [1]
}, {
  question: "What are backend technologies?",
  multiple: true,
  answers: [{
    "title": "PHP",
    "id": 1,
  }, {
    "title": "Javascript",
    "id": 2,
  }, {
    "title": "GoLang",
    "id": 3,
  }],
  correctAnswers: [2, 3]
}];

class App {
  constructor() {
    this.currentIndex = 0;
    this.navigation = navigation;
    this.questions = questions;
    this.answersStatus = answersStatus;
    this.userAnswers = {};
  }

  indexChanged(value) {
    this.currentIndex = value;

    this._renderItems();
  }

  onAnswerChange(state) {
    this.userAnswers[this.currentIndex] = state;
  }

  _onSubmitHandler() {
    console.log("User's ansewers: ", this.userAnswers);
  }

  _renderSubmitButton(data) {
    if (this.currentIndex === data.length - 1) {
      let submitButtonEl = document.createElement("button");
      submitButtonEl.innerText = "Submit!";
      submitButtonEl.addEventListener('click', this._onSubmitHandler.bind(this));

      let navContainer = document.getElementById("navigation");
      navContainer.appendChild(submitButtonEl);
    }
  }

  _renderItems() {
    this.navigation.render(data, this.currentIndex, this.indexChanged.bind(this));
    this.answersStatus.render(data, this.currentIndex);
    this.questions.render(data[this.currentIndex], data[this.currentIndex].multiple, this.onAnswerChange.bind(this));
    this._renderSubmitButton(data);
  }

  run() {
    this._renderItems();
  }
}

const app = new App();
app.run();