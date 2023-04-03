class Shape {
    
}


class Circle extends Shape {

}

class Triangle extends Shape {

}

class Square extends Shape {

}


// make a catch for input if more than 3 characters were entered
// make classes for each shape



function generateLogo(data) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.text-color}">${data.text}</text>
    </svg>`
}