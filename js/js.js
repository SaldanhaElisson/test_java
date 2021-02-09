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

            if (final > 6){
                 aprovado =` 
                <p>${aluno}, sua média foi ${final}, PARABÈNS !!<p>
            `} 
            else{ 
                aprovado =`${aluno}, sua média foi ${final}, sua média no proxímo semestre precisa ser ${recup}`
                
            }

            const layout = document.getElementById('result');

            layout.innerHTML = aprovado;
        }

        function getInputNumberValue(id) {
        return Number(document.getElementById(id).value);
        } // Transforma string em numbers