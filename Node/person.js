class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log('I am' + this.name)
    }
}

module.exports =  Person;