// Exercise 03: Write a JavaScript program to sort the characters of a string Alphabetically.

const sortAlph = str => [...str].sort((a, b) => a.localeCompare(b)).join('');