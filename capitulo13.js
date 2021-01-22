/* 
JSON: Datos estructurados, Define las propíedades con comillas
*/

// JSON Deserializado
objeto1 = {
    "variable1": "Pedro",
    "variable2": "Jorge"
};

console.log(objeto1);

// JSON serializado
objeto2 = '{"variable1": "Pedro","variable2": "Jorge"}';

console.log(typeof objeto2);

// Ejemplos:

const deserializado1 = {"variable1": "Pedro","variable2": "Jorge"};
// Forma de serializar un string
const serializado1 = JSON.stringify(deserializado1);

console.log(serializado1);

// ----------------------------------------------------------------

const serializado2 = '{"variable1": "Pedro","variable2": "Jorge"}';
// Forma de deserializar un string, para convertirlo en un formato JSON
const deserializado2 = JSON.parse(serializado2);

console.log(deserializado2);

/*
AJAX: JavaScript Asincrono
*/

// Objeto XMLHttpRequest
const peticion1 = new XMLHttpRequest();
const peticion2 = new XMLHttpRequest();

// Verificamos si el readystate cambia
peticion1.addEventListener("readystatechange",()=>{
    if(peticion1.readyState == 4 && peticion1.status == 200){
        console.log(peticion1.response);
    }
});

peticion2.addEventListener("load",()=>{
    let respuesta;
    if(peticion2.status == 200) respuesta = peticion2.response;
    else respuesta = "Lo siento, no se ha encontrado el recurso";
    console.log(respuesta);
});

// Abre una peticion GET
peticion1.open("GET","informacion.txt");
peticion2.open("GET","informacionnnnnn.txt");

// Enviamos la peticion
peticion1.send();
peticion2.send();

console.log(peticion1);
console.log(peticion2);