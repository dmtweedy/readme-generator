// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license) {
    return `[![License](license_badge_url)](https://opensource.org/licenses/${license})`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license) {
    return `[License](https://opensource.org/licenses/${license})`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is covered under the ${license} License. See [License](https://opensource.org/licenses/${license}) for more information.
`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${licenseSection ? '- [License](#license)\n' : ''}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${licenseSection}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
My GitHub username: ${data.username}
My email address: ${data.email}
${data.contact ? `${data.contact}\n` : ''}
`;
}

module.exports = generateMarkdown;
