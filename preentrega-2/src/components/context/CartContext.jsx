import { createContext, useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {

        

        if (isInCart(item.id)){
            
            const product = cart.find( prod => prod.id == item.id);
            console.log("Esta el producto!");
            product.quantity += quantity
            console.log("cantidad", quantity);
            setCart([...cart]);

        } else {
            setCart([...cart, {...item, quantity:quantity}])
            console.log({cart})
        }
        console.log({cart})
    }

    const removeItem = (id) => {
        const items = cart.filter(item => item.id != id);
        setCart([...items]);

    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        return cart.some(item => item.id == id); 
    }

    const totalProducts = () => {
        return cart.reduce((acum, item) => acum += item.quantity, 0);
    }

    const sumProducts = () => {
        return cart.reduce((acum, item) => acum += item.quantity * item.prize, 0);
    }

    return (<CartContext.Provider value={{ cart, addItem, removeItem, clear, totalProducts, sumProducts, getFirestore, collection, addDoc}}>

        {children}
    </CartContext.Provider>
    );
}

export default CartContextProvider