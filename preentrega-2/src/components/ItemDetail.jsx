import ItemCount from "./ItemCount"


const ItemDetail = ({item}) => {
    
    
    return (
        <>
            
            <div className="container">
                <div className="row">
                    <div className="col-md-3 offset-md-2">
                        
                    <img src={item.image} className="card-img-top" alt={item.name} />
                    </div>
                    <div className="col-md-3 text-center">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <div className="alert alert-light" role="alert">
                            ¡Con Visa, Mastercard y Cabal tenes hasta 6 cuotas sin interes!
                        </div>
                        <ItemCount item={item.stock}/>
                        <p><b>${item.prize}</b></p>
                        
                        
                        
                        


                    </div>
                </div>
            </div>
            
        </>
    )
}

export default ItemDetail 