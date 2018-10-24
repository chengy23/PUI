function Cat(name, age) {
    this.name = name;
    this.age = age;
    this.type = "Cat";
    this.image = "img/cat.jpg";
}

function Dog(name, age) {
    this.name = name;
    this.age = age;
    this.type = "Dog";
    this.image = "img/dog.jpg";
}

function Panda(name, age) {
    this.name = name;
    this.age = age;
    this.type = "Panda";
    this.image = "img/panda.jpg";
}

var animals = [new Cat(), new Dog(), new Panda()];
var animal_names = ["CSS", "Java", "Ruby", "C++", "Swift"];

function generateRandomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
    var randomIndex = generateRandomIndex(animals.length);
    return animal_names[randomIndex];
}

function generateRandomAge() {
    return generateRandomIndex(6);
}

function generateRandomAnimal() {
    var randomIndex = generateRandomIndex(animals.length);
    var randomAnimal = animals[randomIndex];
    if (randomAnimal instanceof Cat) {
        return new Cat(generateRandomName(), generateRandomAge());
    
    } else if (randomAnimal instanceof Dog) {
      return new Dog(generateRandomName(), generateRandomAge());
    
    } else if (randomAnimal instanceof Panda) {
      return new Panda(generateRandomName(), generateRandomAge());
    }
}


$(document).ready(function() {    
    var animal = generateRandomAnimal();
    $("#animal_intro").text(animal.type + ":  " + animal.name + "  " + animal.age + " years old");
    $("#animal_img").attr("src", animal.image);
});

