class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target) {
        if(target instanceof Unit) {
            target.res -= this.power;
        } else {
            throw new Error("Target must be a valid unit!")
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text, targetStat, magnitude) {
        super(name, cost);
        this.text = text;
        this.targetStat = targetStat;
        this.magnitude = magnitude;
    }

    play(target) {
        if(target instanceof Unit) {
            if (this.targetStat === "res") {
                target.res += this.magnitude;
            }
            if (this.targetStat === "power"){
                target.power += this.magnitude;
            }
        } else {
            throw new Error("Target must be a valid unit!")
        }
    }
}

// Turn 1
const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const hardAlgorithm = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", "res", 3);
hardAlgorithm.play(redBeltNinja)

// Turn 2
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "res", -2)
unhandledPromiseRejection.play(redBeltNinja)

// Turn 3
const pairProgramming = new Effect("Pair Programming", 3, "Increase target's power by 2", "power", 2)
pairProgramming.play(redBeltNinja)
redBeltNinja.attack(blackBeltNinja)


// Stat Check
console.log(redBeltNinja)
console.log(blackBeltNinja)
