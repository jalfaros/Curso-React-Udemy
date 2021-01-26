// Peticiones async - await 

// El async se puede utilizar para retornar lo que devuelve una 
// función en una promesa

const getImagen = async () => {

    try {
        
        const apiKey = 'ZDA25Wf5sNzzKpxpID0cz6Wn5JwLGirN';
        const response = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
        const { data } = await response.json();
        
        const { url } = data.images.original;
        const img =  document.createElement('img');
        img.src = url;
        document.body.append( img );
    
    } catch(error){
        console.log(error)
    }

}




getImagen();



 

