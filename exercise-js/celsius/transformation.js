/* 
 
Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

C=(F-32) * 5/9

F = C * 9/5 + 32
*/

function transformDegree(degree){
    const celsiusExist = degree.toUpperCase().includes('C')
    const fahrenheit = degree.toUpperCase().includes('F')

    //fluxo de erro
    if(!celsiusExist && !fahrenheit){
        throw new Error ('Grau não indetificado')
    }
    

    //fluz ideal, F -> C
    let updateDegree = Number(degree.toUpperCase().replace("F", ""))
    let formula = (fahrenheit) => (fahrenheit - 32 )
    let degreeSign = 'C'

    //fluxo alternativo expressão regular
    if(celsiusExist ){
        updateDegree = Number(degree.toUpperCase().replace("F", ""))
        formula = (celsius) => celsius * 9/5 + 32 
        degreeSign = 'F'
    }

    return formula(updateDegree) + degreeSign
}

try{
    console.log(transformDegree('50F'))
    //transformDegree('50z')
} catch(error){
    console.log(error.message)
}