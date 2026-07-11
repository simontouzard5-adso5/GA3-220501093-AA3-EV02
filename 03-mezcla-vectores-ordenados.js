// Importamos readline-sync para leer datos desde la consola
const readline = require('readline-sync');

/**
 * Pide al usuario los números de un vector, validando que:
 * 1. Cada valor sea un número válido.
 * 2. Cada valor (a partir del segundo) sea mayor o igual al anterior (orden ascendente).
 * @param {string} nombreVector - Nombre descriptivo para mostrar al usuario (ej: "Vector 1")
 * @param {number} tamano - Cantidad de elementos que debe tener el vector
 * @returns {number[]} - El array ya lleno y validado
 */
function leerVectorOrdenado(nombreVector, tamano) {
    const vector = [];

    console.log(`\n===== Ingreso de ${nombreVector} (${tamano} números, orden ascendente) =====`);

    for (let k = 0; k < tamano; k++) {
        let numero;
        let esValido = false;

        while (!esValido) {
            const entrada = readline.question(`${nombreVector} - Posición ${k + 1}: `);
            numero = Number(entrada);

            if (Number.isNaN(numero)) {
                console.log("⚠️  Error: debes ingresar un número válido. Intenta de nuevo.");
            } else if (k > 0 && numero < vector[k - 1]) {
                console.log(`⚠️  Error: el valor debe ser mayor o igual a ${vector[k - 1]} (el anterior). Intenta de nuevo.`);
            } else {
                esValido = true;
            }
        }

        vector[k] = numero;
    }

    return vector;
}
// ==========================================
// LLENAR AMBOS VECTORES
// ==========================================

const vector1 = leerVectorOrdenado("Vector 1", 5);
const vector2 = leerVectorOrdenado("Vector 2", 5);

console.log("\n✅ Ambos vectores fueron ingresados correctamente.");

// ==========================================
// MEZCLA DE LOS DOS VECTORES ORDENADOS
// ==========================================

const resultado = []; // aquí iremos armando la lista final combinada
let i = 0; // puntero que recorre vector1
let j = 0; // puntero que recorre vector2

// Mientras AMBOS vectores todavía tengan elementos sin comparar
while (i < vector1.length && j < vector2.length) {
    if (vector1[i] <= vector2[j]) {
        resultado.push(vector1[i]);
        i++;
    } else {
        resultado.push(vector2[j]);
        j++;
    }
}

// Si a vector1 le quedaron elementos pendientes, los copiamos todos
while (i < vector1.length) {
    resultado.push(vector1[i]);
    i++;
}

// Si a vector2 le quedaron elementos pendientes, los copiamos todos
while (j < vector2.length) {
    resultado.push(vector2[j]);
    j++;
}
// ==========================================
// MOSTRAR RESULTADO FINAL
// ==========================================

console.log("\n===== RESULTADO DE LA MEZCLA =====");
console.log(`Vector 1: [${vector1.join(", ")}]`);
console.log(`Vector 2: [${vector2.join(", ")}]`);
console.log(`Resultado combinado: [${resultado.join(", ")}]`);