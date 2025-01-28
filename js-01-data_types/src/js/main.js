console.log("que tal este es un texto");
console.log("botas de trabajo");
/*
- String template literals ` ` (backtick) 
  Es una forma más flexible y legible de trabajar con cadenas 
  de texto. Utilizan comillas invertidas (``) en lugar de 
  comillas simples o dobles y permiten incrustar expresiones
  dentro de la cadena utilizando la interpolación ${}.
*/
// Mostrar en console "El resultado de 3 * 4 = 12 pesos"
let valor1 = 3;
let valor2 = 4;
console.log(`el resultado de la suma de ${valor1} + ${valor2} es ${valor1+valor2}`)
console.log(typeof 3);

console.log( `Valor entero seguro en JavaScript: ${Number.MAX_SAFE_INTEGER} `); // 9007199254740991
console.log( `MAX_SAFE_INTEGER + 1: ${Number.MAX_SAFE_INTEGER + 1 }`); 
console.log( `MAX_SAFE_INTEGER + 2: ${Number.MAX_SAFE_INTEGER + 2 }`); 
console.log( `MAX_SAFE_INTEGER + 3: ${Number.MAX_SAFE_INTEGER + 3 }`); 
console.log( `MAX_SAFE_INTEGER + 4: ${Number.MAX_SAFE_INTEGER + 4 }`); 
console.log( `MAX_SAFE_INTEGER + 5: ${Number.MAX_SAFE_INTEGER + 5 }`);

const myBigInt =9007199254740991n;
console.log(typeof myBigInt);
console.log(`Resultado de myBigint + 1n: ${myBigInt +1n}`);
console.log(`Resultado de myBigint + 1n: ${myBigInt +2n}`);
console.log(`Resultado de myBigint + 1n: ${myBigInt +3n}`);
console.log(`Resultado de myBigint + 1n: ${myBigInt +4n}`);
console.log(`Resultado de myBigint + 1n: ${myBigInt +5n}`);
console.log(`Resultado de myBigint + 1n: ${myBigInt +6n}`);
/* null */

myAge = null; // intensionalmente se borra el tipo de dato
  // NO es correcto usar typeof con un dato null
 console.log(`Tipo de dato en myAge: ${typeof myAge }`); // object
 console.log(`myAge es null?  ${ myAge === null } `);// true

 console.log( String( true ) ); // "true"
 console.log( String( null ) ); // 
 console.log( String( undefined ) ); // "undefined"
 console.log( String( [] ) ); // empty Array-> ""
 console.log( String( [2,3,4,5,null,3] ) ); // "2,3,4,5,,3"

 /* convercion */
 
// conversión implícita a number ============================================
const costo = "100";
const costoConIVA = costo * 1.16 ; // 116.00 conversión implícita de string a number
// conversión explícita a number ============================================
const precioCroquetas = "2000";
const precioJabon = "300.50";
const precioVitaminas = "600.30";
const costoTotal =  precioCroquetas + precioJabon + precioVitaminas; // 2000300.50600.30
console.log( costoTotal );
/*
 Number() Vs parseInt() y parseFloat()
  - Number convierte enteros y decimales
  - Number devuelve NaN si la cadena contiene algún caracter no numérico
  - Con parseInt y parseFloat, si la entrada comienza con un valor no numérico devuelve NaN
  - parseInt convierte solo pa parte entera
  - parseFloat convierte la parte entera y decimales
  - parseInt y parseFloat realiza la conversión hasta encontrar un caracter no numérico
*/
console.log(Number("67.55"));
console.log(parseInt("67.55"));
console.log(parseFloat("67.55"));

console.log(Number("67.55 dolares"));
console.log(parseInt("$67.55 dolarucos"));
console.log(parseFloat("$67.55 dolarucos"));

console.log(Number("67-55"));
console.log(parseFloat("67-55"));
console.log(parseFloat("67-55"));

console.log(Number(true));
console.log(Number(false));

console.log(Number([]));
console.log(Number([30]));
console.log(Number([30,33]));



/* conversion a tipo booleano
en esta conversion  los siguientes valores son false
""(empy string) 0 null NAN null undefined */

console.log( Boolean(1) ); // true
console.log( Boolean(10000) ); // true
console.log( Boolean(-1000) ); // true
console.log( Boolean(0) ); // false
console.log( Boolean(NaN) ); // false
console.log( Boolean("") ); // false
console.log( Boolean(" ") ); // true
console.log( Boolean("1") ); // true
console.log( Boolean("0") ); // true

// Resumen:
// Number()
// [] (empty array) -> 0, [30]-> 30, [30,30]->NaN, false-> 0, true-> 1
// String()
// [] -> "", [12,2]->"12,2", function(){}-> "function(){}"
// {} ->"[object,object]", {clave:valor, age:17} ->"[object,object]"
// Para convertir un objeto a string, la forma correcta es usar
// el método JSON.stringyfy( objeto );









