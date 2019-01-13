// Exercise 04: Write a JavaScript program to calculate how many numbers in the given array are less or equal to the given value in percents.

const calcNumbers = (arr, val) => {
  let newArray = [];
  arr.forEach((item) => {
    if (item <= val) {
      newArray.push(val);
    }
  });

  return newArray.length / arr.length * 100;
};