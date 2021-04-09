// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// const mrkDwnGenerator = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? ',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide description of your project: '
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What gave you the idea to create this project: '
    },
    {
        type: 'input',
        name: 'codeUsed',
        message: 'What coding languages did you use? (Seperate with commas)'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license was used for this README? ',
        choices: ['Unlicense', 'Apache License 2.0', 'GNU General Public License v3.0',
            'MIT License', 'BSD 2-Clause', 'BSD 3-Clause',
            'Boost Software License 1.0', 'ISC License', 'IBM Public License Version 1.0','Pearl License']
    },
    {
        type: 'list',
        name: 'color',
        message: 'What color would you like to make your license badge?',
        choices: ['brightgreen','green','yellowgreen','yellow','orange','red','blue','blueviolet']

    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide necessary information for usage of project! '
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What necessary dependencies must be installed to run this app? '
    },
    {
        type: 'input',
        name: 'contributor',
        message: 'Please advise on any contributions you have made: '
    },
    {
        type: 'input',
        name: 'test', 
        message: 'Please advise on your test opporations performed for your project: '
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'confirm',
        name: 'confirmAbout',
        message: 'Would you like to add mentions to your README? ',
        default: true
    },
    {
        type: 'input',
        name: 'mentions',
        message: 'Please provide mentions: ',
        when: ({confirmAbout}) => {
            if(confirmAbout) {
                return true;
                
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmImage',
        message: 'Would you like to add images to your README? ',
        default: true
    },
    {
        type: 'input',
        name: 'images',
        message: 'Please provide image link: ',
        when: ({confirmImage}) => {
            if (confirmImage) {
                return true;
            } else {
                return false;
            }
        }
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile('../' + fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log ('Successfully wrote: ' + fileName);
    })
 }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile('README.md', generateMarkdown(data));
        })
}

// Function call to initialize app
init();
