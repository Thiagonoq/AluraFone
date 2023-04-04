const digito = document.querySelectorAll('input[type=button]');
const entrada = document.querySelector('input[type=tel]');

for (let i=0; i < digito.length; i++) {
     const tecla = digito[i];
  
    tecla.onclick = function() {
        if (tecla.value == "Limpar"){
            entrada.value = "";
        } else if (tecla.value == "Apagar") {
            let entrada2 = entrada.value;
            entrada.value = entrada2.substring(0, entrada2.length -1);           
        } else {
            entrada.value += tecla.value;
        }
    }
  
    tecla.onkeydown = function (evento) {
    const numero = evento.key; 
    
        if (isNaN(numero) == false || numero == '*' || numero == '#') { //numero >= 0 || numero <=10
            entrada.value += numero;
        }

    
    console.log(evento);
    console.log(isNaN(numero));

        if(evento.code == 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }
      
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    } 
}