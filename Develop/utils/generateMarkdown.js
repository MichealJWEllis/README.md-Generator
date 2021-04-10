// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, color) {
  if (!license) {
    return ''
  }
  return `# ![License: ${license}](https://img.shields.io/badge/license-${license}-${color}.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return ''
  }
  return `(https://opensource.org/licenses/${license})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ''
  }
  return `Link: ${renderLicenseLink(license)}

  THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS ${license} PUBLIC LICENSE (“AGREEMENT”). ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENT'S ACCEPTANCE OF THIS AGREEMENT.`

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, license, description, motivation, codeUsed, color, image } = data;

  return `
  # Project - ${title}
  
  ## Badge

  ${renderLicenseBadge(license, color)}

  ## Table of Contents

  * [Description](#description)
  
  * [Motivation](#motivation)

  * [Code Used](#code_used)

  * [Screenshot](#screenshot)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  ---

  ## Description

  ${description}

  ---

  ## Motivation

  ${motivation}

  ---

  ## Code_Used

  ${codeUsed}

  ---

  ## Screenshot

  ![${title}](${image})

  ## License
  
  ---

  ${renderLicenseSection(license)}

  ---
`;
}


module.exports = generateMarkdown;
