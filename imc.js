

var botaoCalcular = document.getElementById('calcular')


function calcularResultado (){
    
    var nome = document.getElementById('nome').value
    var altura = document.getElementById('altura').value
    var peso = document.getElementById('peso').value
    var campoResultado = document.getElementById('resultado')
    var imc = (Number(peso) / (Number(altura) * Number(altura))).toFixed(2)
    var informacao = ''
    

    if (nome !== '' && altura !== '' && peso !== ''){


        if (imc < 18.5){

            informacao = 'Você está abaixo do peso esperado'

        }else if (imc < 29.9){

            informacao = 'Parabéns, dentro do peso esperado'

        }else{

            informacao = 'Você está acima do peso esperado'

        }

        campoResultado.textContent = `O IMC de ${nome} é de ${imc}. ${informacao}`

    }else{

        alert('Favor preencher todos os campos')

    }

}