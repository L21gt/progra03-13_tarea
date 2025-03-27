// creacion de funcion separadora de tareas
const separador = (tarea) => {
    console.log(" ");
    console.log("************************************");
    console.log(`"Tarea: ${tarea}"`);
    console.log("------------------------------------");
}


// Utilice la propiedad .length para encontrar el último elemento de una matriz.
separador("Encontrar ultimo elemento de matriz"); // separador de tarea

const frutas = ['manzana', 'banana', 'naranja', 'uva'];
const ultimoElemento = frutas[frutas.length - 1];

console.log(`El array de frutas es: [${frutas}]`); // 'manzana,banana,naranja,uva'
console.log(`El ultimo elemento del array es "${ultimoElemento}"`); // 'uva'

// Utilice otros métodos en la documentación de MDN que no se mencionan en la lección.
separador("Metodos de MDN no mencionados"); // separador de tarea

const matrizAnidada = [[1, 2], [3, 4], [5]];
const matrizPlana = matrizAnidada.flat();

console.log(`La matriz anidada inicial es ${JSON.stringify(matrizAnidada)}`); 
console.log(`La matriz plana resultante es [${matrizPlana}]`); // [1, 2, 3, 4, 5]


// Tome todos los elementos de una matriz y cree una cadena.
separador("Crear cadena de elementos de matriz"); // separador de tarea

const palabras = ['Hola', 'mundo', 'JavaScript'];
const cadena = palabras.join(' '); // Une con espacios

console.log(`La matriz de palabras es [${palabras}]`); // 'Hola,mundo,JavaScript'
console.log(`La matriz en cadena resultante es "${cadena}"`); // 'Hola mundo JavaScript'


// Encuentra el valor de retorno de una llamada .push()a una matriz
separador("Valor de retorno de push()"); // separador de tarea  

const numeros = [10, 20, 30];
console.log(`El array original de numeros es [${numeros}]`); // [10, 20, 30]
const nuevoLength = numeros.push(40); // Añade 40 al final

console.log(`Despues de agregar "40" al array original, El valor de retorno de la llamada ".push()" es "${nuevoLength}"`); // 4 (nueva longitud del array)
console.log(`El nuevo array de numeros es [${numeros}]`); // [10, 20, 30, 40]


//Anidar una matriz dentro de una matriz.
separador("Anidar matriz dentro de matriz"); // separador de tarea

const matrizPrincipal = [
    [1, 2, 3],
    ['a', 'b', 'c'],
    [true, false]
  ];
  
  console.log("Las matrices anidadas dentro de otra matriz serian: "+ JSON.stringify(matrizPrincipal));
  /* 
  [
    [1, 2, 3],
    ['a', 'b', 'c'],
    [true, false]
  ]
  */


  // Acceder a un elemento de la matriz anidada.
separador("Acceder a un elemento de matriz anidada"); // separador de tarea

const elementoAnidado = matrizPrincipal[1][2]; // Fila 1, Columna 2

console.log("En la matriz anidada anterior quiero buscar 'matrizPrincipal[1][2]' (fila 1, columna 2)"); // 'c'
console.log(`El elemento resultante de la "fila 1, columna 2" de la matriz es "${elementoAnidado}"`); // 'c'