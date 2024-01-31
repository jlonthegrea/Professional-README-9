// TODO: Include packages needed for this application

const generateMyReadMe = require ("./utils/generateMarkdown");
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'Enter the project title: (REQUIRED)',
    validate: titleInput => {
        if(titleInput) {
            return true;
        }else {
            console.log('Please enter a project title!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'description',
    message: 'Enter the project description. What is its purpose?: (REQUIRED)',
    validate: descriptionInput => {
        if(descriptionInput) {
            return true;
        }else {
            console.log('Please enter the project description!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'installation',
    message: 'Enter the project installation instructions: (REQUIRED)',
    validate: installationInput => {
        if(installationInput) {
            return true;
        }else {
            console.log('Please enter the project installation instructions!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'usage',
    message: 'Enter the usage information: (REQUIRED)',
    validate: usageInput => {
        if(usageInput) {
            return true;
        }else {
            console.log('Please enter the project usage information!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'contribution',
    message: 'Enter the constribution guidelines/intructions: (REQUIRED)',
    validate: constributionInput => {
        if(constributionInput) {
            return true;
        }else {
            console.log('Please enter project contribution guidelines/intructions!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'issue',
    message: 'Enter the steps to reporting issues: (REQUIRED)',
    validate: issueInput => {
        if(issueInput) {
            return true;
        }else {
            console.log('Please enter the steps to reporting issues!');
            return false;
        }
    }
},
{
    type: 'list',
    name: 'license',
    message: 'Please select a license:',
    choices: ['MIT License', 'GNU GPLv3', 'Apache License', 'Boost Software License 1.0'],
},
{
    type: 'input',
    name: 'test',
    message: 'Enter the test intructions: (REQUIRED)',
    validate: testInput => {
        if(testInput) {
            return true;
        }else {
            console.log('Please enter the test instructions!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'userName',
    message: 'Enter the GitHub username: (REQUIRED)',
    validate: userNameInput => {
        if(userNameInput) {
            return true;
        }else {
            console.log('Please enter a GitHub username!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'Enter your email adress: (REQUIRED)',
    validate: emailInput => {
        if(emailInput) {
            return true;
        }else {
            console.log('Please enter an email adress!');
            return false;
        }
    }
},
];

const promptUser = () => {
    return inquirer.prompt(questions);
}

// // TODO: Create a function to write README file
function writeToFile(data) {
   return new Promise((resolve, reject) => {
    fs.writeFile('README.md', data, err => {
        if(err) {
            reject(err);
            return;
        }
        resolve({
            ok: true, 
            message:'Successfully creates README!'
        })
    })
   })
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then(questions => {
        return generateMyReadMe(questions);
    })
    .then(formattedPage => {
        return writeToFile(formattedPage);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
}

// Function call to initialize app
init();
