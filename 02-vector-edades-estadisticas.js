// Importamos readline-sync para leer datos desde la consola
const readline = require('readline-sync');

/**
 * Función que pide una edad al usuario y valida que esté en el rango 1-120.
 * Repite la pregunta hasta que el dato sea válido.
 * @param {string} mensaje - Texto que se muestra al usuario al pedir el dato
 * @returns {number} - La edad válida ingresada
 */
function leerEdadValida(mensaje) {
    let edad;
    let esValida = false;

    while (!esValida) {
        const entrada = readline.question(mensaje);
        edad = Number(entrada);

        if (Number.isNaN(edad)) {
            console.log("⚠️  Error: debes ingresar un número válido. Intenta de nuevo.");
        } else if (edad < 1 || edad > 120) {
            console.log("⚠️  Error: la edad debe estar entre 1 y 120 años. Intenta de nuevo.");
        } else {
            esValida = true;
        }
    }

    return edad;
}
// ==========================================
// LLENAR EL ARRAY CON 10 EDADES
// ==========================================

const edades = []; // creamos un array vacío que iremos llenando

console.log("\n===== REGISTRO DE EDADES =====");
console.log("Vas a ingresar las edades de 10 personas.\n");

for (let i = 0; i < 10; i++) {
    const edad = leerEdadValida(`Ingresa la edad de la persona ${i + 1}: `);
    edades.push(edad); // agregamos la edad validada al final del array
}

console.log("\n✅ ¡Registro completo!");
// ==========================================
// ANÁLISIS DEL ARRAY DE EDADES
// ==========================================

let contadorMenores = 0;        // cuenta las personas con edad < 18
let contadorMayores = 0;        // cuenta las personas con edad entre 18 y 59
let contadorAdultosMayores = 0; // cuenta las personas con edad >= 60
let sumaEdades = 0;             // acumula la suma de todas las edades

let edadMinima = edades[0]; // arrancamos con el primer valor real del array
let edadMaxima = edades[0]; // arrancamos con el primer valor real del array

for (let i = 0; i < edades.length; i++) {
    const edadActual = edades[i]; // tomamos la edad en la posición i

    sumaEdades += edadActual; // equivalente a: sumaEdades = sumaEdades + edadActual

    // Actualizamos el mínimo si encontramos una edad más baja
    if (edadActual < edadMinima) {
        edadMinima = edadActual;
    }

    // Actualizamos el máximo si encontramos una edad más alta
    if (edadActual > edadMaxima) {
        edadMaxima = edadActual;
    }

    // Clasificamos la edad en una de las 3 categorías
    if (edadActual < 18) {
        contadorMenores++;
    } else if (edadActual >= 60) {
        contadorAdultosMayores++;
    } else {
        contadorMayores++;
    }
}

const promedio = sumaEdades / edades.length;
// ==========================================
// MOSTRAR RESUMEN FINAL
// ==========================================

console.log("\n===== RESUMEN DEL GRUPO =====");
console.log(`Total de personas registradas: ${edades.length}`);
console.log(`Menores de edad: ${contadorMenores}`);
console.log(`Mayores de edad (18-59 años): ${contadorMayores}`);
console.log(`Adultos mayores (60+ años): ${contadorAdultosMayores}`);
console.log(`Edad más baja: ${edadMinima} años`);
console.log(`Edad más alta: ${edadMaxima} años`);
console.log(`Promedio de edades: ${promedio.toFixed(2)} años`);