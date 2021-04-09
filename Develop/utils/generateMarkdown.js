// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // return `# ![License: ${data.license}](https://img.shields.io/badge/license-${data.license}-${data.color}.svg)`
} 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `
  # ${data.title}
  * ![License: ${data.license}](https://img.shields.io/badge/license-${data.license}-${data.color}.svg)

  ## Description

  ${data.description}

  ## Motivation

  ${data.motivation}

  ## Code Used

  ${data.codeUsed}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)
`;
}


module.exports = generateMarkdown;
