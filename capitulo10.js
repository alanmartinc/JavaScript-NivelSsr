/*
Control de flujo y manejo de errores:
*/

// Sentecias de bloque
let nombre = "Jorge";

{
    let nombre = "Pedro";
    alert(nombre);
    {
        let nombre = "Juan";
        alert(nombre);
    }
}

alert(nombre);

// Sentencia de control de flujo (Ejemplo: IF, ELSE IF, ELSE)
if(3 > 2){
    alert("Es cierto");
}

// Sentencia de manejo de excepciones (Error, EvalError, InternalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError).


/*
Sentencia Switch:
*/

// Sintaxis, clausula, break y default
let expr = "Banana";

switch(expr){
    case "Banana": 
        console.log("Esta fruta es Amarilla");
        break;
    case "Frutilla": 
        console.log("Esta fruta es Roja");
        break;
    case "Manzana": 
        console.log("Esta fruta es Verde");
        break;
    default:
        alert("No es ninguna");
}

// Try
try {
    // console.log("Aquí no ha pasado nada");

    hsdaklfhas
}

// Nos deja controlar el error
catch(error){
    // Catch incondicional
    console.log("Lo siento, ocurrió un error de referencia");

    // TypeOf: Nos muestra el tipo de dato que le pasamos.
    console.log(typeof error);

    // Catch condicional
    if(3 > 5){
        console.log("Es correcto");
    } else {
        console.log("Es incorrecto");
    }
    // Finally: Se ejecuta a toda costa
} finally {
    console.log("Me muestro igual");
}

// Ejemplo Finally
try{
    // Throw: Muestra un error
    throw {
        error: "Error",
        info: "Info"
    }
}
catch(e){
    console.log(e.error);
    console.log(e.info);
}
finally {
}