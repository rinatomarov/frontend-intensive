// 1
let electronics = [{
    name: "IPad", price: 123000
}, {
    name: "Iphone", price: 300000
}, {
    name: "Mouse", price: 2300
}, {
    name: "Keys", price: 4560
}, {
    name: "Battery", price: 9900
},]
// 2
electronics.sort((a, b) => {
    if (a.price > b.price) {
        return -1
    }
})
console.log(electronics)

// 3
console.log(electronics.filter((a) => {
    return a.price < 10000
}))

// 4
console.log(electronics.find((a)=>{
    return a.name === 'IPad'
}))