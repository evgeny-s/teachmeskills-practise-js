class AnswersStatus {
  constructor() {
    this.container = document.getElementById("answers-status");
  }

  render(data, index) {
    this.container.innerHTML = null;

    data.forEach((item, itemIndex) => {
      const element = document.createElement("span");
      if (itemIndex === index) {
        element.className = 'active';
      }

      this.container.appendChild(element);
    });
  }
}

export default new AnswersStatus();