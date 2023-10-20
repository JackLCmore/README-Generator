// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//*must have a couple license options
function renderLicenseBadge(license) {
  if(license.license === "license1"){
  return `  badge1`
  }
  else if(license.license === "license2"){
  return `  badge2`;
  }
  else if(license.license === "license3"){
  return `  badge3`;
  }
  else if(license.license === "license4"){
  return `  badge4`;
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license.license === "license1"){
  return `  license.link1`;
  }
  else if(license.license === "license2"){
  return `  license.link2`;
  }
  else if(license.license === "license3"){
  return `  license.link3`;
  }
  else if(license.license === "license4"){
  return `  license.link4`;
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
return `${license.license}
${renderLicenseBadge(license)}
${renderLicenseLink(license)}
`
}

function renderTOC(data){
  if(data.table === true){
    return`## Table of Contents
  
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributers](#contributers)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](license)
  `}
  else{
    return``;
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //* create layout of what you markdown readme with template literals
  //* hint - call renderlicense functions inside this function
  return` # ${data.title}

  ${renderTOC(data)}
    
  ## Description
    
  ${data.description}
    
  ## Installation
    
  ${data.installation}
    
  ## Usage
    
  ${data.usage}
    
  ## Contributers
    
  ${data.contributing}
    
  ## Tests
    
  ${data.tests}
    
  ## Questions
    
  ${data.questions}
    
  ## License
    
  ${renderLicenseSection(data)}
`;
}
module.exports = generateMarkdown;