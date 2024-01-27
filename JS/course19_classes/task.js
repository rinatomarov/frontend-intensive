class Student{
    constructor(name,surname,age) {
        this.name = name
        this.surname = surname
        this.age = age
    }
    getFullName() {
        console.log(this.name + ' ' + this.surname)
    }
    capitalize(){
        console.log((this.name[0].toUpperCase()+this.name.slice(1))+ ' ' + this.surname[0].toUpperCase() + this.surname.slice(1) )
    }
    lower(){
        console.log((this.name[0].toLowerCase()+this.name.slice(1))+ ' ' + this.surname[0].toLowerCase() + this.surname.slice(1) )
    }
}

const student1 = new Student('Rinat','Omarov',23)
student1.getFullName()
const student2 = new Student('dias','dusembek',24)
student2.capitalize()
const student3 = new Student('Dauren','Sabyrov',24)
student3.lower()