// External packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


// Internal modules
const generateMarkdown = require('./src/utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
// title, description, Table of Contents, Installation, Usage, 
// License, Contributing, Tests, and Questions.
inquirer 
    .prompt([
{
    type: "input",
    message: "Enter the Project Title: ",
    name: "title",
},
{
    type: "input",
    message: "Please enter the Description of the Project",
    name: "description",
},
{
    type: "list",
    message: "What is your preferred communication type:",
    name: "communication",
    choices: ["eMail","Chat","Telephone","SMS Text"]
},
]).then((data) => {
    // README.md is the name of all files
    const filename = 'generatedREADME.md';
    fs.writeFile(filename, generateMarkdown(data), (err) => 
        err ? console.log(err) : console.log('Completed writing to file')
    
    );
});



// TODO: Create a function to write to the README.md file
// function writeToFile(filename, data) {


// Function call to initialize app
function init(){
    // Prompt Inquirer questions instead of switchs
    // const userInput = inquirer.prompt(questions);
    // console.log("Your input: ", userInput);
    // console.log("Please review you information!");
    // const markdown = generateMarkdown(userInput);
    // console.log(markdown);

    // // all filed hould be README.md
    // writeToFile('README.md', markdown);
};
    
init();
