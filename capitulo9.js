/*
Eventos:
*/

// Event Handlers
const ejemplo2 = document.querySelector(".Ejemplo2");

ejemplo2.onclick = ()=>{
    alert("Ejemplo2");
}

// Event Listeners
const ejemplo3 = document.querySelector(".Ejemplo3");

ejemplo3.addEventListener("click",saludar);

function saludar(){
    alert("Ejemplo3");
}

// Ejemplo addEventListener / removeEventListener
const ejemplo4 = document.querySelector(".Ejemplo4");

ejemplo4.addEventListener("click",saludar);
 
function saludar(){
    alert("Ejemplo4");
    ejemplo4.removeEventListener("click",saludar);
}

// El objeto Event
const ejemplo5 = document.querySelector(".Ejemplo5");

ejemplo5.addEventListener("click",(e)=>{
    console.log(e.target);
});

// Flujo de Eventos o Event Flow: Orden que se ejecuta los eventos, hay dos tipos de orden: (Event Bubbling vs Event Capturing).
// Event Bubbling: Se ejecuta del más especifico hasta el menos especifico.
// Event Capturing: Ponemos TRUE al contenedor que esta arriba de todo, para que se ejecute primero.
const ejemplo6 = document.querySelector(".Ejemplo6");
const contenedor1 = document.querySelector(".contenedor-1")
const contenedor2 = document.querySelector(".contenedor-2")

contenedor1.addEventListener("click",(e)=>{
    alert("Di click en el contenedor Rojo");
}, true);

contenedor2.addEventListener("click",(e)=>{
    alert("Di click en el contenedor Azul");
}, true);

ejemplo6.addEventListener("click",(e)=>{
    alert("Di click en el botón");
});

// EventPropagation: Paramos el evento para que no se propague:
const ejemplo7 = document.querySelector(".Ejemplo7");
const contenedor3 = document.querySelector(".contenedor-3");
const contenedor4 = document.querySelector(".contenedor-4");

contenedor3.addEventListener("click",(e)=>{
    alert("Di click en el contenedor Rojo");
});

ejemplo7.addEventListener("click",(e)=>{
    alert("Di click en el botón");
    e.stopPropagation();
});

contenedor4.addEventListener("click",(e)=>{
    alert("Di click en el contenedor Azul");
});

// Eventos del Mouse
const ejemplo8 = document.querySelector(".Ejemplo8");
const contenedor5 = document.querySelector(".contenedor-5");
const contenedor6 = document.querySelector(".contenedor-6");

contenedor5.addEventListener("dblclick",(e)=>{
    alert("Di doble click en el contenedor Rojo");
});

// MouseOver: Ocurre cuando el puntero se mueve sobre un elemento o sobre uno de sus hijos.
ejemplo8.addEventListener("mouseover",(e)=>{
    alert("Di Mouse Over en el botón");
});

// MouseOut: Ocurre cuando se mueve el puntero fuera de un elemento o de sus elementos secundarios.
contenedor6.addEventListener("mouseout",(e)=>{
    alert("Di Mouse Out en el contenedor Azul");
});

const ejemplo9 = document.querySelector(".Ejemplo9");
const contenedor7 = document.querySelector(".contenedor-7");
const contenedor8 = document.querySelector(".contenedor-8");

// ContextMenu: Ocurre con un click en el boton derecho de un elemento para abrir un menú contextual.
contenedor7.addEventListener("contextmenu",(e)=>{
    alert("Di click derecho en el contenedor Rojo");
});

// MouseEnter: Ocurre cuando el puntero se mueve sobre un elemento (Especial para Internet Explorer).
ejemplo9.addEventListener("mouseenter",(e)=>{
    alert("El puntero se mueve dentro de el botón");
});

// MouseLeave: Ocurre cuando el puntero se mueve fuera de un elemento.
contenedor8.addEventListener("mouseleave",(e)=>{
    alert("El puntero se mueve fuera del contenedor Azul");
});

const ejemplo10 = document.querySelector(".Ejemplo10");
const contenedor9 = document.querySelector(".contenedor-9");

// MouseDown: Ocurre cuando un usuario apreta un boton del mouse sobre un elemento.
contenedor9.addEventListener("mousedown",(e)=>{
    alert("Aprete un boton sobre el contenedor Rojo");
});

// MouseUp: Ocurre cuando un usuario suelta un botón del mouse sobre un elemento.
ejemplo10.addEventListener("mouseup",(e)=>{
    alert("Solte el boton sobre el botón");
});

// Eventos del Teclado
const input = document.querySelector(".input-prueba");

// KeyDown: Ocurre cuando una tecla se deja de presionar.
input.addEventListener("keydown",(e)=>{
    console.log("Una tecla fue presionada");
});

// KeyPress: Ocurre cuando una tecla se presiona y suelta en un elemento.
input.addEventListener("keypress",(e)=>{
    console.log("Un usuario presiono una tecla y la soltó");
});

// KeyUp: Ocurre despues de que los dos eventos anteriores hayan concluido consecutivamente.
input.addEventListener("keyup",(e)=>{
    console.log("Una tecla fue soltada");
});

// Eventos de la Interfaz

// Error: Ocurre cuando sucede un error durante la carga de un archivo multimedia.
const img = document.querySelector(".img-prueba");

img.addEventListener("error",()=>{
    console.log("Ha sucedido un error");
});

// Load: Ocurre cuando un objeto se ha cargado.
window.addEventListener("load",()=>{
    console.log("Ha cargado el body");
});

// BeforeUnload: Ocurre antes de que el documento este a punto de descargarse.
addEventListener("beforeunload",()=>{
    console.log("Te estas por ir del sitio");
});

// Unload: Ocurre una vez que se ha descargado una página.
addEventListener("unload",()=>{
    console.log("Te fuiste del sitio");
});

// Resize: Ocurre cuando se cambia el tamaño de la vista del documento.
addEventListener("resize",()=>{
    console.log("Se ha actualizado la resolución");
});

// Scroll: Ocurre cuando se desplaza la barra de desplazamiento de un elemento.
addEventListener("scroll",()=>{
    console.log("Se ha actualizado la resolución");
});

// Select: Ocurre después de que el usuario selecciona algún texto de <input> o <textarea>
const inputSelect = document.querySelector(".input-select");
inputSelect.addEventListener("select",(e)=>{
    console.log(e.target.selectionStart, e.target.selectionEnd);
});

const inputKeyUp = document.querySelector(".input-keyup");
const seleccionado = document.querySelector(".seleccionado");

inputKeyUp.addEventListener("keyup",(e)=>{
    let tecla = e.key;
    nuevoContenido = `La última tecla presionada fue: <b>${tecla}</b>`;
    seleccionado.innerHTML = nuevoContenido;
});

// Timers (Temporizadores)

// setTimeOut: Se ejecuta una vez
const temporizador = setTimeout(()=>{
    console.log("Hola");
},2000);

// Se finaliza
clearTimeout(temporizador);

// Se ejecuta infinita cantidad de veces
const intervalo = setInterval(()=>{
    console.log("Chau");
},2000);

// Se finaliza
clearInterval(intervalo);