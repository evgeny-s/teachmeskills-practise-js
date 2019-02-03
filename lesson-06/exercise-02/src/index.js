import navigation from "./navigation";
import questions from "./questions";
import answersStatus from "./answersStatus";

import data from "./data";
import {calculateScore} from "./services/utils";

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
    let score = calculateScore(data, this.userAnswers);
    if (confirm(`Your score is: ${score}. Do you want to start from scratch?`)) {
      window.location.reload();
    }
  }

  _renderSubmitButton(data) {
    if (this.currentIndex === data.length - 1) {
      let submitButtonEl = document.createElement("button");
      submitButtonEl.id = "submit-button";
      submitButtonEl.innerText = "Submit!";
      submitButtonEl.addEventListener('click', this._onSubmitHandler.bind(this));

      let navContainer = document.getElementById("navigation");
      navContainer.appendChild(submitButtonEl);
    }
  }

  _renderItems() {
    this.navigation.render(data, this.currentIndex, this.indexChanged.bind(this));
    this.answersStatus.render(data, this.currentIndex, this.indexChanged.bind(this));
    this.questions.render(data[this.currentIndex], this.userAnswers[this.currentIndex], this.onAnswerChange.bind(this));
    this._renderSubmitButton(data);
  }

  run() {
    this._renderItems();
  }
}

const app = new App();
app.run();