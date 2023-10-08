export const getGifs = async( categoria ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=uKVuO1bIRwiwmi40sQnQDH7MkrRbTNyY&q=${categoria}&limit=10`;
    const respuesta = await fetch( url );
    const { data } = await respuesta.json();

    const gifts = data.map( img => ({
        id: img.id,
        titulo : img.title,
        url: img.images.downsized_medium.url
    }));

    return gifts;

};