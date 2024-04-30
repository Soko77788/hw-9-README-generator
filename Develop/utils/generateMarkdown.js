// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
export const generateMarkdown = ({title, description, installation, usage, contribution, tests}) => {
  return `# ${title}

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
  
  ## License
  * ${license}

  ## Contributing
  * ${contribution}
  
  ## Tests
  * ${tests}

  ## License
  * ${renderLicenseSection(license)}
  
  ## Questions
  * Here is a link to my [GitHub](https://github.com/${github}) profile.
  * For further questions email me at [email](${email}).`
};

// module.exports = generateMarkdown;
