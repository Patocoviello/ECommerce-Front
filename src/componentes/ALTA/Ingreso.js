import './Ingreso.css'

export default function Ingreso(props) {

    const { nombre, precio, stock, marca, categoria, detalles, foto, envio } = props.producto
    const { onChange, onSubmit, editarID, invalid } = props

    return (
        <div className="jumbotron" id="container">
            <div className="Ingreso">
                <form onSubmit={onSubmit} >
                    <div className="form-group">
                        <label htmlFor="nombre">nombre</label>
                        <input type="text" id="nombre" className="form-control" value={nombre} onChange={onChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="precio">precio</label>
                        <input type="number" id="precio" className="form-control" value={precio} onChange={onChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="stock">stock</label>
                        <input type="number" id="stock" className="form-control" value={stock} onChange={onChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="marca">marca</label>
                        <input type="text" id="marca" className="form-control" value={marca} onChange={onChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="categoria">categoria</label>
                        <input type="text" id="categoria" className="form-control" value={categoria} onChange={onChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="detalles">detalles</label>
                        <input type="text" id="detalles" className="form-control" value={detalles} onChange={onChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="foto">foto</label>
                        <input type="text" id="foto" className="form-control" value={foto} onChange={onChange} required />
                    </div>

                    <div className="form-group form-check m-auto">
                        <input type="checkbox" id="envio" className="form-check-input" checked={envio} onChange={onChange} />
                        <label htmlFor="envio">envio</label>
                    </div>
                    
                    <button disabled={invalid} className={`btn btn-outline-${editarID?'warning':'success'} ml-4 mt-4`}>
                        { editarID? 'Actualizar producto' : 'Añadir producto' }
                    </button>
                </form>
            </div>
        </div>

    )
}