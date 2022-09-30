addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('form');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let menor = 0;
        let mayor = 0; 
        let encue = 0;
        
        let estudiantes= document.getElementById("numero1").value;
        
        for (let i = 1; i <= estudiantes; i++) {
            let cal = parseInt(prompt('Estudiante #' +i+ ' Ingrese su calificación'));
            
            if (cal > mayor) {
                mayor = cal;
            }
            else if (cal < menor) {
                menor = cal;
            }
            else {
                mayor = cal;
                menor = cal;
            }
            encue += cal;
            
        }
        let promedio = encue / estudiantes;
        
        alert('Promedio de notas: '+promedio+'\nNota más alta: '+mayor+ '\nNota más baja: '+menor);
    })
})