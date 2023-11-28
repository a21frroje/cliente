// Indica los tres argumentos del método forEach a un array. Demuestra su uso mediante un ejemplo.
var frutas = ['Manzana', 'Banana', 'Cereza'];

// Utilizar forEach para imprimir cada elemento y su índice
frutas.forEach(function(fruta, indice) {
    console.log(`indice ${indice}: ${fruta}`);
});

// Indica la utilidad del operador in con los arrays. Demuestra su uso mediante un ejemplo.
var frutas = ['Manzana', 'Banana', 'Cereza'];

console.log('Banana' in frutas); // Devuelve true
console.log('Uva' in frutas); // Devuelve false

// Indica la función que comprueba si un objeto es o no un Array. Demuestra su uso mediante un ejemplo.
var array = [1, 2, 3];
var noArray = { key: 'value' };

console.log(Array.isArray(array)); // Devuelve true
console.log(Array.isArray(noArray)); // Devuelve false

// Crea  una función que cree un array de la dimensión indicada, cuyo contenido sean los números naturales comenzando desde 0
function crearArray(dimension) {
    return Array.from({ length: dimension }, (_, index) => index);
}

var resultado = crearArray(5);
console.log(resultado); // Devuelve [0, 1, 2, 3, 4]

// Crea  una función que devuelva un array con cada uno de los argumentos.
function getArgumentsArray(...args) {
    return args;
}
var result = getArgumentsArray(1, 'Hola', [2, 3]);
console.log(result); // Devuelve [1, 'Hola', [2, 3]]

// Crea  una función que devuelva un array con cada uno de los argumentos. En caso de que alguno de sus argumentos sea un array, que introduzca sus elementos uno a uno.
function combinarArgumentos(...args) {
    const resultado = [];

    args.forEach((arg) => {
    if (Array.isArray(arg)) {
        // Si el argumento es un array, introducir sus elementos uno a uno
        resultado.push(...arg);
    } else {
        // Si no es un array, simplemente agregar el argumento
        resultado.push(arg);
    }
    });
    return resultado;
}
// Ejemplo de uso
var resultado = combinarArgumentos(1, 'Hola', [2, 3], 'Mundo', [4, 5]);
console.log(resultado);// Devuelve [1, 'Hola', 2, 3, 'Mundo', 4, 5]

// Crea una función que elimine todos los undefined de un array.
function eliminarUndefined(array) {
    return array.filter((element) => element !== undefined);
}

var arrayConUndefined = [1, undefined, 'Hola', undefined, 3];
var arraySinUndefined = eliminarUndefined(arrayConUndefined);
console.log(arraySinUndefined); // Devuelve [1, 'Hola', 3]

// Indica la diferencia entre los siguientes métodos, y demuestra su uso con algunos arrays:  Array.prototype.forEach(), Array.prototype.every(), Array.prototype.some() y Array.prototype.filter()
var numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => console.log(num * 2)); // Muestra el doble de cada número

var allEven = numbers.every((num) => num % 2 === 0); // Retorna false
var someEven = numbers.some((num) => num % 2 === 0); // Retorna true
var evenNumbers = numbers.filter((num) => num % 2 === 0); // Retorna [2, 4]

console.log(allEven, someEven, evenNumbers);

// Averigua qué método es el más eficiente para manejarse con arrays.  Compruébalo mediante performance.now() o similares

// Introduce 100 elementos en un array mediante push(), unshift(), directamente, fijando tamaño en new Array...
// Introducir 100 elementos
let arr = [];

// Usando push()
for (let i = 0; i < 100; i++) {
    arr.push(i);
}
console.log(arr);
// Usando pop()
arr.forEach(element => {
    arr.pop();
});
console.log(arr);

// Usando unshift()
arr.forEach(element => {
    arr.unshift(element);
});
console.log(arr);

// Usando shift()
for (let i = 0; i < 100; i++) {
    arr.shift();
}
console.log(arr);

// Introducir 100 elementos
arr = new Array(100);
console.log(arr);

// Eliminar 100 elementos
arr = [];
console.log(arr);

// Usando índices directos
for (let i = 0; i < 100; i++) {
    arr[i] = i;
}
console.log(arr);

// Eliminar 100 elementos
arr = new Array(100);
// Asignando `undefined` a cada índice
for (let i = 0; i < 100; i++) {
    arr[i] = undefined;
}

// Eliminar 100 elementos en un array mediante pop(), shift(), directamente, fijando tamaño...
