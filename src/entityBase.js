class EntityBase {
    #name 
    #age 
    #gender 
    
    constructor({ name, age, gender }) {

        this.#name = name
        this.#age = age
        this.#gender = gender
    }

    get name() {
        const preffix = this.#gender === "m" ? "Mr." : "Ms."
        return `${preffix} ${this.#name}`
    }

    get birthYear() {
        if(!this.#age) {
            throw new Error('Por favor, digite sua idade!')
        }

        return new Date().getFullYear() - this.#age 
    }
    set age(value) {
        this.#age = value
    }

}

module.exports = EntityBase