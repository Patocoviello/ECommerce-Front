import axios from "axios"

const URL_API_CARRITO = process.env.REACT_APP_NODE_ENV === 'production'
    ? 'https://pale-tasty-dollar.glitch.me/api/carrito/'
    : `http://localhost:${process.env.REACT_APP_PORT_SRV_DEV}/api/carrito/`

export async function enviarCarrito(pedido) {
    try {
        const { data: pedidoGuardado } = await axios.post(URL_API_CARRITO, pedido )
        return pedidoGuardado
    }
    catch (error) {
        console.error('ERROR EN EL METODO POST DE AXIOS:', error.message)
        return {}
    }
}


