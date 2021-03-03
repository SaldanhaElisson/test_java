// pegar os dados

let family = {
    incomes:[2500, 3200, 250.43, 360.45],
    expenses: [320.34, 128, 20, 30]
}

function sum(array) {
    let total = 0;

    for(let value of array){
        total += value 

        return total
    }
}

function calculateBalance(){
    const calculateIconmes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses);

    const total = calculateIconmes - calculateExpenses;

    
    const itsOk =  total >=0
    let balanceText = 'negativo'

    if(itsOk){
        balanceText ="positivo"
    }
    console.log(`Seu saldo é ${total.toFixed(2)}`)
}

calculateBalance()