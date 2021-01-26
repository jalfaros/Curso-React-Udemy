// Desestructuración de arrays

const personajes = ['Iron Man', 'Spiderman', 'Ant-Man'];
const [ , , p3 ] = personajes;
console.log( p3 )


const retornarArreglo = () => (
    ['ABC', '123']
)

// Desestructurar un arreglo desde un return de una función
const [ letras, numeros ] = retornarArreglo();

console.log( letras, numeros )

// Tarea... 
// 1. Nombre
// 2. setNombre

const usaEstado = ( valor ) => {
    return [ valor, () => {console.log('Hola mundillo')} ];
}

// Este es el useState y se desestructura la función

const [ nombre, setNombre ] = usaEstado('Perro');

console.log(nombre);
setNombre();