// Imports shapes.js file
const shapes = require("./shapes");
// Generates logo based off of user input by grabbing the shape class and adding user's choices
function generateLogo(data) {
    let logo = '';

    if (data.shape === "Circle") {
        logo = new shapes.Circle(data).render();
    } else if (data.shape === "Triangle") {
        logo = new shapes.Triangle(data).render();
    } else {
        logo = new shapes.Square(data).render();
    }
    // Returns the logo to be displayed
    return logo;
}
// Exports function to be used in index.js
module.exports = generateLogo;