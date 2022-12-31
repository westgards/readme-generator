
// TODO: Create a function to generate markdown for README
const generateMarkdown = userInput => {
  return`
  
  ## **${userInput.title}**
  ![license](https://img.shields.io/github/license/${userInput.github_username}/${userInput.title}?color=green&style=for-the-badge)
  ## _${userInput.description}_
  ## **Table of Contents**

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Questions](#questions)
  - [Tests](#tests)
  - [License](#license)
  ## **Installation**

  ${userInput.installation}

  ## **Usage**

  ${userInput.usage}

  ## **Contributing**
  To contribute to the ${userInput.title} project, please see information below:
  ${userInput.contributing}

  ## **Questions**
  Further questions or comments can be directed to the email contact below:
  ${userInput.questions}

  ## **Tests**

  ${userInput.tests}

  ## **License**
  Licensed under the [${userInput.license}](/LICENSE) license.
`
}

// this exports the module to make it available for index.js
module.exports = generateMarkdown;