// ----------------- Condicional if-else --------------------
/*
 Ejecuta una sentencia si una condición específica es
 evaluada como verdadera.
 Sintaxis:
    if ( condición ) sentencia;
    if ( condición ) {
        sentencias;
    }
    if ( condición ) sentencia;
    else sentencia_si_condición_es_falsa;
    if ( condición ) {
        sentencias;
    }
    else {
        sentencias;
    }
    if (condición) sentencia;
    else if (condicion 2) sentencia;
         else sentencia_si_condicion2_es_falsa;

    if ( condicion1 ) sentencias;
    else if ( condicion2 ) sentencia;
    else if ( condicion3 ) sentencia;
    else if ( condicion4 ) sentencia;
     .....
    else if ( condicionN ) sentencia;
    else condición;   
*/

const temperatura=22;
/* si temperatura es = 22 ideal
                      */
/**
 * Función que recibe la temeperatura y devuelve un mensaje:
 * Si la temperatura es = 22 grados: La temperatura de 22 grados es ideal
 * Si la temperatura es de 15 a 21 grados: La temperatura de 14 grados es fresca.
 * Si la temperatura es menor a 15 grados: La temperatura de 8 grados es fria
 * Si la temperatura es mayor a 22 grados: La temperatura de 30 grados es calurosa y le gustaría a Nan
 * @param {number} temperatura
 * @returns {string} mensaje
 */

function verificarTemperatura(temeperatura){
    let mensaje;
if (temeperatura== 22){
    mensaje=` La temperatura de ${temeperatura} grados es ideal `;

} else if (15<= temeperatura && temeperatura <= 21) {
mensaje=` La temperatura de ${temeperatura} grados es fresca `

}else if(temeperatura<=15){
    mensaje=`la temperatura de ${temeperatura} grados es fria  `;

}else{
   mensaje=`La temperatura de ${temeperatura} grados es calurosa y le gustaría a Nan`;
}

return mensaje;
}

console.log(verificarTemperatura(80));
console.log(verificarTemperatura(22));
console.log(verificarTemperatura(10));
console.log(verificarTemperatura(-3));
//--------------- Condicional Switch --------------------------
/*
 La condicional Switch evalua una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta encontrar
 la sentencia 'break' o se finalicen todas las sentencias
 de la condicional switch.
 Para comparar la condicional switch usa el operador estricto ===
 Sintaxis:
  switch (expresión) {
    case valor1:
        sentencia;
        break;
    case valor 2:
        sentencias;
        break;
    case valor n:
        sentencias;
        break
    default:
        sentencias;
        break;
  }
*/
/*
switch (temperatura) {
    case 22:
        console.log(`La temperatura de ${temperatura}🌡️ es ideal 😊👌.`);
        break;
    case 15:
        console.log("estoy en 15 grados");
    case 16:
        console.log("estoy en 16 grados");
    case 17:
        console.log("estoy en 17 grados");
    case 18:
        console.log("estoy en 18 grados");
    case 19:
        console.log("estoy en 19 grados");
    case 20:
        console.log("estoy en 20 grados");
    case 21:
        console.log(`La temperatura de ${temperatura}° es fresca.`);
        break;
    case 13:
    case 14:
        console.log(`La temperatura de ${temperatura}° es fria 🥶.`);
        break;
    default:
        console.log(`La temperatura de ${temperatura}° es calurosa y le gustaría a Nan.`);
        break;
}
        */

/**
 * Función que reciba la velocidad de un ventilador y devuelva el mensaje
 * de la velocidad del ventilador en:
 * Velocidad 0: Apagado
 * Velocidad 1: Baja
 * Velocidad 2: Media
 * Velocidad 3: Alta
 * Cualquier otro valor: Velocidad desconocida
 * @param {number} 
 * @returns {string} mensaje
 */
let mensajecase;
let velocidad;
function comprobarVelocidad(velocidad){
    let mensajecase;
switch(velocidad){
 
case 0:
    return mensajecase=`Velocidad ${velocidad} Apagado`;
    
case 1:
    return mensajecase=`Velocidad ${velocidad} baja`;
   
case 2:
    return mensajecase=`Velocidad ${velocidad} Media`;
   
case 3:
    return  mensajecase=`Velocidad ${velocidad} Alta`;
  
default:
    return  mensajecase=`Velocidad ${velocidad} desconocida`;

}}

mensajecase=comprobarVelocidad(0)
console.log(mensajecase);
console.log(mensajecase=comprobarVelocidad(1));
console.log(mensajecase=comprobarVelocidad(2));
console.log(mensajecase=comprobarVelocidad(3));


/* operador4 ternario 

condicion ? expresionverdadero : condicion si no */

let funcionEdad= edad => edad>= 18 ? "eres mayor" : "eres menor"

console.log(funcionEdad(12));
console.log(funcionEdad(19));

// ------------------- Ejercicio Estaciones del año --------------------------
/*
 Preguntar por el número de mes (prompt o DOM), del 1 al 12
 Desplegar de acuerdo al mes un Alert (mostrarlo en el DOM) la estación del año.
 mes 12,  1,  2 = invierno.
 mes  3,  4,  5 = primavera
 mes  6,  7,  8 = verano
 mes  9, 10, 11 = otoño 
 Realizar una versión con if-else-elseif y otra con switch.
*/


/* crear mensaje en el doom con una estructura Sw */

/* -------------- */
let evaluarMesAnoSw=mes=>{
    switch(mes){
        case 1:
        case 2:
        case 12:
           return`el mes ${mes} corresponde a invierno`;
        break;
        case 3:
        case 4:
        case 5:
           return   `el mes ${mes} corresponde a primavera`;
        break;
        case 6:
        case 7:
        case 8:
          return   `el mes ${mes} corresponde a verano`;
        break;
         case 9:
        case 10:
        case 11:
           return   `el mes ${mes} corresponde a otoño`;
        break;
        default: 
           return `el mes ${mes} no corresponde a ningun mes valido`;
    }
    };
   // alert((evaluarMesAnoSw(parseInt(prompt("ingresa el mes")))));
/* ------------- */

let mensajemes= evaluarMesAnoSw(parseInt(prompt("SW ingresa el mes ")));
const containerH1=document.getElementById("containerH1").innerText= mensajemes;

/* acontinuacion se hace lo mismo pero con ina estructura if */

let funcionEvaluarMesIfTernario=mes=>{
    let mensajemesIf;
    (mes == 1 ||mes == 2 ||mes== 12) ? mensajemesIf=`el mes ${mes} corresponde a invierno` :
    (mes == 3||mes == 4||mes== 5) ? mensajemesIf= `el mes ${mes} corresponde a primavera`:
    (mes == 6||mes == 7||mes== 8) ?  mensajemesIf=`el mes ${mes} corresponde a verano` :
    (mes == 9||mes == 10||mes== 11) ?  mensajemesIf= `el mes ${mes} corresponde a otoño`:
    mensajemesIf=`el mes ${mes} no corresponde a ningun mes valido`
    return mensajemesIf;
};
//console.log(funcionEvaluarMesIf(5));

let mensajemesIfTernario= funcionEvaluarMesIfTernario(parseInt(prompt("If-Ternario ingresa el mes")));
const containerH3=document.getElementById("containerH3").innerText= mensajemesIfTernario;

let evaluarMesAnoIf= mes =>{
    let mensajemesifelse;
    if (mes == 1 ||mes == 2 ||mes== 12){
         mensajemesifelse=`el mes ${mes} corresponde a invierno`;
    }else if  (mes == 3||mes == 4||mes== 5){
        mensajemesifelse=   `el mes ${mes} corresponde a primavera`;
    }else if(mes == 6||mes == 7||mes== 8) {
        mensajemesifelse= `el mes ${mes} corresponde a verano`;
    }else if(mes == 9||mes == 10||mes== 11) {
        mensajemesifelse= `el mes ${mes} corresponde a otoño`;
    }else{
         mensajemesifelse=`el mes ${mes} no corresponde a ningun mes valido`;
    }
        return  mensajemesifelse;
    };
 //   ((evaluarMesAnoIf(parseInt(prompt("ingresa el mes")))));

    let mensajemesifelse= evaluarMesAnoIf(parseInt(prompt("Else If ingresa el mes")));
const containerH2=document.getElementById("containerH2").innerText= mensajemesifelse;
