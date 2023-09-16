
function validarNota(mensaje) {
    let nota;
    do {
        nota = parseFloat(prompt(mensaje));
        if (isNaN(nota) || nota < 1 || nota > 7) {
            alert("La nota no es válida.ingrese una nota entre 1 y 7.");
        }
    } while (isNaN(nota) || nota < 1 || nota > 7);
    return nota;
}


function calcularPromedioPonderado(nota1, nota2, nota3) {
    return ((nota1 * 0.4) + (nota2 * 0.3) + (nota3 * 0.3)).toFixed(1);
}


function determinarResultado(promedio) {
    if (promedio < 3.95) {
        return "El estudiante ha reprobado la asignatura.";
    } else if (promedio >= 3.95 && promedio <= 4.94) {
        return "El estudiante debe rendir examen.";
    } else {
        return "El estudiante se exime de la asignatura.";
    }
}


const nota1 = validarNota("Ingrese la Nota 1:");
const nota2 = validarNota("Ingrese la Nota 2:");
const nota3 = validarNota("Ingrese la Nota 3:");

const promedioPonderado = calcularPromedioPonderado(nota1, nota2, nota3);

const resultado = determinarResultado(promedioPonderado);

alert(`${resultado} Promedio: ${promedioPonderado}`);
