import './Tabla.css'

export const Tabla = props => {

    const { productos, editar, borrar, editarID } = props

    return (
        <div className="Tabla">
            { productos.length > 0 &&
                <div className="table-responsive">
                    <table className="table table-light">
                        <thead className='thead-dark'>
                            <tr>
                                <th>nombre</th>
                                <th>precio</th>
                                <th>stock</th>
                                <th>marca</th>
                                <th>categoría</th>
                                <th>detalles</th>
                                <th>foto</th>
                                <th>envío</th>
                                <th>acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productos.map( (producto,index) => 
                                    <tr key={index}>
                                        <td>{producto.nombre}</td>
                                        <td>${producto.precio}</td>
                                        <td>{producto.stock}</td>
                                        <td>{producto.marca}</td>
                                        <td>{producto.categoria}</td>
                                        <td>{producto.detalles}</td>                           
                                        <td><img src={producto.foto} alt={producto.nombre} /></td>
                                        <td><div className='mt-4'>{producto.envio? '✔️' : '❌'}</div></td>                    
                                        <td>
                                            <button className={`btn btn-${editarID && editarID === producto.id?'outline-':''}warning mb-4`} onClick={
                                                () => editar(producto.id)
                                            }>{ editarID && editarID === producto.id? 'Cancelar' : 'Editar' }</button>
                                            <br />
                                            <button disabled={editarID? true : false} className="btn btn-outline-danger" onClick={
                                                () => borrar(producto.id)
                                            }>Borrar</button>
                                        </td>                           
                                    </tr> 
                                )
                            }
                        </tbody>
                    </table>
                </div>                
            }
            { productos.length === 0 && <h1 className='alert alert-danger'>No se encontraron productos</h1> }
        </div>
    )
}
