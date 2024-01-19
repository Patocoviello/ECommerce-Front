import './Card.css'

export const Card = props => {

    const { producto, agregarCarritoID } = props

    return (
        <div className="Card">
            <section>
                <div className="card" >
                    <img src={producto.foto} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h3 className="card-title">{producto.nombre}</h3>
                        <p className="card-text">{producto.detalles}</p>
                        <p className="card-text">Marca: {producto.marca}</p>
                        <p className="card-text">Categoria: {producto.categoria}</p>
                        <p className="card-text"><b>Precio: ${producto.precio}</b></p>
                        {/* <p className="card-text"></p> */}
                        <button className="btn btn-primary" onClick={
                            () => agregarCarritoID(producto.id)
                        }>Agregar a carrito</button>
                    </div>
                </div>
            </section>
        </div>
    )
}