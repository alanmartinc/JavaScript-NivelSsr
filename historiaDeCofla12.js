const materiasHTML = document.querySelector(".materias");

const materias = [
    {
        nombre: "Fisica 1",
        nota: 7
    },
    {
        nombre: "Calculo 3",
        nota: 8
    },
    {
        nombre: "Bases de datos 3",
        nota: 9
    },
    {
        nombre: "Matemáticas discretas 2",
        nota: 8
    },
    {
        nombre: "Programación 4",
        nota: 7
    }
];

const obtenerMateria = (id)=>{
    return new Promise((resolve,reject)=>{
        materia = materias[id];
        if(materia == undefined) reject("La materia no existe");
        else setTimeout(()=>{resolve(materia)},Math.random()*400);
    });
}

const devolverMaterias = async ()=>{
    let materia = [];
    for(let i=0; i<materias.length; i++){
        materia[i] = await obtenerMateria(i);
        let newHTMLCode = `
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
        </div>`;
        materiasHTML.innerHTML += newHTMLCode;
    }
}

devolverMaterias();