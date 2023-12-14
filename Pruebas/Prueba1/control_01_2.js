const palabra=prompt("por favor ingrese una frase:");
const letra=prompt("por favor ingrese una letra:");
const palabra1 = palabra.toLowerCase();
const letra1 = letra.toLowerCase();

var contador = 0;

for (var i = 0; i < palabra1.length; i++) {
  if (palabra1[i] === letra1) {
    contador++;
  }
}

alert(`la letra ${letra} aparece ${contador} en la palabra ${palabra} `)