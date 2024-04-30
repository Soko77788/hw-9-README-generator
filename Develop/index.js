// TODO: Include packages needed for this application
import inquirer from 'inquirer'
import {generateMarkdown} from './utils/generateMarkdown.js'
import fs from "fs"
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: (input) => input.toLowerCase().includes("@"),
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
    {
        type: 'list',
        name: 'license',
        message: 'Choose the license you used.',
        choices: ['MIT', 'ISC', 'Apache-2.0', 'MPL 2.0', 'Boost', 'Unlicense', ]
    },
];




// TODO: Create a function to write README file
    const writeToFile = (content) => {
    fs.writeFile('./readme.md', content, (err) => {
        if (err) throw err
        console.log('readme.md file created!')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions)
.then(answers => {
    const markdownString = generateMarkdown(answers)
    writeToFile(markdownString)
})
.catch (err => {
    console.log(err)
})}

// Function call to initialize app
init();
