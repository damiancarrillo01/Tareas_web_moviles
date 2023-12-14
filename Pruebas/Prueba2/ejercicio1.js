////DamianCarrillo
document.getElementById('generar').addEventListener('click', function () {
    var length = parseInt(document.getElementById('length').value);
    if(length>=8 & length<=20){
        var mayusculas = document.getElementById('mayus').checked;
        var minusculas = document.getElementById('minus').checked;
        var numeros = document.getElementById('num').checked;
        var especial = document.getElementById('carac_e').checked;

        var charset = '';
        if (mayusculas) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (minusculas) charset += 'abcdefghijklmnopqrstuvwxyz';
        if (numeros) charset += '0123456789';
        if (especial) charset += '!@#$%^&*()_+[]{}|;:,.<>?';

        var contraseña = generarcontraseña(length, charset);
        document.getElementById('password').textContent = contraseña;
    }else{
        alert("el largo de la contraseña debe ser igual o mayor a 8 y menor o igual que 20")
    }
    
});

function generarcontraseña(length, charset) {
    var contraseña = '';
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        contraseña += charset.charAt(randomIndex);
    }
    return contraseña;
}