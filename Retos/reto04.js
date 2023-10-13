function calcularIMC() {
    const Nombre = document.getElementById("nombre").value;
    const Peso = parseFloat(document.getElementById("peso").value);
    const Altura = parseFloat(document.getElementById("altura").value);
    const Edad = parseInt(document.getElementById("edad").value);
    const Genero = document.getElementById("genero").value;
    const nivelAct = document.getElementById("AF").value;
    const nombreRegExp = /^[a-zA-Z\s]+$/;

    if (nombreRegExp.test(Nombre) && Peso > 0 && Edad > 0) {
        if (Altura >= 0 && Altura <= 3) {
            const imc = Peso / (Altura * Altura);
            const clasificacionIMC = obtenerClasificacionIMC(imc);
            const Actividad = obtenerActividad(nivelAct);
            const GED = Peso * Actividad;
            const estadoNutri = obtenerEstadoNutri(imc);

            document.getElementById("RIMC").textContent = imc.toFixed(2);
            document.getElementById("CLASIR").textContent = clasificacionIMC;
            document.getElementById("GEDR").textContent = GED.toFixed(2);
            document.getElementById("NUTRIR").textContent = estadoNutri;

            document.getElementById("nombreResultado").textContent = `Resultado para ${Nombre}`;
        }else{
            alert("La altura debe estar en el rango de 0 a 3 metros. El peso y la edad deben ser positivos.");
        }
    }else{
        alert("El nombre debe contener solo letras y espacios, y el peso y la edad deben ser mayores que 0.");
    }
}

function obtenerClasificacionIMC(imc) {
    if (imc < 18.5) {
        return "Bajo peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidad";
    }
}

function obtenerActividad(nivelAct) {
    switch (nivelAct) {
        case "Sedentario":
            return 1.2;
        case "Moderado":
            return 1.55;
        case "Activo":
            return 1.9;
        default:
            return 1;
    }
}

function obtenerEstadoNutri(imc) {
    if (imc < 18.5) {
        return "Necesita atención especializada";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Estado nutricional adecuado";
    } else {
        return "Necesita atención especializada";
    }
}