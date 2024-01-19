import { NavLink } from 'react-bootstrap'
import './Index.css'

export function Index() {

    return (
        <div className="Contacto">
            <div className="conteiner-form">
                <div className="form-data">
                    <h1>Contacto</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quos necessitatibus quibusdam iste
                        esse excepturi deleniti vitae laudantium natus autem!</p>
                    <NavLink href="#">
                        <div className="tel">+(54) 11-2592-0000
                        </div>
                    </NavLink>
                    <NavLink href="#">
                        <div className="email">email@gmail.com</div>
                    </NavLink>
                    <NavLink href="#">
                        <div className="map">Olivos, Vicente López</div>
                    </NavLink>
                </div>
                <form action="#" autocomplete="off">
                    <input type="text" name="nombre" placeholder="Ingrese su nombre" />
                    <input type="email" name="email" placeholder="Ingrese su correo" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Ingrese su mensaje"></textarea>
                    <input type="submit" name="enviar" value="Enviar contacto" id="btn-enviar" />
                </form>
            </div>
        </div>
    )
}