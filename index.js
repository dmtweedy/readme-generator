// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
} = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

// messages for the user to answer to

const questions = [
  "Enter your GitHub username:",
  "Enter your email address:",
  "Enter your project title:", 
  "Enter a description of your project:", 
  "Enter the installation instructions for your project:", 
  "Enter the usage information for your project:", 
  "Enter the contribution guidelines for your project:", 
  "Enter the test instructions for your project:",
  "Please select the license you would like to use:",
  "Enter instructions on how to contact you for additional information:"
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README file generated successfully!');
    }
  });
}

// TODO: Create a function to initialize app

// different input prompts for the user based on message

function init() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'username',
      message: questions[0],
    },
    {
      type: 'input',
      name: 'email',
      message: questions[1],
    },
    {
      type: 'input',
      name: 'title',
      message: questions[2],
    },
    {
      type: 'input',
      name: 'description',
      message: questions[3],
    },
    {
      type: 'input',
      name: 'installation',
      message: questions[4],
    },
    {
      type: 'input',
      name: 'usage',
      message: questions[5],
    },
    {
      type: 'input',
      name: 'contributing',
      message: questions[6],
    },
    {
      type: 'input',
      name: 'tests',
      message: questions[7],
    },
    {
      type: 'list',
      name: 'license',
      message: questions[8],
      choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'ISC', 'None'],
    },
    {
      type: 'input',
      name: 'contact',
      message: questions[9],
    },
  ])
  .then((answers) => {

    const licenseBadge = renderLicenseBadge(answers.license);
    const licenseLink = renderLicenseLink(answers.license);
    const licenseSection = renderLicenseSection(answers.license);
    const readmeTemplate = 

// readme template to generate

`# ${answers.title}

${licenseBadge}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${licenseLink ? `- [License](#license)\n` : ''}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

${licenseSection}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
You can reach me with additional questions here.\n
GitHub: ${answers.username}\n
Email: ${answers.email}\n
${answers.contact}
`;

// write to my sample.md file

    writeToFile('./output/sample.md', readmeTemplate);
  })
  .catch((error) => {
    console.error(error);
  });
}

// Function call to initialize app
init();

