 # README Generator

  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributers](#contributers)
  * [Tests](#tests)
  * [Questions](#questions)
  

  ## License
    
  ODbl
  [![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)
  This README generator is made available under the Open Database License: http://opendatacommons.org/licenses/odbl/1.0/. Any rights in individual contents of the database are licensed under the Database Contents License: http://opendatacommons.org/licenses/dbcl/1.0/

    
  ## Description
    
  This application takes a series of user inputs and uses those inputs to print you a pre-formatted README.md file tailored to any application or project!
    
  ## Installation
  [Check Out A Video Installation Guide Here](https://youtu.be/0oNSuPMxyDc)

  Click the Fork button at the top of the GitHub repository and clone down to your device through an SSH link. Run the application by opening it and either in your command line interface or in an integrated terminal type in 'node index.js' and then answer the questions!
    
  ## Usage
  [Check Out A Video Usage Guide Here](https://youtu.be/r75OdXQXFMg)  
  
  Using the application is simple, answer the questions given to you in your terminal and let it do the rest of the work! After your README has been generated just copy and paste it into whichever repository it needs to go in!
    
  ## Contributers
    
  No Contributors or Collaborators were a part of this project.
    
  ## Tests
    
  All testing of this application was done using VSCode, Node.js, Javascript and Markdown

  ```
  function renderLicenseSection(license) {
return `${license.license}
${renderLicenseBadge(license)}
${renderLicenseLink(license)}
`
}
  ```
  This function here returns a string value with a formatted template literal, this will be called upon in our generateMarkdown function with the correct badge and license terms based on the users choice.
  ```
  function generateMarkdown(data) {
  
  return` # ${data.title}

  ${renderTOC(data)}

  ## License
    
  ${renderLicenseSection(data)}
    
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
`;
}
  ```
  And here we are calling upon all response data values and placing them into their correct position within another template literal.
  ```
  function init() {
    
    inquirer.prompt(questions).then((response)=>{
        writeToFile("README.md",generateMarkdown(response));
    })
}
  ```
  In this final code snippet you can see we are now taking our 'questions' and using the response given back from the user and writing it to a new README.md file that will inevitably take the place of this one!

  And if you were wondering, yes, I did make this markdown file with the generator itself, pretty cool stuff right?
  ## Questions

    For any questions please contact me using these contact links:

* Github: https://github.com/JackLCmore
* Email: jack.lcmore@gmail.com 
* LinkedIn: https://www.linkedin.com/in/jack-seymour-b0b2b0292/
