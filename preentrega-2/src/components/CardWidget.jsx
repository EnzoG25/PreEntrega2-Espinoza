
import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom";
import imagenc from "../assets/images/carrito.png"

const CardWidget = () => {
    const {totalProducts} = useContext(CartContext);

    if (totalProducts() > 0) {

        return (
            <Link to={"/cart"}>
                <div>
                    <button id="boton" type="button" className="btn btn-light position-relative pt-4">
                        
                        <img src={imagenc} alt="Cart" width={35} id="logocarro"/>
                        <span className="position-absolute top-1 start-1 translate-middle p-1 bg-red">{totalProducts()}</span>
                    </button>
                </div>
            </Link>
        )


    }

    

}

export default CardWidget