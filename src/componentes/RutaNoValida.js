import './RutaNoValida.css'

export const RutaNoValida = () =>
    <div className="RutaNoValida">
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <h1 className=""><strong>Error 404</strong>: Ruta no válida.</h1>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    </div>