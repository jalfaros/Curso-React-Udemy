
const urlBase = 'http://api.giphy.com/v1/gifs/';
const apiKey = `ZDA25Wf5sNzzKpxpID0cz6Wn5JwLGirN`;


export const genGifs = async ( category ) => {

    const url = `${ urlBase }search?q=${ category }&limit=5&api_key=${ apiKey }`;
    const resp = await fetch( url );
    const { data }  = await resp.json();

    // Aquí se está filtrando la data para solo dejarnos lo importante
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url:img.images?.downsized_medium.url
        }
    })

    return gifs;
}   