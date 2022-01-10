const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown')


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
        name: "contributions",
        message: "Were there any addtionals contributions in this project?",

    },
    {
        type: "input",
        name: "tests",
        message: "Were there any issues with testing app",
        default: "N/A",
    },
    {
        type: "input",
        name: "video",
        message: "Were you able to show demonstration in video",
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

const askQuestions = () => {
    return inquirer.prompt(questions)
}

    askQuestions();

    // TODO: Create a function to write README file
    function writeToFile(fileName, data) {
        return fs.writeFileSync(fileName, generateMarkdown(data), (err) =>
            console.log(err)
        );
    }

    // module.exports = writeToFile;

    // TODO: Create a function to initialize app
    function init() {
        inquirer.prompt(questions).then(function (answers) {
            writeToFile("README.md", { ...answers });
        });
    }

    // Function call to initialize app
    init(); 