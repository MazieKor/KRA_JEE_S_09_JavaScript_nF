// const Basket = function () {
//     this.products = [];
//     this.sum = 0;
// }
//
// Basket.prototype.addproduct = function(name, price) {
//     //const product = {
//     //
//     const product = {name, price};
//     this.products.push(product);
//     this.sum += price;
//
// }
//
// Basket.prototype.showBasket = function(){
//     console.log('Products in Basket:');
//     this.products.
// }

function User(name) {
    this.name = name;
}

const user1 = new User(9);
const user2 = new User("tom");
const user3 = new User();

console.log(user1.name);
console.log(user2);
console.log(user3);

function test () {}
// console.dir(test);
console.dir(test.prototype);

class Animal {
    constructor(name) {
        this.name = name;   }
    getName() {
        return this.name;   }
    setName(name) {
        this.name = name;   } }
let a = new Animal("Filemon");
console.log(a.getName()); // Filemon
console.log(a.name);
a.setName("Mruczek");
console.log(a.getName()); // Mruczek

class Animal2 {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

class Bird extends Animal2 {
    fly() {
        console.log(this.getName()+" lata");
    }
}
let birdy = new Bird();    //moge stworzyć obiekt nie podając wymaganego konstruktorem rodzica imienia
birdy.name = "orzeł";
console.log(birdy.name);
// birdy.fly();
// console.log(birdy.name);


class Foo {
    constructor(a, b) {
        this.a = a;
        this.b = b;   }
    multiply() {
        return this.a * this.b;
    }
}
class Bar extends Foo {
    constructor(a, b, c) {
        super(a, b);
        this.c = c;   }
    multiply() {
        return super.multiply() * this.c;    //bez super by nie zadziałało. Jakbym nie miał super mógłbym całą
    }                             //metodę wykasować i przez obiekt bar1 dostałbym się do metody multiply rodzica
}

const bar1 = new Bar(2, 3, 8);
console.log(bar1.multiply());