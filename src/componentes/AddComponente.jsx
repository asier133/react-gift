import { useState } from "react";

export const AddComponente = ( { onNuevaCategoria } ) => {

    const [valorInput, setValorInput] = useState("");
    const inputChange = ( { target } ) => {
        setValorInput(target.value);
    };

    const onSubmit = (evento) => {
        evento.preventDefault();

        const nuevaValorInput = valorInput.trim();
        if (nuevaValorInput.length <= 1 ) return;

        //setCategorias( categorias => [ valorInput, ...categorias ] ); 

        onNuevaCategoria(nuevaValorInput);
        setValorInput("");
    };

    return (
        < form onSubmit = { onSubmit } >
            <input 
                type="text"
                placeholder="Agregar Categoria"
                value = { valorInput }
                onChange = { inputChange }
            />
        </ form >
    );

    
};