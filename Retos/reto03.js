var selectPorcentaje = document.getElementById("porcentaje");
var porcentaje = 5;

while (porcentaje <= 50) {
    var opcion = document.createElement("option");
    opcion.value = porcentaje;
    opcion.text = porcentaje + "%";
    selectPorcentaje.appendChild(opcion);
    porcentaje += 5;
}

const valores = []; 

function agregarBoleta() {
    const valorStr = document.getElementById('Total').value;
    const porcentaje = parseFloat(document.getElementById('porcentaje').value);
    const valor = parseFloat(valorStr);

    if (valor && !isNaN(valor) && !isNaN(porcentaje) && valor > 0) {
        const propina = valor * (porcentaje / 100);
        const total_pago = valor + propina;
        
        valores.length = 0;
        valores.push({ propina, total_pago });
        mostrarProductosEnLista();
    } else {
        alert('Ingresa valores válidos para el Total y el porcentaje.');
    }
}

function mostrarProductosEnLista() {
    const listaProductos = document.getElementById('listaProductos');
    listaProductos.innerHTML = '';

    for (const valor of valores) {
        const li = document.createElement('li');
        li.innerHTML = `Propina: $${valor.propina} CLP<br>total a pagar: ${valor.total_pago}`;
        listaProductos.appendChild(li);
    }
}

