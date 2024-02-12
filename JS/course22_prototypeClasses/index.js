//1
class Dish {
    constructor(name, price, degree_of_acuity) {
        this.name = name
        this.price = price
        this.degree_of_acuity = degree_of_acuity
    }

    makeHotter(degree_of_acuity) {
        console.log(degree_of_acuity)
        if (degree_of_acuity === 'light') {
            degree_of_acuity = 'medium'
            console.log('уровень остроты стало - ' ,degree_of_acuity )
        } else if (degree_of_acuity === 'medium' || degree_of_acuity === 'hot') {
            degree_of_acuity = 'hot'
            console.log('уровень остроты стало - ' ,degree_of_acuity )
        }
    }
}
const acuity = ['light','medium','hot']
// const pelmen = new Dish('pelmen', 1000, acuity[0])
const besh = new Dish('besh-barmak', 100003, acuity[1])
// console.log(pelmen)
// console.log(`был ${pelmen.degree_of_acuity} , после метода стало` ,pelmen.makeHotter('light'))

console.log(besh)
console.log(besh.makeHotter(acuity[1]))
console.log(besh)

// console.log('-------------------------------------')
//2
class Steak extends Dish {
    constructor(name, price, degree_of_acuity, doneNess) {
        super(name, price, degree_of_acuity);
        this.doneNess = doneNess
    }
    setDoneness(doneNess){
        // console.log(doneNess)
        if (doneNess === 'rare') {
            doneNess = 'medium'
            console.log('прожарка стал -' , doneNess)
        } else if (doneNess === 'medium' || doneNess === 'well done' ){
            doneNess =  'well done'
            console.log('прожарка стал -' , doneNess)
        } else alert(  'Нет такой степени прожарки!')

    }
}

// const doneNess = ['rare','medium','well done']
const ribai = new Steak('ribai', 8900, acuity[1],'rare')

console.log( ribai)
console.log(ribai.setDoneness('medium'))

// const tibon = new Steak('tibon', 9900, acuity[2],doneNess[1])
//
// console.log('tibon', tibon)
// console.log(tibon.setDoneness())