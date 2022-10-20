const inquirer = require("inquirer");
const fs = require("fs");

inquirer
.prompt([
    {
        type: "input",
        message: "What is your name?",
        name: "userName"
    },
    {
        type: "input",
        message: "Where do you live?",
        name: "userLocation"
    },
    {
        type: "input",
        message: "How old are you?",
        name: "userAge"
    },
    {
        type: "input",
        message: "What is your LinkedIn profile link?",
        name: "userLinkedin"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "userGithub"
    }
])
.then((userInput) => {
    console.log(userInput);

});