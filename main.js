addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('form');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let num = document.getElementById("numero1").value;

        for (i = 1; i <= num; i++) {

            let tot1 = i ** 2;
            let tot2 = i ** i;

            alert('Primer resultado: ' + tot1 + '\nSegundo resultado: ' + tot2);
        }
    })
})