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

// XMLHTTPRequest
let peticion3;
if(window.XMLHttpRequest) peticion3 = new XMLHttpRequest();
else peticion3 = new ActiveXObject("Microsoft.XMLHTTP");

peticion3.addEventListener("load",()=>{
    let respuesta;
    if(peticion3.status == 200) respuesta = peticion3.response;
    else respuesta = "Lo siento, no se ha encontrado el recurso";
    console.log(JSON.parse(respuesta).Nombre);
});

peticion3.open("GET","informacion.txt");

peticion3.send();

// Enviar peticiones POST
let peticion4;
if(window.XMLHttpRequest) peticion4 = new XMLHttpRequest();
else peticion4 = new ActiveXObject("Microsoft.XMLHTTP");

peticion4.addEventListener("load",()=>{
    let respuesta;
    if(peticion4.status == 200 || peticion4.status == 201) respuesta = peticion4.response;
    else respuesta = "Lo siento, no se ha encontrado el recurso";
    console.log(JSON.parse(respuesta));
});

peticion4.open("POST","https://reqres.in/api/users");

peticion4.setRequestHeader("Content-type","application/json;charset=UTF8");

peticion4.send(JSON.stringify({
    "nombre": "morfeo",
    "trabajo": "líder"
}));

/* 
Fetch: Basado en promesas
*/

// Promesa
fetch("https://reqres.in/api/unknown/2")
.then(res=>res.text())
.then(res=>console.log(res));

fetch("https://reqres.in/api/users",{
    method: "POST",
    body: `{"nombre": "Alan","apellido": "Cabot"}`,
    headers: {"Content-type": "application/json"}
})
.then(res=>res.json())
.then(res=>console.log(res));

const documento = document.querySelector(".documento");
fetch("informacion.txt")
.then(res=>res.blob())
.then(res=>documento.txt = URL.createObjectURL(res));

// Axios
axios.post("https://reqres.in/api/users",{
    "nombre":"Alan"
})
.then(res=>console.log(res))

// Fetch y Axios con Async & Await
const getName = async ()=>{
    let peticion = await fetch("informacion.txt");
    let resultado = await peticion.json();
    console.log(resultado);
}

document.getElementById('nombre').addEventListener("click",getName);