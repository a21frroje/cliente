// Función para convertir un número binario a decimal


document.addEventListener("DOMContentLoaded",function(){
    let Binario = document.getElementById("binario");
    let Octal = document.getElementById("octal");
    let Decimal = document.getElementById("decimal");
    let Hexadecimal = document.getElementById("hexadecimal");

    function compruebaBinario(number) {
        // Verificar si la entrada es un número binario válido
        if (/^[01]+$/.test(number)) {
            // Convertir el número binario a decimal usando parseInt
            var all = Array()
            all.push(parseInt(number, 2));
            all.push(parseInt(number, 8));
            all.push(parseInt(number, 16));
            return all;
        } else {
            return "Por favor, introduce un número binario válido.";
        }
    }
    function compruebaOctal(number) {
        // Verificar si la entrada es un número binario válido
        if (/^[012345678]+$/.test(number)) {
            // Convertir el número binario a decimal usando parseInt
            var all = Array()
            all.push(parseInt(number, 1));
            all.push(parseInt(number, 2));
            all.push(parseInt(number, 16));
            return all;
        } else {
            return "Por favor, introduce un número binario válido.";
        }
    }
    Binario.addEventListener("blur", function() {
        document.getElementById("decimal").value = compruebaBinario(Binario.value)[0];
        document.getElementById("octal").value = compruebaBinario(Binario.value)[1];
        document.getElementById("hexadecimal").value = compruebaBinario(Binario.value)[2];
    })
    Octal.addEventListener("blur", function() {
        document.getElementById("binario").value = compruebaOctal(Octal.value)[0];
        document.getElementById("decimal").value = compruebaOctal(Octal.value)[1];
        document.getElementById("hexadecimal").value = compruebaOctal(Octal.value)[2];
    })
})
