addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.getElementById('form');
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let num = 1;
        
        for (let i = 1; i <= 20; i++) {
            alert(num);
            if (i%2==0) {
                num-=2;
            }
            else {
                num+=4;
            }
        }
        
    })
})