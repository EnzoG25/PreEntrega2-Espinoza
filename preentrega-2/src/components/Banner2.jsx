import imgCarU from "../assets/images/pendientes.jpg"
import imgCarD from "../assets/images/velas.jpg"
import imgCarT from "../assets/images/cadenas.jpg"

const Banner2 = () => {

    return (

        <> 
            <section className="carrusel">
            <div id="carouselExampleFade" className="carousel slide carousel-fade ">
                <div className="carousel-inner pb-20 ">
                    <div className="carousel-item active ">
                        <img src={imgCarU} className="rounded mx-auto d-block" alt="anillocorazones" />
                    </div>
                    <div className="carousel-item">
                        <img src={imgCarD}  className="rounded mx-auto d-block" alt="anillorombo"/>
                    </div>
                    <div className="carousel-item">
                        <img src={imgCarT} className="rounded mx-auto d-block" alt="anillosello"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            
            </section>
            <section>
                <img src="images/joyas4.avif" alt=""/>
            </section>
        </>
    )

}

export default Banner2