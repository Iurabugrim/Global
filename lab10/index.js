class Character {
    constructor(name, type, level, x, y) {
        this.name = name;
        this.type = type;
        this.level = level;
        this.x = x;
        this.y = y;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getType() {
        return this.type;
    }

    setType(type) {
        this.type = type;
    }

    getLevel() {
        return this.level;
    }

    setLevel(level) {
        this.level = level;
    }

    move(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Warrior extends Character {
    constructor(name, level, x, y) {
        super(name, 'Warrior', level, x, y);
    }
}

class Mage extends Character {
    constructor(name, level, x, y) {
        super(name, 'Mage', level, x, y);
    }
}


function Car(brand, model, year, color) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
}

Car.prototype.getBrand = function() {
    return this.brand;
};

Car.prototype.getModel = function() {
    return this.model;
};

Car.prototype.getYear = function() {
    return this.year;
};

Car.prototype.getColor = function() {
    return this.color;
};

Car.prototype.setColor = function(color) {
    this.color = color;
};

Car.prototype.move = function(x, y) {
    console.log(`Moving to (${x}, ${y})`);
};

function SportsCar(brand, model, year, color, maxSpeed) {
    Car.call(this, brand, model, year, color);
    this.maxSpeed = maxSpeed;
}

SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.showMaxSpeed = function() {
    console.log(`Max speed is ${this.maxSpeed}`);
};
