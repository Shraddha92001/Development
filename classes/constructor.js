class Person  {
    constructor(name, age, city){ // creating constructor
        this.name = name;
        this.age = age;
        this. city = city;
    }
    greet() {
        console.log("good morning " + this.name + " my age is " + this.age + " and the city is "+ this.city);
    }
}

let persons = new Person ("john" , 25, "mumbai");

console.log(persons);
persons .greet();