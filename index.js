// External packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


// Internal modules
// This creates the readme html structure template
const generateMarkdown = require('./src/utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
// title, description, Table of Contents, Installation, Usage, 
// License, Contributing, Tests, and Questions.
inquirer 
    .prompt([
{
    type: "input",
    message: "Enter the GitHub Project Title: ",
    name: "title",
},
{
    type: "input",
    message: "Please enter the Description of the Project",
    name: "description",
},
{
    type: "list",
    message: "What kind of license would you like to use? If you are not sure, don't worry you can update it later. For more information on each type go here https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository:",
    name: "license",
    choices: ["None","afl-3.0","apache-2.0","artistic-2.0","bsl-1.0","bsd-2-clause","bsd-3-clause","bsd-3-clause-clear","cc","cc0-1.0","cc-by-4.0","cc-by-sa-4.0","wtfpl","ecl-2.0","epl-1.0","epl-2.0","eupl-1.1","agpl-3.0","gpl","gpl-2.0","gpl-3.0","lgpl","lgpl-2.1","lgpl-3.0","isc","lppl-1.3c","ms-pl","mit","mpl-2.0","osl-3.0","postgresql","ofl-1.1","ncsa","unlicense","zlib"]
},
]).then((data) => {
    // README.md is the name of all files
    const filename = 'generatedREADME.md';
    fs.writeFile(filename, generateMarkdown(data), (err) => 
        err ? console.log(err) : console.log('Completed writing to file')
    );
});

// Function call to initialize app
function init(){
};
    
init();
