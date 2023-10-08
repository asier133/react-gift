import { useState, useEffect } from "react";

import { getGifs } from "../helpers/getGifts";

export const useFetchGifts = ( categoria ) => {
 
    const [ imagenes, setImagenes ] = useState( [] );
    const [ isLoading, setIsLoading ] = useState(true);

    const getImagenes = async() => {
        const nuevasImagenes = await getGifs(categoria);
        setImagenes(nuevasImagenes);
        setIsLoading(false);
    }

    useEffect( () => {
        getImagenes();
    }, [] );

    return {
        imagenes,
        isLoading
    };
};