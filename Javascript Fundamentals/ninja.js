class Ninja {
    constructor(name, health, speed=3, strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(this.name)
    }

    showStats() {
        console.log('Name: ' + this.name,'Health: ' + this.health,'Speed: ' + this.speed,'Strength: ' + this.strength)
    }

    drinkSake() {
        this.health += 10;
        console.log(this.name + " has regained 10 health")
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name, 200, 10, 10);
        this.wisdom = 10;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("A flight pilot's jacket has no stains, only stories")
    }
}

const sensei1 = new Sensei("Kakashi");
sensei1.speakWisdom();
sensei1.showStats();