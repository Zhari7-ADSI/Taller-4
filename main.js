addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('form');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let cant = document.getElementById("numero1").value;

        for (i=1; i<=cant; i++){

            let num1 = parseInt(prompt(i+'-'+cant+'\n Ingrese el primer número:'));
            let num2 = parseInt(prompt('Ingrese el segundo número:'));

            let sum = num1 + num2;
            let rest = num1-num2;
            let mult = num1 * num2;
            let div = num1 / num2;
            
            alert('suma: '+sum+ '\n resta: '+rest+ '\n multiplicación: '+mult+'\n división:'+div)
        }
    })
})