const EntityBase = require('./entityBase')

console.log(new EntityBase({
    name: 'Guilherme Longhini',
    gender: "m",
}).name)

console.log(new EntityBase({
    name: 'Xuxa',
    gender: "f",
}).name)

const assert = require('assert')
const Employee = require('./employee')
const Manager = require('./manager')
const Util = require('./util')

const GENDER = {
    m: 'm',
    f: 'f'
}

{
    const employee = new Employee({
        name: 'Xuxa',
        gender: GENDER.f
    })

    assert.throws(() => employee.birthYear, { message: 'you must define age first!!' })
}

const CURRENT_YEAR = 2021
Date.prototype.getFullYear = () => CURRENT_YEAR

{
    const employee = new Employee({
        name: 'Pedro',
        age: 20,
        gender: GENDER.m
    })

    assert.deepStrictEqual(employee.name, "Mr. Pedro")
    assert.deepStrictEqual(employee.age, undefined)
    assert.deepStrictEqual(employee.gender, undefined)
    assert.deepStrictEqual(employee.grossPay, Util.formatCurrency(5000.40))
    assert.deepStrictEqual(employee.netPay, Util.formatCurrency(4000.32))

    const expectedBirthYear = 2001
    assert.deepStrictEqual(employee.birthYear, expectedBirthYear)

    employee.birthYear = new Date().getFullYear() - 80
    assert.deepStrictEqual(employee.birthYear, expectedBirthYear)

    employee.age = 80
    assert.deepStrictEqual(employee.birthYear, 1941)

    console.log('\n ---employee-----')
    console.log('employee.name', employee.name)
    console.log('employee.age', employee.age)
    console.log('employee.gender', employee.gender)
    console.log('employee.grossPay', employee.grossPay)
    console.log('employee.netPay', employee.netPay)
}

{
    const manager = new Manager({
        name: 'Bruna',
        age: 18,
        gender: GENDER.f
    })
    assert.deepStrictEqual(manager.name, "Ms. Bruna")
    assert.deepStrictEqual(manager.age, undefined)
    assert.deepStrictEqual(manager.gender, undefined)
    assert.deepStrictEqual(manager.birthYear, 2003)
    assert.deepStrictEqual(manager.grossPay, Util.formatCurrency(5000.40))
    assert.deepStrictEqual(manager.bonuses, Util.formatCurrency(2000))
    assert.deepStrictEqual(manager.netPay, Util.formatCurrency(6000.32))

    console.log('\n---manager ---')
    console.log('manager.name', manager.name)
    console.log('manager.age', manager.age)
    console.log('manager.gender', manager.gender)
    console.log('manager.birthYear', manager.birthYear)
    console.log('manager.grossPay', manager.grossPay)
    console.log('manager.bonuses', manager.bonuses)
    console.log('manager.netPay', manager.netPay)

}