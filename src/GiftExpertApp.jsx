import { useState } from "react";
import { AddComponente, GiftGrid } from "./componentes";


export const GiftExpertApp = () => {

    //hooks
    const [categorias, setCategorias] = useState(["one punch"]);

    //Funciones
    const onAddCategoria = ( nuevaCategoria ) => {

        if(categorias.includes(nuevaCategoria)) return; 

        setCategorias( [ nuevaCategoria, ...categorias ] );
        // setCategorias( categorias => [ ...categorias, "Simposns"] );
    };

    return (
        <>
            <h1>GiftExpertApp</h1>

            <AddComponente 
            onNuevaCategoria = { onAddCategoria }
            />

            { 
                categorias.map( categoria => 
                    (
                        <GiftGrid 
                        key = {categoria} 
                        categoria = { categoria } 
                        />
                    )
                )
            }

        </>
    );
};