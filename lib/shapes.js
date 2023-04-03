class Shape {
    constructor(data) {
        this.text = data.text;
        this.textColor = data.textColor;
        this.shapeColor = data.shapeColor;

        const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}


class Circle extends Shape {
    render() {
        return svg + `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/></svg>`
    }
}

class Triangle extends Shape {
    render() {
        return svg + `<polygon points="150, 18 282, 283 18, 283" fill="${this.shapeColor}"/>`
    }
}

class Square extends Shape {
    render() {
        return svg + `<rect width="150" height="150" fill="${this.shapeColor}"/></svg>`
    }
}


// make a catch for input if more than 3 characters were entered


module.exports = {Circle, Triangle, Square};