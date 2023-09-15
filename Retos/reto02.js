let nota1, nota2, nota3;

do {
    nota1 = parseFloat(prompt("Ingrese la Nota 1:"));
    if (isNaN(nota1) || nota1 < 1 || nota1 > 7) {
        alert("La Nota 1 no es válida. Por favor, ingrese una nota entre 1 y 7.");
    }
} while (isNaN(nota1) || nota1 < 1 || nota1 > 7);

do {
    nota2 = parseFloat(prompt("Ingrese la Nota 2:"));
    if (isNaN(nota2) || nota2 < 1 || nota2 > 7) {
        alert("La Nota 2 no es válida. Por favor, ingrese una nota entre 1 y 7.");
    }
} while (isNaN(nota2) || nota2 < 1 || nota2 > 7);

do {
    nota3 = parseFloat(prompt("Ingrese la Nota 3:"));
    if (isNaN(nota3) || nota3 < 1 || nota3 > 7) {
        alert("La Nota 3 no es válida. Por favor, ingrese una nota entre 1 y 7.");
    }
} while (isNaN(nota3) || nota3 < 1 || nota3 > 7);

const promedioPonderado = (nota1 * 0.4 + nota2 * 0.3 + nota3 * 0.3).toFixed(1);

                
if (promedioPonderado < 3.95) {
    alert(`El estudiante ha reprobado la asignatura. Promedio: ${promedioPonderado}`);
} else if (promedioPonderado >= 3.95 && promedioPonderado <= 4.94) {
    alert(`El estudiante va a examen. Promedio: ${promedioPonderado}`);
} else {
    alert(`El estudiante se exime de la asignatura. Promedio: ${promedioPonderado}`);
}
