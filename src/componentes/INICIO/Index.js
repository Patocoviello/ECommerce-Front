import './Index.css'
import { obtenerProductos } from '../Servicios/productos'
import { Card } from './Card'
import { useEffect, useState } from 'react'
import { useLocalStorage } from '../Hooks/useLocalStore'

export function Index() {

    const [productos, setProductos] = useState([])
    const [carrito, setCarrito] = useLocalStorage('carrito', [])

    useEffect(() => {
        async function pedir() {
            const productos = await obtenerProductos()
            setProductos(productos)
        }
        pedir()
    }, [])

    function agregarCarritoID(id) {

        const producto = productos.find(p => p.id === id)
        const carritoClon = [...carrito]

        let prodCarrito = carritoClon.find(prodC => prodC.id === producto.id)
        if(!prodCarrito) {
            producto.cantidad = 1
            carritoClon.push(producto)
        }
        else {
            prodCarrito.cantidad++
        }
        setCarrito(carritoClon)
    }

    return (
        <div className="Inicio">
                <div className="inicio">
                    <div className="section-cards">
                        <div className="section-cards-header">
                            <h1>Listado de productos</h1>
                        </div>

                        <div className="cards-container">
                            { productos.map( (producto, index) => 
                                    <Card 
                                        key={index} 
                                        producto={producto} 
                                        agregarCarritoID={agregarCarritoID}
                                    />
                                )
                            }
                        </div>

                    </div>
                </div>
            </div>
    )
}