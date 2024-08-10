import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, getFirestore, doc} from "firebase/firestore";


const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const {id} = useParams();
    

    useEffect(() => {
            const db = getFirestore();
            const docRef = doc(db, "items", id);
            getDoc(docRef).then(documento => {
        if (documento.exists()) {
                setItem({id:documento.id, ...documento.data()})
        } else {

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