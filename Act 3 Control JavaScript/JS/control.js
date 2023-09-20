alert("Conectado");
/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */

function elVotante(edadPersona) {
    if (edadPersona >= 18) {
        console.log("La persona puede votar!!!");
    } else {
        console.log("La persona es menor de edad, no puede votar");
    }
}

/** Ejercicio 2
 * 
 * Desarrolla un programa que permita obtener el promedio de un/a alumno/a
 * recibiendo como parametro 4 calificaciones
 * 
 * Si el promedio es aprobatorio (mayor o igual a 7) imprimir aprobado
 * en el caso de que no sea un promedio aprobatorio imprimir reporobado
 * 
 * Consideraciones: utilizar la estructura if-else
 * 
 */

function calificacionesAlumno(matematicas, español, historia, geografia) {
    const promerdioAlumno = (matematicas + español + historia + geografia) / 4;
    if (promerdioAlumno >= 7) {
        console.log("Aprobado");
    } else {
        console.log("Reprobado");
    }
}
/** Ejercicio 4
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

let numeroDivisor = 6;
if ((numeroDivisor % 7 === 0) || (numeroDivisor % 8 === 0)) {
    console.log("Verdadero");
} else {
    console.log("Falso")
}

/** Ejercicio 5
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */

function numeroAleatorio(numeroDiv) {
    if ((numeroDiv % 4 === 0) || (numeroDiv % 9 === 0)) {
        console.log("Verdadero");
    } else {
        console.log("Falso")
    }
}

/** Ejercicio 6
 * 
 * Crear un programa que funcione como una calculadora simple
 * que realice las operaciones aritmeticas basicas
 * 
 *  -suma
 *  -resta
 *  -multiplicacion
 *  -division
 * 
 * Debe recibir como parametros la operacion a realizar y dos numeros
 * Dependiendo de la opcion que se indique, realizar la operacion correspondiente
 * 
 * 1. suma
 * 2. resta
 * 3. multiplicacion
 * 4. division
 * 
 * Consideraciones: utilizar la estructura switch
 */
let resultado
function calculadoraSimple(op, num1, num2) {
    op = op.toUpperCase();
    op = op.toLowerCase();
    switch (op) {
        case "sum":
            resultado = num1 + num2;
            console.log(`El resultado es: ${resultado}`)
            break;

        case "res":
            resultado = num1 - num2;
            console.log(`El resultado es: ${resultado}`)
            break;

        case "mul":
            resultado = num1 * num2;
            console.log(`El resultado es: ${resultado}`)
            break;

        case "div":
            resultado = num1 / num2;
            console.log(`El resultado es: ${resultado}`)
            break;

        default:
            console.log("Ingresa de nuevo por favor")
    }
}


/** Ejercicio 7
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */


function cuevanaPelis(categoriaPelicula) {
    categoriaPelicula = categoriaPelicula.toUpperCase();
    categoriaPelicula = categoriaPelicula.toLowerCase();
    switch (categoriaPelicula) {
        case ("accion"):
            console.log("Te recomiendo ver Django Unchained")
        break;
            case ("drama"):
            console.log("Te recomiendo ver La lista de Schindler la cual narra un periodo en la vida de un empresario aleman que salvó a mas de mil judíos durante el Holocausto")
        break;
            case ("comedia"):
            console.log("Te recomiendo ver ¿Que pasó ayer? una pelicula excelente llena de momentos graciosos")
        break;
            case ("romance"):
            console.log("Te recomiendo ver Quiero Robarme a la Novia, una excelente pelicula la cual te demuestra a veces la persona mas adecuada a ti esta mas cerca de lo que piensas")
        break;
            case ("suspenso"):
            console.log("Te recomiendo ver Sin Novedad En El Frente, una pelicula que demuestra los horrores de la guerra desde la perspectiva de un grupo de jovenes")
        break;
            case ("terror"):
            console.log("te recomiendo ver El Resplandor una pelicula basada en la novela de Stephen King")

        default:
            console.log("introduce la categoria");
    }
}

/** Ejercicio 8
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */
function cajeroAutomatico(opcionCajero){
    if (opcionCajero === 1){
        console.log ("Introduce la cantidad de dinero a retirar")
    } else if(opcionCajero === 2){
        console.log ("Has elegido Transferencia monto: xxxx ")
    } else if(opcionCajero === 3){
        console.log ("Has elegido realizar un deposito por el monto: xxxx")
    } else if(opcionCajero === 4){
        console.log ("Has elegido realizar un pago de servicios elige la compañía")
    } else {
        console.log ("Retirar tarjeta")
    }
}
/** Ejercicio 9
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 */

function monedaConvertir(divisa, peso) {    
    switch (divisa) {
        case "USD":
            conversion = (peso *.0586);
            console.log(`La conversion de su dinero es ${conversion} USD`)
            break;
        case "Euro":
            conversion = (peso *.0548);
            console.log(`La conversion de su dinero es ${conversion} EUR`)
            break;
        case "Yen":
            conversion = (peso *8.651);
            console.log(`La conversion de su dinero es ${conversion} JYP`)
            break;
        case "Libra":
            conversion = (peso *.0472);
            console.log(`La conversion de su dinero es ${conversion} GBP`)
            break;
        case "Libra":
            conversion = (peso * .0525);
            console.log(`La conversion de su dinero es ${conversion} CHF`)
            break;
        default:
            console.log("Ingresa de nuevo por favor")
    }
}


/** Ejercicio 10
 * 
 * Realizar un programa que calcule un descuento del 10% a un producto si se ingresa el codigo
 * de descuento correcto
 * 
 * Debe recibir como parametros el precio del producto
 * y el codigo de descuento
 * 
 * Sugerencia de codigo de descuento DESCUENTO10
 * 
 * Consideracion: utilizar la estructura if-else
 * 
 */
function codigoDescuento(descuento, precio){
    if (descuento === "DIS10" ){
        Discount =((10/100)*precio);
        CostoFinal = precio-Discount;
        return CostoFinal;
    }else{
        console.log ("Codigo incorrecto")
    }
}

