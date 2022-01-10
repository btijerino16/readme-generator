const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown =require('./Develop/utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your project title?",
      },
      {
        type: "input",
        name: "description",
        message: "Provide a description for the project.",
      },
      {
        type: "input",
        name: "installation",
        message: "Please provide installation information",
      },
      {
        type: "input",
        name: "usage",
        message: "Please provide usages of your project",
      },
      {
        type: "input",
        name: "contribution",
        message: "Were there any additional contributions to help this project?",
        
      },
      {
        type: "input",
        name: "test",
        message: "Were there any issues with testing app",
        default: "N/A",
      },
      {
        type: "input",
        name: "video",
        message: "Enter the path for the usage video of your project",
      },
      {
        type: "input",
        name: "github",
        message: "Enter your github username: ",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the email address for this project: ",
      },
      {
        type: "list",
        name: "license",
        message: "Enter the license for your project: ",
        choices: [
          "Artistic",
          "Creative Commons",
          "GNU GPLv3",
          "MIT",
          "Mozilla",
          "none",
        ],
      },

   
];

const askQuestions =() => {
return inquirer.prompt (questions)

}

askQuestions();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

