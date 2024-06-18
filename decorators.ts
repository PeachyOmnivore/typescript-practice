function Logger(constructor: any) {
    console.log(`Creating an instance of: ${constructor.name}`)
}

@Logger
class Person {
    constructor(
        public name: string,
        public age: number,
    ) { }
}

const person = new Person("Lukas", 33)