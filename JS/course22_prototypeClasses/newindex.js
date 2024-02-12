// const arr = [1,2,3]

// console.log(arr)
//
// arr.map()
// arr.forEach()

// const student = {
//     surname: 'Hot'
// }
//
// let admin = {
//     role: 'admin'
// }
//
// admin.__proto__ = student
//
//
// let user = {
//     name: 'Baha',
//     // role: 'user'
// }
//
// admin.role = 'not admin'
//
// user.__proto__ = admin
//
// console.log(user)

// const set = new Set([1,2,3])

class Student {
    constructor(name, surname) {
        this.name = name
        this.surname = surname
    }

    role = 'user'

    getFullName() {
        return `${this.name} ${this.surname}`
    }
}

class Headman extends Student {
    goTalk() {
        return 'Поставьте 5 плз'
    }

    getFullName() {
        return `Привет, ${this.name}`
    }
}

const Baha = {
    name: 'Baha',
    surname: 'Hot',

    getFullName() {
        return `${this.name} ${this.surname}`
    }
}

const Dauren = {
    name: 'Dauren',
    surname: 'Sabyrov',

    getFullName() {
        return `${this.name} ${this.surname}`
    }
}


const dauren = new Student('Dauren', 'Sabyrov')
const headman = new Headman('Dauren', 'Sabyrov')

console.log(dauren.getFullName())
console.log(headman.getFullName())
console.log(headman)

class Product {
    constructor(name, price, discount) {
        this.name = name
        this.price = price
        this.discount = discount
    }

    getPriceWithDiscount() {
        return this.price - this.price * this.discount / 100
    }
}

const iMac = new Product('Imac', 1000, 10)

console.log(iMac)
console.log(iMac.getPriceWithDiscount())