// Parent class for all shapes
class Shape {
    constructor(data) {
        this.text = data.text;
        this.textColor = data.textColor;
        this.shapeColor = data.shapeColor;
    }
    // Renders the text into a string to be used in child classes
    render() { 
        const shapeInfo = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
        const shapeText = `<text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
        return [shapeInfo, shapeText];
    } 
}

// Circle class that uses parent class info and adds circle data
class Circle extends Shape {
    constructor(data) {
        super(data);
    }
    // Renders all circle info and makes it one string
    render() {
        const shapeInfo = super.render();
        const shapeText = super.render();
        return shapeInfo + `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>` + shapeText + `</svg>`;
    }
}

// Triangle class that uses parent class info and adds triangle data
class Triangle extends Shape {
    constructor(data) {
        super(data);
    }
    // Renders all triangle info and makes it one string
    render() {
        const shapeInfo = super.render();
        const shapeText = super.render();
        return shapeInfo + `<polygon points="150, 18 282, 283 18, 283" fill="${this.shapeColor}"/>` + shapeText + `</svg>`;
    }
}

// Square class that uses parent class info and adds square data
class Square extends Shape {
    constructor(data) {
        super(data);
    }
    // Renders all square info and makes it one string
    render() {
        const shapeInfo = super.render();
        const shapeText = super.render();
        return shapeInfo + `<rect width="150" height="150" fill="${this.shapeColor}"/>` + shapeText + `</svg>`;
    }
}
// Exports classes to be used in generateLogo.js
module.exports = {Circle, Triangle, Square};