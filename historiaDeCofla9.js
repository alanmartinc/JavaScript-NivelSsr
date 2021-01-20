// Historia de Cofla 9 - Soluciones A
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado");

boton.addEventListener("click",(e)=>{
    let error = validarCampos();
    if (error[0]){
        resultado.innerHTML = error[1];
        resultado.classList.add("red")
    } else {
        resultado.innerHTML = "Solicitud enviada correctamente";
        resultado.classList.add("green");
        resultado.classList.remove("red");
    }
});

const validarCampos = ()=>{
    let error = [];
    if(nombre.value.length < 5 || nombre.value.length > 40){
        error[0] = true;
        error[1] = "El nombre es inválido"
        return error;
    } else if(email.value.length < 5 || email.value.length > 40 || email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        error[0] = true;
        error[1] = "El mail es inválido";
        return error;
    } else if(materia.value < 4 || materia.value > 40){
        error[0] = true;
        error[1] = "La materia no existe";
    }
    error[0] = false;
    return error;
}

// Historia de Cofla 9 - Soluciones B
alumnos = [{
    nombre: "Alan Cabot",
    email: "alan@gmail.com",
    materia: "Fisica 3"
},{
    nombre: "Karin Guerra",
    email: "karin@gmail.com",
    materia: "Calculo 2"
},{
    nombre: "Jorge Ramirez",
    email: "jorge@gmail.com",
    materia: "Literatura"
},{
    nombre: "Facundo Roberto",
    email: "robert@gmail.com",
    materia: "Quimica"
}];

const botonNew = document.querySelector(".boton-confirmar");
const contenedor = document.querySelector(".grid-container");

for(alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlCode = `
    <div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
        <select class="semana-elegida">
            <option value="Semana 1">Semana 1</option>
            <option value="Semana 2">Semana 2</option>
        </select>
    </div>`;

    contenedor.innerHTML+= htmlCode;
}

botonNew.addEventListener("click",()=>{
    let confirmar = confirm("¿Realmente quieres confirmar las mesas?");
    if(confirmar){
        document.body.removeChild(botonNew);
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas = document.querySelectorAll(".semana-elegida");
        for(elemento in elementos){
            semana = elementos[elemento];
            semana.innerHTML = semanasElegidas[elemento].value;
        }
    }
});