
// TODO: Create a function to generate markdown for README
const generateMarkdown = userInput => {
  return`
  ## License
  Licensed under the [${userInput.license}](/LICENSE) license.
`
}

// this exports the module to make it available for index.js
module.exports = generateMarkdown;