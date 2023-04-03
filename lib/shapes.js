class Shape {
    constructor(data) {
        this.text = data.text;
        this.textColor = data.textColor;
        this.shapeColor = data.shapeColor;
    }

    render() { 
        const shapeInfo = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
        const shapeText = `<text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
        return [shapeInfo, shapeText];
    } 
}


class Circle extends Shape {
    constructor(data) {
        super(data);
    }

    render() {
        const shapeInfo = super.render();
        const shapeText = super.render();
        return shapeInfo + `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>` + shapeText + `</svg>`;
    }
}

class Triangle extends Shape {
    constructor(data) {
        super(data);
    }
    
    render() {
        const shapeInfo = super.render();
        const shapeText = super.render();
        return shapeInfo + `<polygon points="150, 18 282, 283 18, 283" fill="${this.shapeColor}"/>` + shapeText + `</svg>`;
    }
}

class Square extends Shape {
    constructor(data) {
        super(data);
    }
    
    render() {
        const shapeInfo = super.render();
        const shapeText = super.render();
        return shapeInfo + `<rect width="150" height="150" fill="${this.shapeColor}"/>` + shapeText + `</svg>`;
    }
}

module.exports = {Circle, Triangle, Square};