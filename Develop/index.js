// TODO: Include packages needed for this application
import inquirer from 'inquirer'
import {generateMarkdown} from './utils/generateMarkdown.js'
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project about?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do I install the project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do i use the app?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How to contribute to the project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do i test the app?'
    },
];

inquirer.prompt (
    questions
)
.then(answers => {
    const markdownString = generateMarkdown(answers)
    console.log(markdownString)
})
.catch (err => {
    console.log(err)
})


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
