//1) Если имя человека - "Peter Parker", вывести уведомления - "Spiderman!"
const name = "Peter Parker"
const name2 = "Bruce Wayne"
const personage = "Peter Parker"
if (personage == name) {
    alert("Spiderman!")
} else if (personage == name2) {
    alert("Batman!")
}

//2) Иначе вывести уведомления - "Лжец"
else {
    alert("Лжец")
}

//3) Если у объекта есть свойство "myProp", вывести в консоль - "Есть секретное свойство"

obj = {
    myProp: "Rinat"
}
if (!!(obj.myProp)) {
    alert("Есть секретное свойство")
}

//4) Вывести в консоль возрастную группу человека согласно таблице
const age = 85
if (age >= 18 && age <= 44) {
    alert("Молодой возраст")
} else if (age >= 45 && age <= 59) {
    alert("Средний возраст")
} else if (age >= 60 && age <= 74) {
    alert("Пожилой возраст")
} else if (age >= 75 && age <= 90) {
    alert("Старческий возраст")
} else if (age > 90) {
    alert("Долголетие")
}