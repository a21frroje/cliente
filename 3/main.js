// Función para convertir un número binario a decimal


document.addEventListener("DOMContentLoaded",function(){
    let radio = document.getElementById("radio");
    let area = document.getElementById("area");
    area.value = calculaArea(radio.value)
    function calculaArea(radio) {
        // Asegurarse de que el radio sea un número positivo
        if (radio <= 0 || isNaN(radio)) {
            return "El radio debe ser un número positivo."; 
        }
        // Calcular el área
        let area = Math.PI * Math.pow(radio, 2);
        return area.toFixed(4);
    }

    radio.addEventListener("blur", function() {
        area.value = calculaArea(this.value);
    })
})
