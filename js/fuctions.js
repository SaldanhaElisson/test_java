// função é um liquidificador

function fazerSuco(fruta1, fruta2){
    return fruta1+fruta2
}

const copo = fazerSuco('banana' , 'maçã')

console.log(copo)

//callback function

function sayMyName(name){
    
    console.log('antes de executar a funcao callback')
    name()

    console.log('depois em uma callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)

/*fuction( ) constructor

 *expressão new
 *criar um novo objeto
 *this keyword

 */

 function Person(name){
     this.name = name //this vai referencia o objeto
     this.walk= ()=>{
         return this.name + " está andando"

     }
 }

 const elisson= new Person("elisson")
 const clara = new Person("clara") //aqui vai criar um objeto novo
 console.log(elisson.walk())
 console.log(clara.walk())
