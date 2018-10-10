function Cat(name, age) {
    this.name = name;
    this.age = age;
    this.type = "Cat";
    this.image = "cat.jpg";
}

function Dog(name, age) {
    this.name = name;
    this.age = age;
    this.type = "Dog";
    this.image = "dog.jpg";
}

function Panda(name, age) {
    this.name = name;
    this.age = age;
    this.type = "Panda";
    this.image = "panda.jpg";
}

var animals = [new Cat(), new Dog(), new Panda()];
var animal_names = ["name1", "name2", "name3"];

function generateRandomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
    randomIndex = generateRandomIndex(animals.length);
    return animal_names[randomIndex];
}

function generateRandomAge() {
    return generateRandomIndex(5);
}

function generateRandomAnimal() {
    
}




