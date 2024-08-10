import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";


const Checkout = () => {
    const { cart, sumProducts, getFirestore, collection, addDoc } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");


    const generarOrden = () => {
        if (nombre == "") {
            return false;
        }
        if (email == "") {
            return false;
        }
        if (telefono == "") {
            return false;
        }
        
        const order = {
            buyer : {name:nombre, phone:telefono, email:email},
            items : cart.map(item => ({id:item.id, title:item.title, price:item.prize})),
            total : sumProducts()

        }

       


        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order).then(response => {
        console.log(response);
        setOrderId(response.id);
});
        

    }


    return (
        <div className="container">
            <div className="row">
                <div className="col my-5">
                <form>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}}  />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">E-Mail</label>
                        <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label">Telefono</label>
                        <input type="text" className="form-control"  onInput={(e) => {setTelefono(e.target.value)}}/>
                    </div>
                        <button type="button" className="btn btn-primary" onClick={generarOrden}>Generar Orden</button>
                </form>
                </div>
                <div className="col my-5">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Imagen</th>
                                <th>Producto</th>
                                <th>Precio</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.image} alt={item.title} width={"100px"}/></td>
                                    <td>{item.title}</td>
                                    <td>${item.prize}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan="3"><b>Total a Pagar</b></td>
                                <td><b>${sumProducts()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="row my-5">
                    <div className="col text-center">
                        { orderId ? <div className="alert alert-light" role="alert">
                        <h3>Gracias por tu compra!</h3>
                        <p>Tu Número de Compra es: <b>{orderId}</b></p>
                    </div> : ""}
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );

}

export default Checkout