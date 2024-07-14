import imagenc from "../assets/images/carrito.png"

const CardWidget = () => {

    return (

        <>
            <div>
                <button id="boton" type="button" className="btn btn-light position-relative pt-4">
                    
                    <img src={imagenc} alt="Cart" width={35} id="logocarro"/>
                    <span className="position-absolute top-1 start-1 translate-middle p-1 bg-red
                        ">
                        2
                    </span>
                </button>
            </div>
        </>
    )

}

export default CardWidget