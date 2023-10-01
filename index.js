let contador = [];

const valor = document.querySelector('#valor');
const botones = document.querySelectorAll('.boton');
const valorTotal = document.getElementsByClassName('valor-total')
const botonCalcular = document.getElementsByClassName('calcularTotal')


botones.forEach(boton => {
  boton.addEventListener('click', function(e) {

    const estilos = e.currentTarget.classList;

    if(estilos.contains('disminuir')) {
      let contador1 = contador -- ;
      let multiplicar = contador1 * 1000;
    
      console.log(multiplicar)



    }
    else if(estilos.contains('aumentar')) {
     let contador2 = contador ++ ;
     let multiplicar2 = contador2 * 1000
     console.log(multiplicar2)

      
    }
    else {
      contador = 0;
    }
      valor.textContent = contador;

      // prompt

      if(contador > 0) {
        valor.style.color = '#fff';
      }
      if(contador < 0) {
        valor.innerHTML = ' '
        alert("el numero debe ser mayor a 0")
      }
  })
})

function calcularTotal(contador){
  const calcular = contador.length
  console.log(calcular)

}

calcularTotal();






















