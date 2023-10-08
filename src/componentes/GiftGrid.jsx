import { GiftItem } from "./GiftItem";
import { useFetchGifts } from "../hooks/useFetchGifts";



export const GiftGrid = ({ categoria }) => {
    
    const { imagenes, isLoading} = useFetchGifts( categoria );

    return (
        <>
            <h3>{categoria}</h3>
            
            { isLoading && ( <h2>Cargando ...</h2>) }

            <div className="card-grid">
                {
                    imagenes.map( (imagen)  => (
                        <GiftItem 
                        key = { imagen.id }
                        { ... imagen }
                        />
                    ))
                }                
            </div>
        </>
    );
};