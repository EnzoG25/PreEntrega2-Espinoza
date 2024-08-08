import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);

  const onAdd = (quantity) => {
    addItem(item, quantity);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3 offset-md-2">
            <img src={item.image} className="card-img-top" alt={item.name} width={"100px"}/>
          </div>
          <div className="col-md-3 text-center">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <div className="alert alert-light" role="alert">
              ¡Con Visa, Mastercard y Cabal tenes hasta 6 cuotas sin interes!
            </div>
            <ItemCount stock={item.stock} onAdd={onAdd} />
            <p>
              <b>${item.prize}</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
