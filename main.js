addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('form');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let num = document.getElementById("numero1").value;
        if(num > 0){
            for(let i = 1; i < 11; i++){
                let mult = num * i;
                alert(num +' x '+ i + '='+ mult)
            }
        }
    })
})