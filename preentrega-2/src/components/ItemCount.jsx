
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {

    const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [visible, setVisible] = useState(true);

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

    
const addToCart = () => {
    if (contador <= itemStock) {
        setItemStock(itemStock - contador);
        onAdd(contador); 
        setContador(1);
        setVisible(false);
        
    }

}
    useEffect (() => {
        setItemStock(stock);
        setContador(1);
    }, [stock])

    return (
        <>
            {visible ? (
                <>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-light round-3" onClick={decrementar}>-</button>
                        <button type="button" className="btn btn-light round-3">{contador}</button>
                        <button type="button" className="btn btn-light round-3" onClick={incrementar}>+</button>
                    </div>
                    <div>
                        <button type="button" className="btn btn-light round-3" onClick={addToCart}>Agregar al carrito</button>
                    </div>
                </>
            ) : (
                <Link to="/cart" className="btn btn-light round-3">Terminar Mi Compra</Link>
            )}
        </>
    )

}

export default ItemCount