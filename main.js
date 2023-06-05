// Variable global para almacenar el nombre
let nombre;

// Función para calcular el préstamo
function calcularPrestamo() {
    // Ciclo para solicitar un nombre válido
    do {
        nombre = prompt("Hola, ingrese su nombre por favor:");
        if (nombre === "") {
            alert("¡Ingrese un nombre válido!");
        }
    } while (nombre === "");

    let monto, tasa, plazo;

    // Ciclo para solicitar un monto numérico válido
    do {
        monto = parseFloat(prompt("Ingrese el monto del préstamo a solicitar:"));
        if (isNaN(monto)) {
            alert("¡Ingrese un valor numérico para el monto!");
        }
    } while (isNaN(monto));

    // Ciclo para solicitar una tasa numérica válida
    do {
        tasa = parseFloat(prompt("Ingrese la tasa de interés (%) del préstamo:"));
        if (isNaN(tasa)) {
            alert("¡Ingrese un valor numérico para la tasa de interés!");
        }
    } while (isNaN(tasa));

    // Ciclo para solicitar un plazo numérico válido
    do {
        plazo = parseInt(prompt("Ingrese el plazo en meses que desea para pagar:"));
        if (isNaN(plazo)) {
            alert("¡Ingrese un valor numérico para el plazo en meses!");
        }
    } while (isNaN(plazo));

    let pagosMensuales = calcularPagosMensuales(monto, tasa, plazo);
    let tiempoAmortizacion = calcularTiempoAmortizacion(plazo);
    let costoTotal = calcularCostoTotal(pagosMensuales, plazo);

    // Mostrar los detalles del préstamo
    alert(`
    Hola ${nombre}, estos son los detalles de tu préstamo:
    Pagos mensuales de: ${pagosMensuales.toFixed(2)} S/.
    Tiempo de amortización: ${tiempoAmortizacion} meses.
    Total a pagar del préstamo: ${costoTotal.toFixed(2)} S/.
    `);
}

// Función para calcular los pagos mensuales
function calcularPagosMensuales(monto, tasa, plazo) {
    let tasaMensual = tasa / 100 / 12;
    let pagosMensuales = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -plazo));

    return pagosMensuales;
}

// Función para calcular el tiempo de amortización
function calcularTiempoAmortizacion(plazo) {
    return plazo;
}

// Función para calcular el costo total del préstamo
function calcularCostoTotal(pagosMensuales, plazo) {
    let costoTotal = pagosMensuales * plazo;
    return costoTotal;
}

// Ciclo para solicitar y calcular múltiples préstamos
let respuesta;

do {
    calcularPrestamo();
    respuesta = prompt("¿Desea calcular otro préstamo? (S/N)").toLowerCase();
    
    if (respuesta !== "s" && respuesta !== "n") {
        alert("¡Ingrese el carácter correcto! Por favor, ingrese 'S' para sí o 'N' para no.");
    }
} while (respuesta !== "n");

// Mensaje de despedida
alert("Gracias por utilizar nuestro sistema de préstamos. ¡Vuelva pronto!");
