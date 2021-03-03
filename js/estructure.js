// for...of use to variables

let name1 = "Mayk"
let names =['joão', 'Paulo', 'Pedro']

for (let element of names) {
    console.log(element)
}

//for...in use for object

let person = {
    nam:'jhon',
    age:30,
    weight: 88.6
}

for (let property in person) {
    console.log(property)
    console.log(person[property])
}

