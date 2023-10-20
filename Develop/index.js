// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message:"What is the title of your README?",
        name:"title",
    },
    {
        type:"confirm",
        message:"Do you want to include a table of contents?",
        name:"table",
    },
    {
        type:"input",
        message:"Provide a description of your application",
        name:"description",
    },
    {
        type:"input",
        message:"Provide all information regarding installing your application",
        name:"installation",
    },
    {
        type:"input",
        message:"Provide all information regarding usage of your application",
        name:"usage",
    },
    {
        type:"input",
        message:"Provide all contributers and collaborators for your application",
        name:"contributing",
    },
    {
        type:"input",
        message:"Provide information regarding testing the use of your application",
        name:"tests",
    },
    {
        type:"input",
        message:"Provide relevant contact info(GitHub, Email, LinkedIn)",
        name:"questions",
    },
    {
        type:"list",
        message:"Which License are you using?",
        name:"license",
        choices:["license1","license2","license3","license4"]
    }
];
//* add type, name, and message for each question
//* add questions:  added readme sections (description, usage, license, etc)
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
//* use FS module to write data and fileName to readme file
    fs.writeFile(fileName,data,(err)=>
        err ? console.error(err) : console.log(fileName,data));
    //     generateMarkdown.generateMarkdown(data)
    
}
// TODO: Create a function to initialize app
function init() {
    
    inquirer.prompt(questions).then((response)=>{
        writeToFile("README.md",generateMarkdown(response));
        // console.log(response);
    //     console.log(response.title);
    //     console.log(response.table);
    //     console.log(response.description);
    //     console.log(response.installation);
    //     console.log(response.usage);
    //     console.log(response.contributing);
    //     console.log(response.tests);
    //     console.log(response.questions);
    })
}
// Function call to initialize app
init();
//* use inquiter to display questios to user
//* call generateMarkdown funcoin on the data collected
//* take what is returned to us, then pass it to the writeToFile funciton