import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner";

import {collection, getDocs, getFirestore, where, query,} from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();



useEffect (() => {
  const db = getFirestore();
  const itemsCollection = collection(db, "items");
  const q = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;
  getDocs(q).then(snapShot => {
      if (snapShot.size > 0 ) { setItems(snapShot.docs.map(documento => ({id:documento.id, ...documento.data()})));
      } else {
        
}

})
}, [id])

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
