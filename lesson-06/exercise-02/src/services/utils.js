const _filterChecked = (correct) => {
  if (correct === undefined) {
    return;
  }

  let filtered = {};

  Object.keys(correct).forEach((key) => {
    if (correct[key] === true) {
      filtered[key] = correct[key];
    }
  });

  return filtered;
};

const calculateScore = (data, answers) => {
  let score = 0;
  data.forEach((dataItem, questionIndex) => {
    let correct = dataItem.correctAnswers;
    let filteredUserAnswers = _filterChecked(answers[questionIndex]);

    if (filteredUserAnswers === undefined) {
      return;
    }

    if (Object.keys(filteredUserAnswers).length !== correct.length) {
      return;
    }

    let isCorrect = true;
    correct.forEach((correctItem) => {
      if (filteredUserAnswers[correctItem] !== true) {
        isCorrect = false;
      }
    });

    if (isCorrect === true) {
      score++;
    }
  });

  return score;
};

export {
  calculateScore,
};