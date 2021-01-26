// Fetch Api


const apiKey = 'ZDA25Wf5sNzzKpxpID0cz6Wn5JwLGirN';

// Se utiliza el fetch para hacer la petición HTTP 

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)


// Promesas encadenadas
peticion
    .then( (response) =>  response.json() )
    
    .then ( ( { data } ) => {
        
        const { url } = data.images.original;
        console.log(url)

        const img = document.createElement('img');
        img.src = url;
        document.body.append( img )


    }).catch( (err) => {
        console.log(err)
    })  