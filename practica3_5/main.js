// Indica qué es un Set y crea uno partiendo del array [1, 2, 3, 4, 4]. Justifica su tamaño
var miSet = new Set([1, 2, 3, 4, 4]);
console.log(miSet); // Devuelve Set { 1, 2, 3, 4 }
console.log(miSet.size); // Devuelve 4 (porque elimina los duplicados)

// Justifica por qué funciona el encadenamiento en los métodos de set "new Set().add(11).add(22)"
console.log("El encadenamiento en los métodos de Set funciona porque los métodos que modifican el conjunto (add, delete, clear) retornan el propio objeto Set, lo que permite encadenar llamadas a estos métodos.");
var miSetEncadenado = new Set().add(11).add(22);
console.log(miSetEncadenado); // Devuelve Set { 11, 22 }

// Indica cómo se devuelve un valor de un set

// Comparativa entre un array y un set: búsqueda de elementos, eliminación de elementos, búsqueda del elemento NaN, control de duplicados

// Crea un set donde se almacenen los alumnos ausentes. Repítelos y muéstralos.

// Indica qué es un Map y crea uno partiendo del array. Partiendo de él, crea tres arrays: Uno con las claves, otro con los valores y otro con los objetos.

// Demuestra que un Map admite claves de cualquier tipo: cadenas, null, NaN, null, funciones...

// Crea un map donde se almacenen los alumnos ausentes. Repítelos y muéstralos.

// Crea una función "quitaLosRepes(array)" que devuelva un array con los elementos sin repetir. Utiliza la característica del objeto Set: no admite valores duplicados

// Averigua mediante código si un WeakSet admite objetos primitivos. Captura la excepción.

// Averigua mediante código si  WeakSet o WeakMap son iterables. Puedes utilizar for..of
