/* 
    Prototype

    *protype-based language
    *protype chain
    *____Proto_____
*/
//================================================================================
//manipulação de Array 

//separe um texto que contem espaços, em novo array onde cada texto é uma posição do array. depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase ="Eu quero viver o amor"
let myArray= phrase.split(" ")
let phraseWIthUnderscore= myArray.join("_") //juntar os array

//Criar Array com constructor 

let myarray= new Array('a' ,'b', 'c')

//contar Elementos de um array

console.log(['a', 'b', 'c'].length)

// tranforma uma cadeia de caraceres em elemetos de um array

let word = "manipulação"

console.log(Array.from(word)) //cada letra virou um 

let techs =['html', " css", "js"]
//adicionar um item no fim
console.log(techs.push("nodejs"))
//adicionar no começo
techs.unshift("sql")
//remove do fim
techs.pop()
//remover do começo
techs.shift()
//pegar somente alguns elementos do array
console.log(tech.slice(1, 3))
// remover 1  ou mais items em qualquer posição do array
techs.splice(1, 1)
// encontra a posição de um elemento no array
let position = techs.indexOf('css')
techs.splice(possition, 1)



