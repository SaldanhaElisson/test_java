const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {



    const names = document.getElementById("names").value;
    const nota = getInputNumberValue('nota');

    let AlphabeticNote;

    if (nota > 90  ){
        AlphabeticNote='A'
    } else if (nota <90 && nota >=80){
        AlphabeticNote='B'
    } else if (nota < 80 && nota > 70){
        AlphabeticNote='C'
    } else if (nota <70 && nota>60){
        AlphabeticNote='D'
    } else{
        AlphabeticNote='F'
    }

    console.log(AlphabeticNote)

    const layout =`<h2> Aqui está o resultado: </h2>
    
    <div class="result-content">
        <p>${names} sua nota foi ${AlphabeticNote}</p.
    </div>`

    const result = document.querySelector('#TextGrades')

    result.innerHTML = layout
}

function getInputNumberValue(id) {
    return Number(document.getElementById(id).value);
  }