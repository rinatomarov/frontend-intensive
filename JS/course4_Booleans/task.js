const typeWork = prompt('Вы работаете ? ')
if (typeWork === "работающий") {
    const day = prompt('Сегодня какой день? ')
    if (day === 'понедельник') {
        alert("Снова работа((")
    } else if (day === 'вторник') {
        alert("Устал(")
    } else if (day === 'среда') {
        alert("ОО еще чуть чуть")
    } else if (day === 'четверг') {
        alert("ОСталось совсем немного")
    } else if (day === 'пятница') {
        alert("Почти лучший день на свете")
    } else if (day === 'суббота') {
        alert("Точно лучший день на свете")
    } else if (day === 'воскресенье') {
        alert("Класс , но завтра работа ((")
    }
} else {
    alert("Отдых")
}

const dayBorn = prompt('Вы в каком числе родились ? ')
const monthBorn = prompt('Вы в каком месяце родились ? ')
const yearBorn = prompt('Вы в каком году родились ? ')
alert(dayBorn + '-' + monthBorn + '-' + yearBorn)