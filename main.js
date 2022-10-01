addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('form');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let sig = 1;
        const pi = 3.14;

        let angulo = document.getElementById("numero1").value;
        let radian = document.getElementById("numero2").value;

        let x = radian * (180 / pi);
        let sen = x;

        for (i = 3; i <= angulo + 1; i++) {

            let a = 1;
            let b = 1;

            while (a <= i) {
                b = b * a;
                a = a + 1;
            }
            if (sig % 2 == 1) {
                sen = sen - ((x * i) / b);
            }
            else {
                sen = sen + ((x * i) / b);
            }
            sig += 1;

        }
        document.getElementById('resul').innerHTML = 'el seno de ' + x + ' es ' + sen;
    })
})