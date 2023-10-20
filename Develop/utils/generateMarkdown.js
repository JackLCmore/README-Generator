// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//*must have a couple license options
function renderLicenseBadge(license) {
  if(license.license === "license1"){
  return `${license.license}`;
  }
  else if(license.license === "license2"){
  return `${license.license}`;
  }
  else if(license.license === "license3"){
  return `${license.license}`;
  }
  else if(license.license === "license4"){
  return `${license.license}`;
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license.license === "license1"){
  return `license.link1`;
  }
  else if(license.license === "license2"){
  return `license.link2`;
  }
  else if(license.license === "license3"){
  return `license.link3`;
  }
  else if(license.license === "license4"){
  return `license.link4`;
  }
//* return a string that has the link to selected license
// const linkOptions = [
//   {
//     type:"list",
//     message:"Which License are you using?",
//     name:"license",
//     options:["license1","license2","license3","license4"],
//   }
// ] 
// inquirer.prompt(linkOptions).then((response)=>{
//   fs.appendFile("README.md",response)
// })
// return `${response}`;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
return `## ${license.license}
           ${renderLicenseBadge(license)}
           ${renderLicenseLink(license)}    
`
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //* create layout of what you markdown readme with template literals
  //* hint - call renderlicense functions inside this function
  return `# ${data.title}

  ## ${data.table}
  
  ## ${data.description}
  
  ## ${data.installation}
  
  ## ${data.usage}
  
  ## ${data.contributing}
  
  ## ${data.tests}
  
  ## ${data.questions}

  ${renderLicenseSection(data)}
`;
}
module.exports = generateMarkdown;