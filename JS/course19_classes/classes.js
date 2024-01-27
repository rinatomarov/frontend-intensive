const set = new Set([1,3,4])

class Animal {
    constructor(name) {
        this.name = name
        if(name === 'cat' || name === 'wolf') {
            this.legs = 4
        } else if (name === 'bird') {
            this.legs = 2
        }
    }

    name = '';
    legs = 0
}

class Cat extends Animal {
    constructor(name) {
        super(name)
        alert(name)
    }

    meow() {
        console.log('meow')
    }
}

const animal = new Animal('wolf')
// const cat = new Cat('cat')
const bird = new Animal('bird')

// cat.meow()
//
// console.log(animal)
// console.log(cat)
// console.log(bird)


class Good {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

console.log(new Good('iphone', 10000))

const arr = [
    {
        name: 'iphone',
        price: 10000,
    },
    {
        name: 'iphone2',
        price: 10000,
    },
]

const arr2 = [
    new Good('iphone', 1000),
    new Good('ipad', 2000)
]

console.log(typeof arr2[0])