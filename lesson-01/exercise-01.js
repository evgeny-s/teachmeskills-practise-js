// Exercise 01: Write a JavaScript program to convert a given string into an array of words.

const stringToArray = (str) => str.split(/[^a-zA-Z-]+/).filter(Boolean);