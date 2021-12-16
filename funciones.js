/**
 * Calculo de la temperatura en centígrados
 * @param {number} farenheit - temperatura en grados farenheit
 * @returns {number} - temperatura en centígrados
 */
function calculo_temperatura(farenheit) {
    /**
     * Temperatura en centígrados
     * @type {number}
     */
    var centigrados = 5 / 9 * (farenheit - 32);
    return centigrados;
}

/**
 * Array con las temperaturas en farenheit
 * @type {Array<number>}
 */
var grados_farenheit = [60, 32, 100];
/**
 * Array con las temperaturas en centígrados
 * @type {Array<number>}
 */
var grados_centigrados = [];
/**
 * Auxiliar, cuenta el numero de vueltas en 'salida()' y 'centigrados()'
 * @type {number}
 */
var contador;


/**
 * Muestra en el HTML los calculos realizados
 */
function salida() {
    for (contador = 2; contador >= 0; contador--) {
        document.write("Valor " + contador + " es " + grados_farenheit[contador] + " F ");

        document.write(" el cual es " + grados_centigrados[contador] +
            " C");

        temperatura(grados_centigrados[contador])
    }
}
/**
 * Temperatura en centigrados para cada posicion del array 'grados_centigrados'
 */
function centigrados() {
    for (contador = 0; contador <= 2; contador++) {
        grados_centigrados[contador] = calculo_temperatura(grados_farenheit[contador]);
    }
}
/**
 * Sensacion de temperatura para cada posición de 'grados_centigrados'
 * @param {number} aux_centigrados 
 */
function temperatura(aux_centigrados) {
    if (aux_centigrados > 25) {
        document.write(" Hace calor <br />");
    } else
        if (aux_centigrados < 15) {
            document.write(" Hace frio <br />");
        } else {
            document.write(" Ni fu ni fa <br />")
        }
}