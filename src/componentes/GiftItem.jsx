
export const GiftItem = ( {titulo, url, id} ) => {
    
    return (
        <div className="card">
            <img src={url} alt={titulo}/>
            <p>{titulo}</p>
        </div>
    );
};