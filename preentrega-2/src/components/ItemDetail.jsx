const ItemDetail = ({ item }) => {
    console.log(item)
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 offset-md-2">
                        <img src={item.image} alt={item.title} className="md-10" />
                    </div>
                    <div className="col-md-3 text-center">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <div className="alert alert-light" role="alert">
                            ¡Con Visa, Mastercard y Cabal tenes hasta 6 cuotas sin interes!
                        </div>
                        <p><b>${item.prize}</b></p>


                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail 