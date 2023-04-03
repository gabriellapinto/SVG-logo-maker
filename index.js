const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("./lib/shapes");

const questions = inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Please enter three characters for your logo:',  
    },
    {
        type: 'input',
        name: 'text-color',
        message: 'What color would you like for the text?',  
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like your logo to be?',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shape-color',
        message: 'What color would you like for the shape?',  
    }
]) .then(response => writeToFile(response));

function writeToFile(response) {
    fs.writeFile("logo.svg", shapes(response), (err) => err ? console.log(err) : console.log("Generated logo.svg!"));
}