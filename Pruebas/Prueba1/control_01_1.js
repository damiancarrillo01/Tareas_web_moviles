function nivel() {
    const puntos = parseFloat(document.getElementById('puntos').value);
    const salario = 250000;
    const totalPago = salario * puntos;

    let mensaje = '';

    if (puntos === 0.0 || puntos === 0.2) {
        mensaje = `Su rendimiento es insuficiente y su monto a pagar es ${totalPago}`;
    } else if (puntos === 0.4) {
        mensaje = `Su rendimiento es aceptable y su monto a pagar es ${totalPago}`;
    } else if (puntos === 0.6) {
        mensaje = `Su rendimiento es meritorio y su monto a pagar es ${totalPago}`;
    } else if (puntos === 0.8) {
        mensaje = `Su rendimiento es excelente y su monto a pagar es ${totalPago}`;
    } else {
        mensaje = `Puntaje no válido`;
    }

    alert(mensaje);
}