// importing node packages and the generateLogo JavaScript file
const inquirer = require("inquirer");
const fs = require("fs");
const generateLogo = require("./lib/generateLogo");

// Checks user input for the text to make sure they enter the correct amount of characters
const confirmLength = async (input) => {
    if (input.length > 3 || input.length < 1) {
        console.log(" ** Please enter a valid amount of characters! **");
    } else {
        return true;
    }
}

// Array of questions that displays after user starts program
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

// Writes the logo.svg file using the generateLogo function as well as catches any errors throughout the program
function writeToFile(response) {
    fs.writeFile("logo.svg", generateLogo(response), (err) => err ? console.log(err) : console.log("Generated logo.svg!"));
}
