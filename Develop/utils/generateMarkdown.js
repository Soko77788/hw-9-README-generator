// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Mapping of licenses to their corresponding badge URLs
  const licenseBadges = {
      "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      "ISC": "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
      "Apache-2.0": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      "MPL 2.0": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
      "Boost": "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
      "Unlicense": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
      
  };

  // Return the badge or empty string
  return licenseBadges[license] || '';
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Mapping of licenses to their corresponding license URLs
  const licenseLinks = {
      "MIT": "https://opensource.org/licenses/MIT",
      "ISC": "https://opensource.org/licenses/ISC",
      "Apache-2.0": "https://opensource.org/licenses/Apache-2.0",
      "MPL 2.0": "https://opensource.org/licenses/MPL-2.0",
      "Boost": "https://www.boost.org/LICENSE_1_0.txt",
      "Unlicense": "http://unlicense.org/"
      
  };

  // Return the license link corresponding to the provided license
  return licenseLinks[license] || '';
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
  if (!license) {
      return '';
  }

  // Generate the license badge and link
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);

  // Construct the license section of the README
  const licenseSection = `

This project is licensed under the ${license} License. 
Click [here](${licenseLink}) for more details.

${licenseBadge}
`;

  return licenseSection;
}


// TODO: Create a function to generate markdown for README
export const generateMarkdown = ({title, github, email, license, description, installation, usage, contribution, tests}) => {
  return `# ${title} ${renderLicenseBadge(license)}

  ## Description
  * ${description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  * ${installation}
  
  ## Usage
  * ${usage}

  ## Contributing
  * ${contribution}
  
  ## Tests
  * ${tests}

  ## License
   ${renderLicenseSection(license)}
  
  ## Questions
  * Here is a link to my [GitHub](https://github.com/${github}) profile.
  * For further questions email me at [email](${email}).`
};

// module.exports = generateMarkdown;
