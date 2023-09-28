function validarNumero(mensaje) {
    let n;
    do {
        n = parseFloat(prompt(mensaje));
        if (isNaN(n) || n <= 0 ) {
            alert("el numero debe ser positivo");
        }
    } while (isNaN(n) || n <= 0 );
    return n;
};

function calcularsuma(numero) {
    var sumaPares = 0;
    
    for (var i = 1; i <= numero; i++) {
        if (i % 2 === 0) {
            sumaPares += i; 
        }
    }

    alert("La suma de los números pares desde 1 hasta " + numero + " es: " + sumaPares);
};

const n1 = validarNumero("ingrese un Numero:");
calcularsuma(n1);