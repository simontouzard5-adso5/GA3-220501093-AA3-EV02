// Importamos readline-sync para poder leer datos desde la consola
const readline = require('readline-sync');

/**
 * Función que pide un número al usuario y lo valida.
 * Repite la pregunta hasta que el usuario ingrese un número mayor que cero.
 * @param {string} mensaje - Texto que se muestra al usuario al pedir el dato
 * @returns {number} - El número válido ingresado
 */
function leerNumeroPositivo(mensaje) {
    let valor; // aquí guardaremos el número ya validado
    let esValido = false; // bandera que controla el ciclo de validación

    while (!esValido) {
        const entrada = readline.question(mensaje); // leemos como texto
        valor = Number(entrada); // convertimos el texto a número

        // Number.isNaN detecta si la conversión falló (ej: el usuario escribió "abc")
        if (Number.isNaN(valor)) {
            console.log("⚠️  Error: debes ingresar un número válido. Intenta de nuevo.");
        } else if (valor <= 0) {
            console.log("⚠️  Error: el valor debe ser mayor que cero. Intenta de nuevo.");
        } else {
            esValido = true; // el dato pasó las dos validaciones, salimos del ciclo
        }
    }

    return valor;
}
// ==========================================
// FUNCIONES DE CÁLCULO - TRIÁNGULO
// ==========================================

/**
 * Calcula el área de un triángulo.
 * @param {number} base - Base del triángulo
 * @param {number} altura - Altura del triángulo
 * @returns {number} - Área calculada
 */
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

/**
 * Calcula el perímetro de un triángulo.
 * @param {number} a - Lado a
 * @param {number} b - Lado b
 * @param {number} c - Lado c
 * @returns {number} - Perímetro calculado
 */
function calcularPerimetroTriangulo(a, b, c) {
    return a + b + c;
}

// ==========================================
// FUNCIONES DE CÁLCULO - RECTÁNGULO
// ==========================================

function calcularAreaRectangulo(base, altura) {
    return base * altura;
}

function calcularPerimetroRectangulo(base, altura) {
    return 2 * (base + altura);
}

// ==========================================
// FUNCIONES DE CÁLCULO - CUADRADO
// ==========================================

function calcularAreaCuadrado(lado) {
    return lado ** 2; // el operador ** eleva al cuadrado (lado * lado)
}

function calcularPerimetroCuadrado(lado) {
    return 4 * lado;
}

// ==========================================
// FUNCIONES DE CÁLCULO - CÍRCULO
// ==========================================

function calcularAreaCirculo(radio) {
    return Math.PI * (radio ** 2); // Math.PI es el valor de π que ya trae JavaScript
}

function calcularPerimetroCirculo(radio) {
    return 2 * Math.PI * radio; // fórmula correcta: circunferencia = 2πr
}
// ==========================================
// PROGRAMA PRINCIPAL - MENÚ
// ==========================================

let opcionFigura; // guardará qué figura eligió el usuario en cada vuelta del menú

do {
    // Mostramos el menú de figuras
    console.log("\n===== CALCULADORA DE FIGURAS PLANAS =====");
    console.log("1. Triángulo");
    console.log("2. Rectángulo");
    console.log("3. Cuadrado");
    console.log("4. Círculo");
    console.log("5. Salir");

    // Leemos la opción y la convertimos a número
    opcionFigura = Number(readline.question("Elige una opción (1-5): "));

    // Validamos que la opción exista en el menú
    if (opcionFigura >= 1 && opcionFigura <= 4) {

        // Preguntamos si quiere área o perímetro
        console.log("\n1. Área");
        console.log("2. Perímetro");
        const opcionOperacion = Number(readline.question("Elige una opción (1-2): "));

        let resultado; // aquí guardaremos el resultado final, sea cual sea la figura

        switch (opcionFigura) {
            case 1: // Triángulo
                if (opcionOperacion === 1) {
                    const base = leerNumeroPositivo("Ingresa la base: ");
                    const altura = leerNumeroPositivo("Ingresa la altura: ");
                    resultado = calcularAreaTriangulo(base, altura);
                } else {
                    const a = leerNumeroPositivo("Ingresa el lado a: ");
                    const b = leerNumeroPositivo("Ingresa el lado b: ");
                    const c = leerNumeroPositivo("Ingresa el lado c: ");
                    resultado = calcularPerimetroTriangulo(a, b, c);
                }
                break;

            case 2: // Rectángulo
                if (opcionOperacion === 1) {
                    const base = leerNumeroPositivo("Ingresa la base: ");
                    const altura = leerNumeroPositivo("Ingresa la altura: ");
                    resultado = calcularAreaRectangulo(base, altura);
                } else {
                    const base = leerNumeroPositivo("Ingresa la base: ");
                    const altura = leerNumeroPositivo("Ingresa la altura: ");
                    resultado = calcularPerimetroRectangulo(base, altura);
                }
                break;

            case 3: // Cuadrado
                const ladoCuadrado = leerNumeroPositivo("Ingresa el lado: ");
                resultado = (opcionOperacion === 1)
                    ? calcularAreaCuadrado(ladoCuadrado)
                    : calcularPerimetroCuadrado(ladoCuadrado);
                break;

            case 4: // Círculo
                const radio = leerNumeroPositivo("Ingresa el radio: ");
                resultado = (opcionOperacion === 1)
                    ? calcularAreaCirculo(radio)
                    : calcularPerimetroCirculo(radio);
                break;
        }

        console.log(`\n✅ El resultado es: ${resultado.toFixed(2)}`);

    } else if (opcionFigura !== 5) {
        console.log("\n⚠️  Opción inválida. Debes elegir un número entre 1 y 5.");
    }

} while (opcionFigura !== 5);

console.log("\n¡Gracias por usar la calculadora!");