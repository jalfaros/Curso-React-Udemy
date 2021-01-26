// Desestructuración de objetos 
// *** Importante

const person = {

    name: 'Jose',
    age: 21,
    pass: 'ultrasecretpass'
}

// console.log(person.name);
// console.log(person.age);
// console.log(person.pass)

// asignacion desestructurante

const { name, age, pass } = person;

console.log(name);
console.log(age);
console.log(pass);


// Se puede desestructurar directamente en el argumento, por lo que es más simple
// Se debe tener cuidado porque debe de existir la llave de la cual estoy - 
// desestructurando 

const context = ( { pass, age } ) => ({
        
    ageTest: age,
        passTest : pass,
        lating: {
            lat: 12.23121,
            lng: 14.34563,
        }
    })

// Se puede desestructurar también si una función me devuelve un objeto
// también se puede desestructurar un objeto que venga dentro de otro, como en
// el ejemplo de la latitud y longitud
const { ageTest, passTest, lating: { lat, lng } } = context( person ); // Person aquí hace referencia a mi objeto


console.log( ageTest, passTest );
console.log( lat, lng )