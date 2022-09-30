addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('form');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        
        let primer = 10;
        let mes = 20;

        alert('El valor 1 a pagar es: ' +primer+ ' pesos');

        for (i=2; i<=20; i++){
            primer = primer * 2,
            alert('El mes '+i+', el valor a pagar es de: '+primer+ ' pesos');
        }
    })
})