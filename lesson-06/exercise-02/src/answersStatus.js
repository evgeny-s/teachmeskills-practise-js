class AnswersStatus {
  constructor() {
    this.container = document.getElementById("answers-status");
  }

  render(data, index) {
    this.container.innerHTML = null;

    data.forEach((item, itemIndex) => {
      const element = document.createElement("span");
      element.style.border = '1px solid black';
      element.style.width = '15px';
      element.style.height = '15px';
      element.style.display = 'inline-block';
      if (itemIndex === index) {
        element.style.backgroundColor = 'black';
      }

      this.container.appendChild(element);
    });
  }
}

export default new AnswersStatus();