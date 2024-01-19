import { useEffect, useState } from 'react'

import './Index.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Ingreso from './Ingreso'
import { Tabla } from './Tabla'
import { actualizarProducto, borrarProducto, guardarProducto, obtenerProductos } from '../Servicios/productos'


export function Index() {

    const [productos, setProductos] = useState([]) 
    const [producto, setProducto] = useState({
        nombre: '',
        precio: '',
        stock: '',
        marca: '',
        categoria: '',
        detalles: '',
        foto: '',
        envio: ''
    })
    const [editarID, setEditarID] = useState(null)

    const [show, setShow] = useState(false);
    const [borrarID, setBorrarID] = useState(null)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        async function pedir() {
            const productos = await obtenerProductos()
            setProductos(productos)
        }
        pedir()
    }, [])


    function onChange(e) {
        const { type, id, value, checked } = e.target
        setProducto({ ...producto, [id]: type === 'checkbox' ? checked : value })
    }

    function borrarForm() {
        setProducto({
            nombre: '',
            precio: '',
            stock: '',
            marca: '',
            categoria: '',
            detalles: '',
            foto: '',
            envio: ''
        })
    }

    async function onSubmit(e) {
        e.preventDefault()

        const productosClon = [...productos]

        if (!editarID) {
            const productoGuardado = await guardarProducto(producto)
            productosClon.push(productoGuardado)
        }
        else {
            const id = editarID
            const productoActualizado = await actualizarProducto(id, producto)
            const index = productosClon.findIndex(p => p.id === productoActualizado.id)
            productosClon.splice(index, 1, producto)

            setEditarID(null)
        }
        setProductos(productosClon)

        borrarForm()
    }
    function editar(id) {
        if (!editarID || editarID !== id) {
            setEditarID(id)
            setProducto(productos.find(p => p.id === id))
        }
        else {
            setEditarID(null)
            borrarForm()
        }
    }
    function borrar(id) {
        if(id) {
            setBorrarID(id)
            handleShow()
        }
    }

    async function goBorrar() {
        const id = borrarID

        if(id) {
            const productoEliminado = await borrarProducto(id)

            const productosClon = [...productos]
            const index = productosClon.findIndex(p => p.id === productoEliminado.id)
            productosClon.splice(index, 1)
            setProductos(productosClon)
        }
        handleClose()
    }

    return (
        <div className="Alta">
                <h1>Alta de productos</h1>
                <hr />
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Eliminar Producto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <strong>¿Desea eliminar {productos.find(p => p.id === borrarID)?.nombre} de la lista?</strong>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="warning" onClick={handleClose}>Cancelar</Button>
                        <Button variant="danger" onClick={goBorrar}>Aceptar</Button>
                    </Modal.Footer>
                </Modal>
                <Ingreso
                    producto={producto}
                    onChange={onChange}
                    onSubmit={onSubmit}
                    editarID={editarID}
                />
                <Tabla
                    productos={productos}
                    editar={editar}
                    borrar={borrar}
                    editarID={editarID}
                />
            </div>
    )
}