import './Index.css'

import { Tabla } from './Tabla'
import { useLocalStorage } from '../Hooks/useLocalStore'
import { enviarCarrito } from '../Servicios/carrito'

export function Index() {
    const [carrito, setCarrito] = useLocalStorage('carrito', [])

    function borrarTodo() {
        setCarrito([])
    }

    function borrarID(id) {
        const carritoClon = [...carrito]
        const index = carritoClon.findIndex(p => p.id === id)
        carritoClon.splice(index, 1)
        setCarrito(carritoClon)
    }

    function incrementarCantID(id) {
        const carritoClon = [...carrito]
        const producto = carritoClon.find(p => p.id === id)
        if (producto.cantidad < producto.stock) {
            producto.cantidad++
            setCarrito(carritoClon)
        }
    }

    function decrementarCantID(id) {
        const carritoClon = [...carrito]
        const producto = carritoClon.find(p => p.id === id)
        if (producto.cantidad > 1) {
            producto.cantidad--
            setCarrito(carritoClon)
        }
    }

    async function pedir() {
        const carritoEnviado = await enviarCarrito({pedido: carrito})
        console.log(carritoEnviado)
        setCarrito([])
    }

    return (
        <div className="Carrito">
            <h1>Carrito de compras</h1>
            {carrito.length > 0 &&
                <>
                    <div>
                        <Tabla
                            carrito={carrito}
                            borrarID={borrarID}
                            incrementarCantID={incrementarCantID}
                            decrementarCantID={decrementarCantID}
                        />
                    </div>
                    <div>
                        <button className="Carrito__pedir" onClick={pedir}>Hacer un pedido</button>
                        <button className="Carrito__borrar" onClick={borrarTodo}>Borrar carrito</button>
                    </div>
                </>
            }
            {carrito.length === 0 && <h3 className='alert alert-danger'>No tienes ningun producto en el carrito</h3>}
        </div>
    )
}