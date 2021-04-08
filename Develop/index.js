// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const MrkDwnGenerator = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter title for project')
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'Description',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
