import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, removeItem, clear, sumProducts } = useContext(CartContext);

    

    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <h1>El carrito esta vacio</h1>
                        <h3>Podemos ayudarte a encontrar lo que buscas</h3>
                        <Link to={"/"} className="btn btn-dark rounded-pill mt-5">Volver a la Página Principal</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Imagen</th>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.image} alt={item.title} width={"100px"}/></td>
                                    <td>{item.title}</td>
                                    <td>${item.prize}</td>
                                    <td>
                                        <button type="button" className="btn btn-danger" onClick={() => removeItem(item.id)}>
                                            <img src="/images/trash.svg" alt="Eliminar Producto" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan="3"><b>Total a Pagar</b></td>
                                <td><b>${sumProducts()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="button" className="btn btn-secondary" onClick={clear}>Vaciar Carrito</button>
                    <Link to= {"/checkout"} type="button" className="btn btn-secondary">Ir al CheckOut</Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
