import { useEffect, useState } from "react";
import arrayProductos from "../assets/images/json/productos.json"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const {id} = useParams();
    console.log(item)
    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(arrayProductos.find(item => item.id == id))
            }, 2000)
        })
        promesa.then(response => {
            setItem(response)

        })
    }, [id])

    
    return (

        <>
            <ItemDetail item={item} />
            
            
        </>


    )
}

export default ItemDetailContainer