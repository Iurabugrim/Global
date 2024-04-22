function addOrSubtract(a, b, operation) {
    if (operation === "add") {
        return a + b;
    } else if (operation === "subtract") {
        return a - b;
    } else {
        return "Invalid operation";
    }
}

const stringLength = function(str) {
    if (str.length > 10) {
        return "Long string";
    } else {
        return "Short string";
    }
};

const findElement = (arr, element) => {
    if (arr.includes(element)) {
        return `${element} found!`;
    } else {
        return `${element} not found!`;
    }
};

const checkProperty = (obj, prop) => {
    switch (prop) {
        case "name":
            return obj.hasOwnProperty("name") ? "Name exists" : "No name";
        case "age":
            return obj.hasOwnProperty("age") ? "Age exists" : "No age";
        default:
            return "Unknown property";
    }
};

function isTrue(value) {
    switch (value) {
        case true:
            return "True indeed!";
        case false:
            return "False, unfortunately!";
        default:
            return "Not a boolean value!";
    }
}

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} makes a sound.`;
    }
}

class Dog extends Animal {
    speak() {
        return `${this.name} barks.`;
    }
}

class Cat extends Animal {
    speak() {
        return `${this.name} meows.`;
    }
}