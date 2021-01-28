describe('Pruebas en el demo.test.js', () =>{
    
    test( 'Equals Strings', () =>  {
    
        // 1. Inicialización
        const mensaje = 'Hola mundo';
    
        // 2. Estimulo
        const mensaje2 = "Hola mundo";
    
        // 3. Observar comportamiento
        expect( mensaje ).toBe( mensaje2 );
    
    });

});


 