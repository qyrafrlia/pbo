class Person{
    constructor(name) {
        this.name = name;
    }

    getInformation() {
        console.log(`This person is ${this.name}`);
    }
}

class Professor extends Person {
    constructor(name, teaches) {
        super(name);
        this.teaches = teaches;
    }

    introduceSelf() {
        console.log(`My Name is ${this.name}, and i will be your ${this.teaches} Professor`);
    }
}

const mave = new Professor("Mave", "Psychology");
console.log(mave.getInformation());
console.log(mave.introduceSelf());