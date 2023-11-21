// Función para convertir un número binario a decimal


document.addEventListener("DOMContentLoaded",function(){
    let Binario = document.getElementById("binario");
    let Octal = document.getElementById("octal");
    let Decimal = document.getElementById("decimal");
    let Hexadecimal = document.getElementById("hexadecimal");

    function octDecimal(number) {
        return parseInt(number, 8)
    }
    function decimalHex(number) {
        return number.toString(16)
    }
    function decimalOct(number) {
        return number.toString(8)
    }
    function decimalBin(number) {
        return number.toString(2)
    }

    function compruebaBinario(number) {
        var all = Array()
        all.push(parseInt(number, 2));
        all.push(decimalOct(all[0]));
        all.push(decimalHex(all[0]));
        return all;

    }
    function compruebaOctal(number) {
        var all = Array()
        all.push(octDecimal(number));
        all.push(decimalHex(all[0]));
        all.push(decimalBin(all[0]));
        return all;
    }
    function compruebaDecimal(number) {
        var all = Array();
        number = parseInt(number);
        all.push(decimalBin(number));
        all.push(decimalHex(number));
        all.push(decimalOct(number));
        return all;
    }
    function compruebaHexa(number) {
        var all = Array();
        all.push(parseInt(number, 16));
        all.push(decimalBin(all[0]));
        all.push(decimalOct(all[0]));
        return all;
    }
    Binario.addEventListener("blur", function() {
        document.getElementById("decimal").value = compruebaBinario(Binario.value)[0];
        document.getElementById("octal").value = compruebaBinario(Binario.value)[1];
        document.getElementById("hexadecimal").value = compruebaBinario(Binario.value)[2];
    })
    Octal.addEventListener("blur", function() {
        document.getElementById("decimal").value = compruebaOctal(Octal.value)[0];
        document.getElementById("hexadecimal").value = compruebaOctal(Octal.value)[1];
        document.getElementById("binario").value = compruebaOctal(Octal.value)[2];
    })
    Decimal.addEventListener("blur", function() {
        document.getElementById("binario").value = compruebaDecimal(Decimal.value)[0];
        document.getElementById("hexadecimal").value = compruebaDecimal(Decimal.value)[1];
        document.getElementById("octal").value = compruebaDecimal(Decimal.value)[2];
    })
    Hexadecimal.addEventListener("blur", function() {
        document.getElementById("decimal").value = compruebaHexa(Hexadecimal.value)[0];
        document.getElementById("binario").value = compruebaHexa(Hexadecimal.value)[1];
        document.getElementById("octal").value = compruebaHexa(Hexadecimal.value)[2];
    })
})
