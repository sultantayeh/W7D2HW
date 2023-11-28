// problem1 ================================
let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
    oberwise:"Chocolate",
    dunkin:"Vanilla",
    culvers:"All of them",
    mcDonalds:"Sham-rock-shake",
    cupids_candies:"Chocolate Malt"
    }]
    }

function getFavoriteFoods(person) {
    for (let category in person) {
        console.log(category + ": " + person[category]);
    }
}

getFavoriteFoods(person3);


// problem2 ================================
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.printInfo = () => {
        console.log("Name is: " + this.name + " and age is:" + this.age);
    };

    this.addAge = (years) => {
        this.age = this.age + years;
    };
}

let person1 = new Person("Sultan", 35);
let person2 = new Person("Iron Man", 25);

person1.printInfo();
person2.printInfo();
person1.addAge(3);
person1.printInfo();
person2.printInfo();

// problem3 ================================
function checkStringLength(str) {
    return new Promise((resolve) => {
        if (str.length > 10) {
            resolve("Big word");
        } else {
            resolve("Small Number");
        }
    });
}