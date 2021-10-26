const table = document.querySelector("table")
const fName = document.querySelector('.firstName')
const lName = document.querySelector('.lastName')
const email = document.querySelector('.email')
const sallary = document.querySelector('.sallary')


class Person{
    constructor(first, last, email) {
        this.name = {
            first,
            last
        };
        this.email = email;
    }

    addSallary (sallary) {
    this.sallary = sallary;

}

    greeting() {
        return[this.name, this.email, this.sallary];
    }

}

const zmog = new Person('Tajus', 'Stac', 'abcd1234@gmail.com')
zmog.addSallary(680);
console.log(zmog)

localStorage.setItem('zmog', JSON.stringify(zmog))

const fun = JSON.parse(localStorage.getItem('zmog'))

fName.innerHTML = fun.name[0]
lName.innerHTML = fun.name[1]
email.innerHTML = fun.email
sallary.innerHTML = fun.sallary
console.log(fun)

// function Person(firstName, lastName, email) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//
// }
//
// Person.prototype.addSallary = function(sallary) {
//     this.sallary = sallary;
//
// }
//
// Person.prototype.greeting = function (){
//     return[this.firstName, this.lastName, this.email, this.sallary];
// }
//
// const zmog = new Person('Tajus', 'Stac', 'abcd1234@gmail.com')
//
//
// zmog.addSallary(680);
// function setinfo(){
//
//     localStorage.setItem('zmog', JSON.stringify(zmog))
// }
// const fun = JSON.parse(localStorage.getItem('zmog'))
//
// fName.innerHTML = fun.firstName
// lName.innerHTML = fun.lastName
// email.innerHTML = fun.email
// sallary.innerHTML = fun.sallary
// console.log(fun)
