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

  THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS (${license}) PUBLIC LICENSE (“AGREEMENT”). ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENT'S ACCEPTANCE OF THIS AGREEMENT.`
}
// If there is no image provide, a return for placement
function screenshot(image, title) {
  if (!image) {
    return 'Screenshot not provided.'
  }
  return `![${title}](${image})`
}
// If there is no mentions provided, a return for placement
function mention(mentions) {
  if (!mentions) {
    return 'No mentions provided'
  }
  return `@${mentions}`
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, license, description, motivation, codeUsed, color, image, contributor, username, name, test, mentions, email } = data;
  return `
  # Project  ${title}
  
  ## Badge

  ${renderLicenseBadge(license, color)}

  ## Table of Contents

  * [Description](#description)
  
  * [Motivation](#motivation)

  * [Code Used](#code_used)

  * [Screenshot](#screenshot)

  * [License](#license)

  * [Contributed](#contributed)

  * [Tests](#tests)

  * [Questions](#questions)

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

  ${screenshot(image, title)}

  ---

  ## License

  ${renderLicenseSection(license)}

  ---

  ## Contributed:

  ${contributor}

  ---

  ## Tests: 

  ${test}

  ## Questions

  If you have any questions on this repo, please contact ${email}.

  ## GitHub

  * [GitHub Repository: ${username}](https://github.com/${username}/${title})

  * [GitHub:](https://github.com/${username})

  ## CONTRIBUTION:

  Made with ❤️ by ${name}

  ### Mentions: 

  ${mention(mentions)}

`;
}

module.exports = generateMarkdown;
