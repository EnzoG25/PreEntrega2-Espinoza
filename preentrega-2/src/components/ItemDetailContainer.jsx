import { useEffect, useState } from "react";
import arrayProductos from "../assets/images/json/productos.json"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, getFirestore, doc} from "firebase/firestore";


const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const {id} = useParams();
    
    
    // useEffect(() => {
    //     const promesa = new Promise(resolve => {
    //         setTimeout(() => {
    //             resolve(arrayProductos.find(item => item.id == id))
    //         }, 2000)
    //     })
    //     promesa.then(response => {
    //         setItem(response)

    //     })
    // }, [id])

    useEffect(() => {
            const db = getFirestore();
            const docRef = doc(db, "items", id);
            getDoc(docRef).then(documento => {
        if (documento.exists()) {
                setItem({id:documento.id, ...documento.data()})
        } else {
                console.error("Error! No existe el documento");
    }
    })
    }, [id])



    
    return (

        <>
            <ItemDetail item={item} />
            
            
        </>


    )
}

export default ItemDetailContainer