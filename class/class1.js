// creating class (BLUE-PRINT)
class animal{
    constructor(name, legs, speaks, eat)
    {
        this.name = name;
        this.legs = legs;
        this.speaks= speaks;
        this.eat = eat;
    }
}
//creating object
let cat = new animal("cat", 4,"meow meow", "fish");
let dog = new animal("dog", 4,"bhow bhow", "meat");
console.log(dog);
console.log(cat);