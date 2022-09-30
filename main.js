addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('form');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        
        let sum = 0;
        let a = 0;
        let b = 0;
        let c = 0;

        let vent = document.getElementById("numero1").value;

        for (i=1; i<=vent; i++){
            let valor = parseInt(prompt('Ingrese el valor de la venta ' +i+ ':'));

            if( valor > 1000){
                a = a + 1;
            }
            else if(1000 >= valor && valor >500){
                b = b + 1;
            }
            else{
                c = c + 1;
            }
            sum += valor;
		}
        alert('Ventas mayores a 1000: '+a+'\nVentas mayores a 500 menores o iguales a 1000:'+b+'\nVentas menores o iguales a 500: '+c+'\nMonto total: '+sum);
    })
})