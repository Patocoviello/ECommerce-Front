import './Tabla.css'


export const Tabla = props => {

    const { carrito, borrarID, incrementarCantID, decrementarCantID } = props
    return (
        <div className="Tabla">

            <div className="table-responsive">
                <table className="table table-light">
                    <thead className='thead-dark'>
                        <tr>
                            <th>foto</th>
                            <th>producto</th>
                            <th>marca</th>
                            <th>precio</th>
                            <th>cantidad</th>
                            <th>precio x unidad</th>
                            <th>accion</th>
                            <th>envio gratis</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carrito.map((producto, index) =>
                                <tr key={index}>
                                    <td><img src={producto.foto} alt={"foto de " + producto.nombre} /></td>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.marca}</td>
                                    <td>${producto.precio}</td>
                                    <td>{producto.cantidad}
                                        <button className='btn btn-outline-primary ml-1' onClick={() => decrementarCantID(producto.id)}>-</button>
                                        <button className='btn btn-outline-primary ml-1' onClick={() => incrementarCantID(producto.id)}>+</button></td>
                                    <td>
                                        <strong>{producto.precio}</strong>
                                    </td>
                                    <td>
                                        <button className='btn__borrar' onClick={() => borrarID(producto.id)}>Borrar producto</button>
                                    </td>
                                    <td>
                                        {producto.envio? '✔️' : '❌'}
                                    </td>
                                </tr>
                            )
                        }
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>
                                <h4>TOTAL</h4>
                            </th>
                            <th>
                                <h4>
                                    <strong> ${carrito.reduce((acc, p) => acc + Number(p.precio) * p.cantidad, 0).toFixed(2)} </strong>
                                </h4>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >
    )
}
