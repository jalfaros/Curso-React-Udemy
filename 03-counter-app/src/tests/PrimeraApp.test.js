import React from 'react';
import { shallow } from 'enzyme';


import PrimeraApp from '../PrimeraApp';


describe('Pruebas en <PrimeraApp />', () => {

    // test('debe de mostrar el mensaje "Hola, soy Nacho"', () => {
    //     const saludo = 'Hola, soy Nacho'
    //     /*
    //         Se puede hacer de la manera de abajo o se puede desestructurar
    //         el wrapper de una sola vez para obtener la función
    //     */
    //     //const wrapper = render( <PrimeraApp saludo =  { saludo } /> );
    //     //expect( wrapper.getByText( saludo ) ).toBeInDocument( saludo );
    //     const { getByText } = render( <PrimeraApp saludo = { saludo } /> );
    //     expect( getByText( saludo ) ).toBeInTheDocument();
        
    // });
    
    //Esta prueba se hace con Enzyme
    test('Debe de mostrar <PrimeraApp /> correctamente', () => {

        const saludo = 'Hola, soy Nacho';
        const wrapper = shallow( <PrimeraApp saludo = { saludo } /> );


        expect( wrapper ).toMatchSnapshot();

    });
    
    
    test('debe de mostrar el sub enviado por props ', () => {
        
        const saludo = 'Hola, soy Nacho';
        const sub = 'Soy estudiante del TEC';
        
        const wrapper = shallow(

            <PrimeraApp 
                saludo = { saludo }
                subtitle = { sub }
           />
        );

        
        const textParrafo = wrapper.find('p').text();
        
        expect( textParrafo ).toBe( sub );

    });
    





});
