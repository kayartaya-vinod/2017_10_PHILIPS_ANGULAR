export class Person {

    constructor(private name: string, private city: string = "Bangalore") {
    }

    info() {
        console.log(`${this.name} is from ${this.city}`);
    }
}

export class Animal {
}

// export default const info = `This is a sample module contianing these classes:
// 1. Person
// 2. Animal
// `;