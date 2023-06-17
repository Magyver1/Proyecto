// Variable global para almacenar el nombre
let nombre;

// Función para solicitar el nombre
function solicitarNombre() {
    do {
        nombre = prompt("Hola, ingrese su nombre por favor:");
        if (nombre === "") {
            alert("¡Ingrese un nombre válido!");
        }
    } while (nombre === "");
}

// Función para calcular el préstamo
function calcularPrestamo() {
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

// Función para convertir de dólares a soles
function convertirDolaresASoles(dolares, tipoCambio) {
    return dolares * tipoCambio;
}

// Función para convertir de soles a dólares
function convertirSolesADolares(soles, tipoCambio) {
    return soles / tipoCambio;
}

// Función para mostrar el menú de selección
function mostrarMenu() {
    let opcion;

    do {
        opcion = prompt(`Hola ${nombre}, selecciona una de las opciones ingresando el número correspondiente: 
        Menú:
        1. Calcular un préstamo
        2. Convertir de dólares a soles
        3. Convertir de soles a dólares
        4. Salir`);

        switch (opcion) {
            case "1":
                // Lógica para calcular préstamo
                calcularPrestamo();
                break;
            case "2":
                // Lógica para convertir de dólares a soles
                let dolares;
                let validInputDolares = false;

                do {
                    let input = prompt("Ingrese la cantidad en dólares a convertir:");

                    if (isNaN(input)) {
                        alert("¡Ingrese un valor numérico para la cantidad en dólares!");
                    } else {
                        dolares = parseFloat(input);
                        validInputDolares = true;
                    }
                } while (!validInputDolares);

                let tipoCambioDolares = 3.7; // Ejemplo: tipo de cambio actual
                let solesConvertidos = convertirDolaresASoles(dolares, tipoCambioDolares);
                alert(`${dolares}$ equivale a ${solesConvertidos.toFixed(2)} S/.`);
                break;
            case "3":
                // Lógica para convertir de soles a dólares
                let soles;
                let validInputSoles = false;

                do {
                    let input = prompt("Ingrese la cantidad en soles a convertir:");

                    if (isNaN(input)) {
                        alert("¡Ingrese un valor numérico para la cantidad en soles!");
                    } else {
                        soles = parseFloat(input);
                        validInputSoles = true;
                    }
                } while (!validInputSoles);

                let tipoCambioSoles = 3.7; // Ejemplo: tipo de cambio actual
                let dolaresConvertidos = convertirSolesADolares(soles, tipoCambioSoles);
                alert(`${soles} S/. equivale a ${dolaresConvertidos.toFixed(2)}$`);
                break;
            case "4":
                alert(`Gracias por utilizar nuestra calculadora ${nombre}. ¡Vuelve pronto!`);
                break;
            default:
                alert("Ingrese una opción válida");
        }
    } while (opcion !== "4");
}


// Llamada a la función para solicitar el nombre
solicitarNombre();

// Llamada a la función para mostrar el menú
mostrarMenu();

