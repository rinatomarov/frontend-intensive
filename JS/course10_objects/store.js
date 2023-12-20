// 1
const store = {
    name: "Rancho",
    typeOfProduct: "Cheese Products",
    opening_times: "09:00 - 18:00",
    contact:'8888888888',
    termOfUse: '3 дня от открытия целлофана'
}
// 2
for (let idx = 0; idx < Object.keys(store).length; idx++) {
    console.log(Object.keys(store)[idx].toUpperCase())
}

//3
if (store.hasOwnProperty('termOfUse')){
    console.log(`Годен до ${store.termOfUse}`)
}