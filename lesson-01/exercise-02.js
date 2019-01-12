// Exercise 02: Write a JavaScript program to get removed elements of an given array until the passed function returns true.

const removeIfCondition = (arr, func) => {
  let newArray = [];
  arr.forEach((item) => {
    if (func(item) !== true) {
      newArray.push(item);
    }
  });

  return newArray;
};