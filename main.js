addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('form');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let trabajadores = document.getElementById("numero1").value;

        for (i = 1; i <= trabajadores; i++) {
            let aumento = parseInt(prompt('cuantos años lleva trabajando en la empresa?'));

            if (1 <= aumento && aumento <= 5) {
                alert('su aumento es de 100 pesos');
                }
                else if (5 < aumento && aumento <= 10) {
                    alert('su aumento es de 250 pesos');
                }
                else if (10 < aumento && aumento <= 20) {
                    alert('su aumento es de 400 pesos');
                }
                else{
                    alert('su aumento es de 550 pesos');
                }
            
        }
    })
    })