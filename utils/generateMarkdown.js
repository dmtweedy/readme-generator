// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license) {
    const licenseBadgeURL = `https://img.shields.io/badge/license-${license}-blue.svg`;
    return `[![License](${licenseBadgeURL})](https://opensource.org/licenses/${license})`;
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

// export the functions to render badge/link/section

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
};