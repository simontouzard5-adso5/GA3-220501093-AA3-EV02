// Importamos readline-sync para leer datos desde la consola
const readline = require('readline-sync');

const personas = []; // array principal, irá creciendo con cada persona que se agregue

/**
 * Pide al usuario entre 1 y 3 canciones (artista y título de cada una).
 * @returns {Array<{artista: string, titulo: string}>} - Array de objetos canción
 */
function leerCanciones() {
    const canciones = [];
    let cantidad;
    let esValida = false;

    while (!esValida) {
        const entrada = readline.question("¿Cuántas canciones favoritas quieres registrar (1 a 3)? ");
        cantidad = Number(entrada);

        if (Number.isNaN(cantidad) || cantidad < 1 || cantidad > 3) {
            console.log("⚠️  Error: debes ingresar un número entre 1 y 3. Intenta de nuevo.");
        } else {
            esValida = true;
        }
    }

    for (let k = 0; k < cantidad; k++) {
        console.log(`\n-- Canción ${k + 1} --`);
        const artista = readline.question("Artista: ");
        const titulo = readline.question("Título: ");
        canciones.push({ artista, titulo }); // creamos el objeto canción y lo agregamos
    }

    return canciones;
}
// ==========================================
// AGREGAR UNA PERSONA
// ==========================================

/**
 * Pide los datos personales y las canciones favoritas de una persona,
 * y la agrega al array principal "personas".
 */
function agregarPersona() {
    console.log("\n===== REGISTRO DE NUEVA PERSONA =====");

    const nombre = readline.question("Nombre completo: ");
    const cedula = readline.question("Número de cédula: ");
    const fechaNacimiento = readline.question("Fecha de nacimiento (DD/MM/AAAA): ");
    const correo = readline.question("Correo electrónico: ");
    const ciudadResidencia = readline.question("Ciudad de residencia: ");
    const ciudadOrigen = readline.question("Ciudad de origen: ");

    const canciones = leerCanciones(); // reutilizamos la función del Bloque 1

    // Armamos el objeto persona completo, con la sintaxis abreviada
    const persona = {
        nombre,
        cedula,
        fechaNacimiento,
        correo,
        ciudadResidencia,
        ciudadOrigen,
        canciones
    };

    personas.push(persona); // agregamos la persona al array principal

    console.log(`\n✅ ¡${nombre} fue agregado(a) correctamente! (Total de personas: ${personas.length})`);
}
// ==========================================
// MOSTRAR UNA PERSONA POR POSICIÓN
// ==========================================

/**
 * Muestra toda la información de una persona, dada su posición visible
 * para el usuario (empezando en 1, no en 0).
 * @param {number} posicionVisible - Posición que el usuario ingresó (1, 2, 3...)
 */
function mostrarPersona(posicionVisible) {
    const indiceReal = posicionVisible - 1; // convertimos de "posición humana" a índice de array

    if (indiceReal < 0 || indiceReal >= personas.length) {
        console.log(`\n⚠️  Error: no existe una persona en la posición ${posicionVisible}. Hay ${personas.length} persona(s) registrada(s).`);
        return; // salimos de la función inmediatamente, no hay nada más que mostrar
    }

    const persona = personas[indiceReal];

    console.log(`\n===== DATOS DE LA PERSONA ${posicionVisible} =====`);
    console.log(`Nombre: ${persona.nombre}`);
    console.log(`Cédula: ${persona.cedula}`);
    console.log(`Fecha de nacimiento: ${persona.fechaNacimiento}`);
    console.log(`Correo: ${persona.correo}`);
    console.log(`Ciudad de residencia: ${persona.ciudadResidencia}`);
    console.log(`Ciudad de origen: ${persona.ciudadOrigen}`);

    console.log(`\nCanciones favoritas:`);
    for (let k = 0; k < persona.canciones.length; k++) {
        const cancion = persona.canciones[k];
        console.log(`  ${k + 1}. "${cancion.titulo}" - ${cancion.artista}`);
    }
}
// ==========================================
// MENÚ PRINCIPAL
// ==========================================

let opcion;

do {
    console.log("\n===== ENCUESTA MUSICAL - EMISORA =====");
    console.log("1. Agregar una persona");
    console.log("2. Mostrar información de una persona");
    console.log("3. Salir");

    opcion = Number(readline.question("Elige una opción (1-3): "));

    switch (opcion) {
        case 1:
            agregarPersona();
            break;

        case 2:
            if (personas.length === 0) {
                console.log("\n⚠️  Todavía no hay personas registradas. Agrega alguna primero.");
            } else {
                const posicion = Number(readline.question(`¿Qué persona quieres ver? (1 a ${personas.length}): `));
                mostrarPersona(posicion);
            }
            break;

        case 3:
            console.log("\n¡Gracias por usar el sistema de encuesta musical!");
            break;

        default:
            console.log("\n⚠️  Opción inválida. Debes elegir 1, 2 o 3.");
    }

} while (opcion !== 3);