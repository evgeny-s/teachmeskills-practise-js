// Exercise 02
// 1. Create create new project via `npm init` command
// 2. Add required dependencies: `npm i webpack webpack-cli webpack-dev-server --save-dev`
// 3. Add `dev` script: `webpack-dev-server --mode development`
// 4. Create `src` folder for entry point
// 5. Create `index.js` file inside `src` folder
// 6. Create `index.html` file inside project root folder and include `main.js` script
// 7. Start build project with the following requirements:
// - Create simple Quiz application
// - It should have pre-defined questions - array
// - Answers can be of 2 types: checkbox and radio-buttons
// - Each question should appear one after another.
// - Show to the user the full current step
// - After user completed all steps - show his result.
// - Separate all functional blocks to the different modules/files.
// - Structure of the data:
// const data = [{
//   question: "Some question here",
//   multiple: true, // in case of true - it should be checkboxes, in case of false - it should be radio buttons
//   answers: [{
//     "title": "Answer 1",
//     "id": 1,
//   }, {
//     "title": "Answer 2",
//     "id": 2,
//   }, {
//     "title": "Answer 3",
//     "id": 3,
//   }],
//   correctAnswers: [1, 3]
// }];