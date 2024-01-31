const addABadge = licenseChoice => {
  if (licenseChoice == 'MIT License') {
    return`
    
    `;
  } else if (licenseChoice == 'GNU GPLv3') {
    return `

    `;
  } else if (licenseChoice == 'Apache License') {
    return`
    
    `;
} else {
  return `
  
  `;
}
}

const checkLicense = licenseChoice => {
  if (licenseChoice == 'MIT License') {
    return`
  This application is covered by the MIT License.
    `;
  } else if (licenseChoice == 'GNU GPLv3') {
    return `
    This application is covered by the GNU GPLv3 License.
    `;
  } else if (licenseChoice == 'Apache License') {
    return`
    This application is covered by the Apache License.
    `;
} else {
  return `
  This application is covered by the Boost Software License 1.0.
  `;
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${addABadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Content
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Issue](#issue)
  * [Test](#test)
  * [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${checkLicense(data.license)}
  ## Contribution
  ${data.contribution}
  ## Issue
  ${data.issue}
  ## Test
  ${data.test}
  ## Questions 
  [Github Profile] (https://github.com/${data.userName}/)

`;
}

module.exports = generateMarkdown;


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
