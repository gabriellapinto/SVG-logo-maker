const inquirer = require("inquirer");
const fs = require("fs");
const generateLogo = require("./lib/generateLogo");

const confirmLength = async (input) => {
    if (input.length > 3 || input.length < 1) {
        console.log(" ** Please enter a valid amount of characters! **");
    } else {
        return true;
    }
}

const questions = inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Please enter text for your logo (Up to 3 characters):',
        validate: confirmLength,
    
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like for the text?',  
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like your logo to be?',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like for the shape?',  
    }
]) .then(response => writeToFile(response));

function writeToFile(response) {
    fs.writeFile("logo.svg", generateLogo(response), (err) => err ? console.log(err) : console.log("Generated logo.svg!"));
}
