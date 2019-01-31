class Questions {
  constructor() {
    this.container = document.getElementById("questions");
  }

  _onControlChangeHandler(onChangeCallback) {
    let answers = {};
    document.querySelectorAll("#answers-wrapper input").forEach((el) => {
      answers[el.id.split("answer-control-").filter(Boolean)] = el.checked;
    });

    onChangeCallback(answers);
  }

  render(dataItem, multiple, onChangeCallback) {
    this.container.innerHTML = null;

    let wrapperEl = document.createElement("div");
    let questionEl = document.createElement("div");
    questionEl.innerText = dataItem.question;

    let answersWrapper = document.createElement("div");
    answersWrapper.id = "answers-wrapper";
    dataItem.answers.forEach((answer) => {
      let answerControlEl = document.createElement("input");
      answerControlEl.type = multiple ? "checkbox" : "radio";
      answerControlEl.name = "options";
      answerControlEl.id = `answer-control-${answer.id}`;
      answerControlEl.addEventListener('change', this._onControlChangeHandler.bind(this, onChangeCallback));

      let answerEl = document.createElement("div");
      answerEl.innerText = answer.title;
      answersWrapper.appendChild(answerControlEl);
      answersWrapper.appendChild(answerEl);
    });

    wrapperEl.appendChild(questionEl);
    wrapperEl.appendChild(answersWrapper);

    this.container.appendChild(wrapperEl);
  }
}

export default new Questions();