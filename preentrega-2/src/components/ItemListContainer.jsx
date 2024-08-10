import { useEffect, useState } from "react";
import arrayProductos from "../assets/images/json/productos.json";
import { Link } from "react-router-dom";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner";

import {collection, getDocs, getFirestore, where, limit, query, addDoc} from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  // useEffect(() => {
  //   const promesa = new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(id ? arrayProductos.filter((item) => item.category == id) : arrayProductos)
  //     }, 2000);
  //   });
  //   promesa.then((response) => {
  //     setItems(response);
  //   });
  // }, [id]);

  // como acceder a un elemento

    // useEffect(() => {
    //     const db = getFirestore();
    //     const docRef = doc(db, "items", "xGI7FIe0hTFmnr633r7F");
    //     getDoc(docRef).then(documento => {
    //       if (documento.exists()) {
    //         setItems({id:documento.id, ...documento.data()})
    //       } else {
    //         console.error("Error! No existe el documento");
    //       }
    //     })
    // }, [])

    // como acceder a una coleccion

    //     useEffect (() => {
    //         const db = getFirestore();
    //         const itemsCollection = collection(db, "items");
    //     getDocs(itemsCollection).then(snapShot => {
    //         if (snapShot.size > 0 ) {
    //             setItems(snapShot.docs.map(documento => ({id:documento.id, ...documento.data()})))
    //         } else {
    //         console.log("Error!")
    //         }
    //       })

    





 useEffect (() => {
  const db = getFirestore();
  const itemsCollection = collection(db, "items");
  const q = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;
  getDocs(q).then(snapShot => {
      if (snapShot.size > 0 ) { setItems(snapShot.docs.map(documento => ({id:documento.id, ...documento.data()})));
      } else {
        console.log("Error");
}

})
}, [id])

    // }, [])

        // useEffect (() => {
        //     const db = getFirestore();
        //     const itemsCollection = collection(db, "items");
        //     arrayProductos.forEach(item => {
        //       addDoc(itemsCollection, item)
        //     })
        //     console.log("Proceso de importacion finalizado")
            
        // }, []);



  return (
    <>
      {id ? "" : <Banner />}
      <div className="container">
        <div className="row">
          <ItemList items={items} /> 
          
          
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
