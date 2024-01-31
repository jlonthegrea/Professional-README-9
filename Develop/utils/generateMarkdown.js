const addABadge = licenseChoice => {
  if (licenseChoice == 'MIT License') {
    return`
    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]
    `;
  } else if (licenseChoice == 'GNU GPLv3') {
    return `
    [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]
    `;
  } else if (licenseChoice == 'Apache License') {
    return`
    [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]
    `;
} else {
  return `
  [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]
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

  I can be reach at${data.email} for any additional questions and/or concerns.

`;
}

module.exports = generateMarkdown;

