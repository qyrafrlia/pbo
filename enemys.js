class Enemys {
    constructor(name, speed, attack, health, defend) {
        this.name = name;
        this.speed = speed;
        this.attack = attack;
        this.health = health;
        this.defend = defend;
    }

    Attack() {
        console.log(`enemy attack!, attack = ${this.attack}`);
    }

    Walk() {
        console.log(`enemy walk, speed = ${this.speed}`);
    }

    Dash(dash) {
        console.log(`enemy dash, speed = ${dash}`);
    }

    getInformation() {
        console.log(`${this.name} memiliki speed = ${this.speed}, attack = ${this.attack}, health = ${this.health}, dan defend = ${this.defend}`);
    }
}

const enemys = new Enemys("Mave", "2", "5", "100", "2")
enemys.Attack();
enemys.Walk();
enemys.Dash("5");
enemys.getInformation();