/* 
CallBacks
*/

// Funcion
function prueba(CallBack){
    CallBack("Alan");
}

function decirNombre(nombre){
    console.log(nombre);
}

prueba(decirNombre);

// Funcion Flecha
function prueba2(CallBacks){
    CallBacks("Cabot");
}

prueba2(apellido => console.log(apellido));

class Persona {
    constructor(nombre,instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
}

// const data = [
//     ["Lucas Dalto","@soydalto"],
//     ["Robertico"],
//     ["Rancio Ramirez","@rancioramirez"],
//     ["Camila Nesa","@milanesa"],
// ];

// const personas = [];

// for (let i = 0; i < data.length; i++){
//     personas[i] = new Persona(data[i][0],data[i][1]);
// }

// const obtenerPersona = (id,cb)=>{
//     if(personas[id] == undefined){
//         cb("No se ha encontrado la persona");
//     } else {
//         cb(null,personas[id],id);
//     }
// }

// const obtenerInstagram = (id,cb)=>{
//     if(personas[id].instagram == undefined){
//         cb("No se ha encontrado el instagram");
//     } else {
//         cb(null,personas[id].instagram);
//     }
// }

// obtenerPersona(1,(err,persona,id)=>{
//     if(err){
//         console.log(err)
//     } else {
//         console.log(persona.nombre);
//         obtenerInstagram(id,(err,persona)=>{
//             if(err){
//                 console.log(err);
//             } else {
//                 console.log(instagram);
//             }
//         });
//     }
// });

/*
Promesas
*/

// 
let nombre = "Pedro";

const promesa = new Promise((resolve,reject)=>{
    // Si se ejecuta el reject nos muestra un error:
    if(nombre !== "Pedro") reject("Lo siento, el nombre no es Pedro");
    else resolve(nombre)
});

console.log(promesa);

// Then nos accede al valor que tiene Resolve:
// Then es un metodo que recibe un callback
promesa.then((resultado)=>{
    console.log(resultado);
    // Catch: Manejamos el error:
}).catch((e)=>{
    console.log(e);
});

const data = [
    ["Lucas Dalto","@soydalto"],
    ["Robertico","@robertico"],
    ["Rancio Ramirez","@rancioramirez"],
    ["Camila Nesa"],
];

const personas = [];

for (let i = 0; i < data.length; i++){
    personas[i] = new Persona(data[i][0],data[i][1]);
}

const obtenerPersona = (id)=>{
    return new Promise((res,rej)=>{
        if(personas[id] == undefined) rej("No se ha encontrado la persona");
        else (res(personas[id]));
    });
}

const obtenerInstagram = (id)=>{
    return new Promise((res,rej)=>{
        if(personas[id].instagram == undefined) rej("No se ha encontrado el instagram");
        else (res(personas[id].instagram));
    });
}

let id = 1;

obtenerPersona(id).then((persona)=>{
    console.log(persona.nombre);
    return obtenerInstagram(id);
    }).then((instagram)=>{
        console.log(instagram);
}).catch((e)=>{
    console.log(e);
});

const objeto = {
    propiedad1: "valor1",
    propiedad2: "valor2",
    propiedad3: "valor3"
};

const obtenerInformacion = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(objeto)},3000);
    });
}

obtenerInformacion().then(resultado => console.log(resultado));

// Await
const mostrarResultado = async ()=>{
    resultado = await obtenerInformacion();
    console.log(resultado);
}

mostrarResultado();

// Async
const obtenerInformacionNew = (text)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {resolve(text)},Math.random()*200);
    });
}

const mostrarData = async()=>{
    data1 = await obtenerInformacionNew("1: Pedro");
    data2 = await obtenerInformacionNew("2: Alan");
    data3 = await obtenerInformacionNew("3: Lucas");
    console.log(data1);
    console.log(data2);
    console.log(data3);
}

mostrarData();