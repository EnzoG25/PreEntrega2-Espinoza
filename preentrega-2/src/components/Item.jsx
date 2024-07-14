import { Link } from "react-router-dom"


const Item = ({ item }) => {

    return (
        <>

            <div className="col-md-4">
                <div className="card border-0 p-2 m-2"  >
                    <Link to={"/item/" + item.id}>
                        <img src={item.image} className="card-img-top" alt={item.name} />
                    </Link>
                    
                        <div className="card-body">
                            <p className="card-text text-center">{item.title}</p>
                            <p className="card-text text-center">{item.description}</p>
                            <p className="card-text text-center">${item.prize}</p>
                            

                        </div>
                    
                </div>
            </div>


        </>
    )

}

export default Item