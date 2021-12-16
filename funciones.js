function calculo_temperatura(farenheit) {
    var centigrados = 5 / 9 * (farenheit - 32);
    return centigrados;
}


var grados_farenheit = [60, 32, 100];
var grados_centigrados = [];
var contador;



function salida() {
    for (contador = 2; contador >= 0; contador--) {
        document.write("Valor " + contador + " es " + grados_farenheit[contador] + " F ");

        document.write(" el cual es " + grados_centigrados[contador] +
            " C");

        temperatura(grados_centigrados[contador])
    }
}

function centigrados() {
    for (contador = 0; contador <= 2; contador++) {
        grados_centigrados[contador] = calculo_temperatura(grados_farenheit[contador]);
    }
}

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