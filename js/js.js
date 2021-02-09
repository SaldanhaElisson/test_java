const form = document.getElementById('form');
        form.addEventListener('submit', handleSubmit);

        function handleSubmit(event) {
            const aluno = document.getElementById("aluno").value;
            const one= getInputNumberValue('first_semenster');
            const two = getInputNumberValue('secon_semenster');
            const three = getInputNumberValue('third_semenster');

            var aprovado;
            
             const final = (one+two+three*2)/ 4

             const recup = 12-final

            console.log(final);

            function capitalizeFirstLetter(str) {

                // converting first letter to uppercase
                const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
            
                return capitalized;
            }

            const alunoup=capitalizeFirstLetter(aluno)

            if (recup <= 6){
                 aprovado =` 
                <p>${alunoup}, sua média foi ${final}, PARABÈNS !!<p>
            `} else if(recup>=10){
                aprovado=`<p>${alunoup}, infelizmente não há nada </br>
                 que vc possa fazer para alcançar</br>
                  a média no proxímo semestre &#128169  `

            }  else { 
                aprovado =`<p>${alunoup}, sua média foi ${final.toFixed(2)}</br> sua média no proxímo semestre precisa ser ${recup}<p>`
                
            }

            const layout = document.getElementById('result');

            layout.innerHTML = aprovado;
        }

        function getInputNumberValue(id) {
        return Number(document.getElementById(id).value);
        } // Transforma string em numbers