const shapes = require("./shapes");

function generateLogo(data) {
    let logo = '';

    if (data.shape === "Circle") {
        logo = new shapes.Circle(data).render();
    } else if (data.shape === "Triangle") {
        logo = new shapes.Triangle(data).render();
    } else {
        logo = new shapes.Square(data).render();
    }

    return logo;
}

module.exports = generateLogo;