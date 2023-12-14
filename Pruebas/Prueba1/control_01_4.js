function calcular() {
    const puntos = parseFloat(document.getElementById('valor').value);
    const porcentaje = parseFloat(document.getElementById('porcentaje').value)
    const totalPago = puntos +(puntos* (porcentaje/100));

    alert(`El total de la factura aplicándole el ${porcentaje}% de IVA es ${totalPago}`);
}
