// Exercise 05: Write a JavaScript program that will return 1 if the array is sorted in ascending order, -1 if it is sorted in descending order or 0 if it is not sorted.

const isSorted = (arr) => {
  let directionChanged = false;
  let currentDirection = arr[0] - arr[1] > 0 ? 'desc' : 'asc';
  for (let i = 0; i < arr.length; i++) {
    let newDirection = arr[i] - arr[i + 1] > 0 ? 'desc' : 'asc';
    if (newDirection !== currentDirection) {
      directionChanged = true;
    }
    currentDirection = newDirection;

    if (i === arr.length - 2) {
      if (directionChanged === true) {
        return 0;
      }

      if (currentDirection === 'asc') {
        return 1;
      } else {
        return -1;
      }
    }
  }
};