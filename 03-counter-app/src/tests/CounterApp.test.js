import React, { Children } from 'react';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';



describe('pruebas del componenete <CounterApp />', () => {
    
    
    
    let wrapper; 

    // Esta es la terminación de cada test
    // Esto sirve para reiniciar el componente al estado original antes de cada prueba
    beforeEach ( () => {

        wrapper = shallow( <CounterApp /> );

    });


    test('debe de mostrar el componente correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });


    test('debe de mostrar el valor por defecto de 100', () => {
        

      const wrapper = shallow( <CounterApp value = { 100 } />);

      const defectoPrueba = wrapper.find('h2').text().trim();

      expect( defectoPrueba ).toBe( '100' );

    });


    /*
        Como hay varios botones y no tienen id ni nada, entonces se puede buscar por 
        orden de declaración.
        En esta prueba se simula el evento click
    */
    test('debe de incrementar contador con el botón +1' , () => {

        //Simular el evento click
        wrapper.find('button').at( 0 ).simulate('click');
        
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe( '11' );
    });


    test('debe de decrementar el contador cuando toco el boton -1', () => {
              
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('9');
 
    });


    test('el botón reset debe de resetear el valor por defecto con btn reset', () => {

        const wrapper = shallow( <CounterApp value = { 105 } /> );

        // Estos dos es para aumentar el valor porque sino me queda igual y la prueba
        // sería un falso positivo

        wrapper.find('button').at( 0 ).simulate('click');
        wrapper.find('button').at( 0 ).simulate('click');
        
        //Este es el botón propio del reset
        wrapper.find('button').at(1).simulate('click');

        // Se obtiene el texto del value
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe( '105' );
        
    });
    
    
    
    

});
