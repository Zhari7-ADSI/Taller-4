addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('form');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let cant = document.getElementById("numero1").value;

        let mayor = 500000;
        const iva1 = 0.19;

        for (i = 1; i <= cant; i++) {

            let valor_ar = parseInt(prompt(i + '-' + cant + '\n Ingrese el valor del árticulo:'));
            let unidad = parseInt(prompt('Unidades compradas:'));

            let sub_tot = valor_ar * unidad;
            let iva2 = sub_tot * iva1;
            let tot_pag = sub_tot + iva2;

            if (tot_pag > mayor) {
                let des = tot_pag * 0.15;
                let desc_tot = tot_pag - des;
                alert('La compra superó los 500.000, /n ¡¡¡ Felicidades, obten tu descuento!!! \n Pago con IVA: ' + tot_pag + '\n Total a pagar: ' + desc_tot + ' GRACIAS POR SU COMPRA💜');
            }
            else {
                alert('Subtotal: ' + sub_tot + '\n IVA: ' + iva1 + '\n Total a pagar: ' + tot_pag);
            }
        }
    })
})