import { useState } from "react";

const ItemCount = ({stock}) => {

    const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

    const incrementar = () => {
        if (contador < itemStock) {
            setContador(contador + 1)
    }

    }
    
    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1)
    }
    
    }
    
    const onAdd = () => {
        if (contador <= itemStock) {
            setItemStock(itemStock - contador);
            setContador(1);   
        } 
    
    }

    return (
        <>
        <section  className="botonera">
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-light round-3" onClick={decrementar}>-</button>
                <button type="button" className="btn btn-light round-3">{contador}</button>
                <button type="button" className="btn btn-light round-3"onClick={incrementar}>+</button>
            </div>
            <div>
            <button type="button" className="btn btn-light round-3" onClick={onAdd}>Agregar al carrito</button>
            </div>
        </section>
        </>
    )

}

export default ItemCount