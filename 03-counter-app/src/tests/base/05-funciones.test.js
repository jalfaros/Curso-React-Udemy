import { getUser, getUsuarioActivo } from '../../base/05-funciones'

// El to equal se hace cuando se quiere verificar la igualdad entre objetos 

describe('pruebas en 05 funciones', () => {

    // getUser

    test('Debe de retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect( userTest ).toEqual( user );
    })

    // getUserActivo

    test('retornar un objeto con el nombre que recibe', () => {
        
        const nombre = 'Nacho';

        const activeUser = getUsuarioActivo( nombre );
        
        expect( activeUser ).toEqual( {
            uid: 'ABC567',
            username: nombre

        } );

    })
    
    
})
