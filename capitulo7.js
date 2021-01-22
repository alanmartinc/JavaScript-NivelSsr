/*
Window: Hereda las propiedades de EventTarget
*/

// Open: Carga un recurso en el contexto de un nuevo navegador o uno que ya existe.
let youtubeURL = "https://youtube.com";
let ventana = window.open(youtubeURL);

// Close: Cierra la ventana actual, o la ventana en la que se llamó.
ventana.close();

// Closed: Indica si la ventana referenciada está cerrada o no.
ventana.closed;

// Stop: Detiene la carga de recursos en el contexto de navegación actual.
window.stop();

// Alert: Muestra un cuadro de alerta con el contenido especificado y un botón aceptar.
window.alert("Hola Mundo!");

// Print: Abre el cuadro de diálogo Imprimir para imprimir el documento actual.
window.print();

// Prompt: Abre un cuadro de diálogo con un mensaje que solicita al usuario un dato (String).
window.prompt("Dame un dato");

// Confirm: Abre un cuadro de diálogo con un mensaje y dos botones: Aceptar y Cancelar.
respuesta = window.confirm("¿Estas seguro que deseas salir del sitio web?");
console.log(respuesta);

// Screen: Devuelve una referencia al objeto de pantalla asociado con la ventana.
const screen = window.screen;
console.log(screen);
console.log(screen.availHeight);

// ScreenLeft: Devuelve la distancia horizontal entre el borde izquierdo del navegador y el borde izquierdo de la pantalla.
const screenLeft = window.screenLeft;
console.log(screenLeft);

// ScreenTop: Devuelve la distancia vertical entre el borde superior del navegador y el borde superior de la pantalla.
const screenTop = window.screenTop;
console.log(screenTop);

// ScrollX: Devuelve el número de pixeles que el documento se desplaza actualmente horizontalmente.
const scrollX = window.scrollX;
console.log(scrollX);

// ScrollY: Devuelve el número de pixeles que el documento se desplaza actualmente verticalmente.
const scrollY = window.scrollY;
console.log(scrollY);

// Scroll: Desplaza la ventana a un lugar particular en el documento. (con options y con posiciones).
window.scroll(0,100);

// ResizeBy: Cambia el tamaño de la ventana actual en una cantidad especifica.
let googleURL = "https://www.google.com/";
let ventanaDos = window.open(googleURL);

ventanaDos.resizeBy(100,200);

// ResizeTo: Redimensiona dinámicamente la ventana.
ventanaDos.resizeTo(100,200);

// MoveBy: Mueve la ventana en una ubicación relativa.
ventanaDos.moveBy(100,200);

// MoveTo: Mueve la ventana en una ubicación absoluta.
ventanaDos.moveTo(100,200);

/*
Objetos Barprop: En caso de que sean visible nos van a decir true, sino nos dicen false.
*/

// Locationbar
// Menubar
// personalbar
// Scrollbars
// Statusbar
// Toolbar

/*
Location: 
*/

// window.location.href: Devuelve el href (URL) de la página actual.
const href = window.location.href;
console.log(href);

// window.location.hostname: Devuelve el nombre de dominio del servidor web.
const hostName = window.location.hostname;
console.log(hostName);

// window.location.parhname: Devuelve la ruta y el nombre de archivo de la página actual.
const parhName = window.location.pathname;
console.log(parhName);

// window.location.protocol: Devuelve el protocolo web utilizado (http: o https:).
const protocol = window.location.protocol;
console.log(protocol);

// window.location.assign: Carga un nuevo documento.
const assign = window.location.assign;
console.log(assign);