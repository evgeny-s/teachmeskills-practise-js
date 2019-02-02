class Navigation {
  constructor() {
    this.container = document.getElementById("navigation");
  }

  _renderBackButton(data, index, indexChangedHandler) {
    let backButton = document.createElement("button");
    backButton.innerText = "< Back";
    if (index === 0) {
      backButton.disabled = true;
    }
    backButton.addEventListener('click', () => {
      let nextIndex = index - 1;
      if (nextIndex < 0) {
        nextIndex = 0;
      }

      indexChangedHandler(nextIndex);
    });

    this.container.appendChild(backButton);
  }

  _renderNextButton(data, index, indexChangedHandler) {
    let nextButton = document.createElement("button");
    nextButton.innerText = "Next >";
    if (index >= data.length - 1) {
      return;
    }
    nextButton.addEventListener('click', () => {
      let nextIndex = index + 1;
      if (nextIndex > data.length) {
        nextIndex = index;
      }

      indexChangedHandler(nextIndex);
    });

    this.container.appendChild(nextButton);
  }

  render(data, index, indexChangedHandler) {
    this.container.innerHTML = null;

    this._renderBackButton(data, index, indexChangedHandler);
    this._renderNextButton(data, index, indexChangedHandler);
  }
}

export default new Navigation();