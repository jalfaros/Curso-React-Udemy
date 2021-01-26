

const persona = {
     nombre : 'Jose Ignacio',
     apellido : 'Alfaro',
     edad : 21,
     direccion: {
         provincia: 'Alajuela',
         ciudad: 'Pital',
         zipCode: 21006
     }
};

console.table( persona );

//console.log( persona );

//Crear la copia de un objeto a otra variable usando spread
// Se utilizan los tres puntos
const persona2 = { ... persona }
persona2.nombre = 'Peter'
persona2.apellido = 'Parker'

console.table( persona2 );
