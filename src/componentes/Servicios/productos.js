import axios from "axios"

    const URL_API_PRODUCTOS = process.env.REACT_APP_NODE_ENV === 'production'
    ? 'https://pale-tasty-dollar.glitch.me/api/productos/'
    : `http://localhost:${process.env.REACT_APP_PORT_SRV_DEV}/api/productos/`

export async function obtenerProductos() {
    try {
        const { data: productosLeidos } = await axios.get(URL_API_PRODUCTOS)
        const productosLeidosProxy = productosLeidos.map(producto => proxyProducto(producto))
        return productosLeidosProxy
    }
    catch (error) {
        console.error('ERROR EN EL METODO GET DE AXIOS:', error.message)
        return []
    }
}

export async function guardarProducto(producto) {
    try {
        const { data: productoGuardado } = await axios.post(URL_API_PRODUCTOS, producto)
        return proxyProducto(productoGuardado)
    }
    catch (error) {
        console.error('ERROR EN EL METODO POST DE AXIOS:', error.message)
        return {}
    }
}

export async function actualizarProducto(id, producto) {
    try {
        const productoSinID = eliminarPropiedad(eliminarPropiedad(producto, '_id'), 'id')
        const { data: productoActualizado } = await axios.put(URL_API_PRODUCTOS + id, productoSinID)
        return proxyProducto(productoActualizado)
    }
    catch (error) {
        console.error('ERROR EN EL METODO PUT DE AXIOS:', error.message)
        return {}
    }
}

export async function borrarProducto(id) {
    try {
        const { data: productoEliminado } = await axios.delete(URL_API_PRODUCTOS + id)
        return proxyProducto(productoEliminado)
    }
    catch (error) {
        console.error('ERROR EN EL METODO DELETE DE AXIOS:', error.message)
        return {}
    }
}
const proxyProducto = producto => {
    const handler = {
        get: function (target, prop) {
            if (prop === 'id') {
                const id = target._id
                target.id = id
                return id
            }
            return Reflect.get(...arguments)
        }
    }
    return new Proxy(producto, handler)
}
const eliminarPropiedad = (objeto, prop) => {
    const objetoClon = { ...objeto }
    delete objetoClon[prop]
    return objetoClon
}