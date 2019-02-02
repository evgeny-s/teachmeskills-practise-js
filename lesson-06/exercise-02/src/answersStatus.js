class AnswersStatus {
  constructor() {
    this.container = document.getElementById("answers-status");
  }

  _itemClickHandler(event, indexChangedHandler) {
    const index = event.target.id.split("answer-status-").filter(Boolean);
    indexChangedHandler(parseInt(index[0]));
  }

  render(data, index, indexChangedHandler) {
    this.container.innerHTML = null;

    data.forEach((item, itemIndex) => {
      const element = document.createElement("span");
      element.id = `answer-status-${itemIndex}`;
      element.addEventListener('click', (event) => this._itemClickHandler(event, indexChangedHandler));
      if (itemIndex === index) {
        element.className = 'active';
      }

      this.container.appendChild(element);
    });
  }
}

export default new AnswersStatus();