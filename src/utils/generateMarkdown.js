
// TODO: Create a function to generate markdown for README
const generateMarkdown = userInput => {
  return`
  
  ## ${userInput.title}
  ![license](https://img.shields.io/github/license/${userInput.github_username}/${userInput.title}?color=green&style=for-the-badge)
  ## ${userInput.description}
  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Questions](#questions)
  - [Tests](#tests)
  - [License](#license)
  ## Installation
  ## Usage
  ## Contributing
  ## Questions
  ## Tests
  ## License
  Licensed under the [${userInput.license}](/LICENSE) license.
`
}

// this exports the module to make it available for index.js
module.exports = generateMarkdown;