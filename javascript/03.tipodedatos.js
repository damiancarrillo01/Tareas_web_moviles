//numeros
let edad = 29;
let sueldo = 120000;
const PI = 3.14;

//con notacion cientifica 

const x= 100000;
const n_grande =1e6;
const n_chico = 1e-8;

//bigint

const bigint= 23215376768394783613781n;
console.log(bigint)



//strings

let string1= 'hola ¿como estas?';
let haz = `este es un saludo: ${string1}`;
console.log(haz);


//bool

let v = true;
let f = false;

if (v){
    console.log('esto es verdadero');
}else{
    console.log('esto es falso');
}

//Null
let numero_nuevo = null;
console.log(numero_nuevo);


let user = new Object();
let user1 = {};


let usuario = {
    name:"mateo",
    Age:15,
    city:"osorno",
    "correo electronico":"hola@gmail.com"
};

usuario.provincia="Osorno";

console.log(usuario);
delete usuario.provincia;

console.log(usuario);