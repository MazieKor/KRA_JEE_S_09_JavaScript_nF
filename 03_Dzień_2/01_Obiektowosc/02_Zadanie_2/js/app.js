class Duck {
    constructor (){
        this.type = "ordinary duck";
    }

    sound(){
        console.log("quack, quack");
    }

    swim() {
        console.log('Im swimming');
    }

    print() {
        console.log(`Looks like: ${type}`);
    }
}

class WildDuck extends Duck {
    constructor() {
        super();
        this.type = "wild duck";
    }
}

class MallardDuck extends Duck {
    constructor() {
        super();
        this.type = "mallard";
    }

}


const donald = new Duck();
donald.sound();
donald.swim();
donald.print();

const daffy = new WildDuck();
daffy.sound();
daffy.swim();
daffy.print();