// Función para convertir un número binario a decimal


document.addEventListener("DOMContentLoaded",function(){
    let operando1 = document.getElementById("operando1");
    let operando2 = document.getElementById("operando2");
    let seleccion = document.getElementById("sistema");
    let spanError = document.getElementById("error");
    let resultado = document.getElementById("resultado");

    function compruebainput(number) {
        switch (seleccion.value) {
            case "B":
                if (/^[0-1]+$/.test(number)) {
                    spanError.innerHTML = "";
                    return true;
                }else{
                    return spanError.innerHTML = "Numero binario erroneo" 
                }
            case "D":
                if (/^[0-9]+$/.test(number)) {
                    spanError.innerHTML = "";
                    return true;         
                }else{
                    return spanError.innerHTML = "Numero Decimal erroneo" 
                }
            case "O":
                if (/^[0-7]+$/.test(number)) {
                    spanError.innerHTML = "";
                    return true;         
                }else{
                    return spanError.innerHTML = "Numero Octal erroneo" 
                }
            case "H":
                if (/^[0-9ABCDEF]+$/i.test(number)) {
                    spanError.innerHTML = "";
                    return true;         
                }else{
                    return spanError.innerHTML = "Numero Hexadecimal erroneo" 
                }
        }
    }

    function sumaTodo(number1, number2){
        switch (seleccion.value) {
            case "B":
                return (parseInt(number1, 2)+parseInt(number2, 2)).toString(2);
            case "D":
                return parseInt(number1)+parseInt(number2);
            case "O":
                return (parseInt(number1, 8)+parseInt(number2, 8)).toString(8);
            case "H":
                return (parseInt(number1, 16)+parseInt(number2, 16)).toString(16);
        }
    }
    function multiplicaTodo(number1, number2){
        switch (seleccion.value) {
            case "B":
                return (parseInt(number1, 2)*parseInt(number2, 2)).toString(2);
            case "D":
                return parseInt(number1)*parseInt(number2);
            case "O":
                return (parseInt(number1, 8)*parseInt(number2, 8)).toString(8);
            case "H":
                return (parseInt(number1, 16)*parseInt(number2, 16)).toString(16);
        }
    }

    operando1.addEventListener("blur", function() {
        compruebainput(this.value);
    })
    operando2.addEventListener("blur", function() {
        compruebainput(this.value);
    })
    seleccion.addEventListener("blur", function(){
        seleccion = document.getElementById("sistema");
    })
    document.getElementById("sumar").addEventListener("click", function(){
        if (compruebainput(operando1.value) && compruebainput(operando2.value)) {
            resultado.value = sumaTodo(operando1.value, operando2.value);        
        }
    })
    document.getElementById("multiplicar").addEventListener("click", function(){
        if (compruebainput(operando1.value) && compruebainput(operando2.value)) {
            resultado.value = multiplicaTodo(operando1.value, operando2.value);        
        }
    })
})
