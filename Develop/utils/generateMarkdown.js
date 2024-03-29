// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license !== "none") {
    return `![license](https://img.shields.io/badge/LICENSE-${license}.svg)`
  }

  return "";
}


  function renderLicenseLink(license) {
    if (license !== 'none') {
      return `*[License](#'MIT': '[MIT License](https://choosealicense.com/licenses/mit/)',)`
    } return '';
    
  
   }

function renderLicenseSection(license) {

  if(license !== 'None'){
    return `## License
  The license for this project is ${license}.`;
  }
  return '';
 }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description 
  ${data.name}

  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [Video](#video)
  * [Contributions](#contributions)
  * [Test](#test)
  ${renderLicenseLink(data.license)}
  * [Github](#github)

  ## Installation 

  ${data.installation}


## Usage
 ${data.usage}

 ## Video
 ${data.video}


 ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ${renderLicenseSection(data.license)}

## Github
${data.github}

`;
}

module.exports = generateMarkdown;
