// Indica qué es un Set y crea uno partiendo del array [1, 2, 3, 4, 4]. Justifica su tamaño
var miSet = new Set([1, 2, 3, 4, 4]);
console.log(miSet.size); // Devuelve 4 (porque elimina los duplicados)

// Justifica por qué funciona el encadenamiento en los métodos de set "new Set().add(11).add(22)"
console.log("El encadenamiento en los métodos de Set funciona porque los métodos que modifican el conjunto (add, delete, clear) retornan el propio objeto Set, lo que permite encadenar llamadas a estos métodos.");
var miSetEncadenado = new Set().add(11).add(22);
console.log(miSetEncadenado); // Devuelve Set { 11, 22 }

// Indica cómo se devuelve un valor de un set
console.log(miSet[0]); // Devuelve Set { 1, 2, 3, 4 }

// Comparativa entre un array y un set: búsqueda de elementos, eliminación de elementos, búsqueda del elemento NaN, control de duplicados
//busqueda array
var miArray = [1, 2, 3, 4, 5];
console.log(miArray.indexOf(3));
//busqueda set
miSet = new Set([1, 2, 3, 4, 5]);
console.log(miSet.has(3));
//eliminacion array
miArray = [1, 2, 3, 4, 5];
var indice = miArray.indexOf(3);
miArray.splice(indice, 1);
console.log(miArray);
//eliminacion set
miSet = new Set([1, 2, 3, 4, 5]);
miSet.delete(3);
console.log(miSet);
//busqueda de NaN en array no se puede pero en set
miSet = new Set([1, 2, NaN, 4, 5]);
console.log([...miSet].findIndex(Number.isNaN));
//control de duplicados de array
var miArrayConDuplicados = [1, 2, 2, 3, 4, 4, 5];
var miArraySinDuplicados = [...new Set(miArrayConDuplicados)];
console.log(miArraySinDuplicados);

//control de duplicados de set
var miSetConDuplicados = new Set([1, 2, 2, 3, 4, 4, 5]);
console.log([...miSetConDuplicados]);

// Indica qué es un Map y crea uno partiendo del array. Partiendo de él, crea tres arrays: Uno con las claves, otro con los valores y otro con los objetos.
var miArray = [
    ['clave1', 'valor1'],
    ['clave2', 'valor2'],
    ['clave3', 'valor3']
];

// Crear un Map a partir del array
var miMap = new Map(miArray);

// Obtener arrays de claves, valores y objetos
var clavesArray = Array.from(miMap.keys());
var valoresArray = Array.from(miMap.values());
var objetosArray = Array.from(miMap.entries());

console.log(clavesArray);
console.log(valoresArray);
console.log(objetosArray);
// Demuestra que un Map admite claves de cualquier tipo: cadenas, null, NaN, null, funciones...
// Crear un Map con claves de diferentes tipos
var miMapConTipos = new Map([
    ['cadena', 'Soy una cadena'],
    [null, 'Soy null'],
    [NaN, 'Soy NaN'],
    [3.14, 'Soy un número'],
    [{}, 'Soy un objeto'],
    [function() {}, 'Soy una función']
]);
console.log(miMapConTipos);

// Crea una función "quitaLosRepes(array)" que devuelva un array con los elementos sin repetir. Utiliza la característica del objeto Set: no admite valores duplicados
function quitaLosRepes(array) {
    var setSinRepes = new Set(array);

    var arraySinRepes = Array.from(setSinRepes);

    return arraySinRepes;
}

var arrayConRepes = [1, 2, 3, 1, 2, 4];
var arraySinRepes = quitaLosRepes(arrayConRepes);

console.log(arraySinRepes);

// Averigua mediante código si un WeakSet admite objetos primitivos. Captura la excepción.
var weakSet = new WeakSet();

try {
    weakSet.add('Hola');
    console.log('Objeto primitivo agregado correctamente al WeakSet.');
} catch (error) {
    console.error('Error: No se pueden agregar objetos primitivos a un WeakSet.');
}
