import React from "react";

import './estilos/style.css';

//Importando imagenes
import log from '../imagenes/logo.png'
import im1 from '../imagenes/im1.jpg'
import im2 from '../imagenes/im2.jpg'
import im3 from '../imagenes/im3.jpg'
import im4 from '../imagenes/im4.jpg'
import adrian from '../imagenes/Adrian-Piedra.png'
import malcaide from '../imagenes/Malcaide.png'
import cuchii from '../imagenes/cuchii.png'
import princesa from '../imagenes/princesa.png'

class Landing extends React.Component {
    render(){
        return(
            <body>

                <div className= "arriba">
                    <div className="izquierda">
                        <img className= "tam" src= {log} alt="logo gamestry"/>
                    </div>
                    <div className="derecha">
                        <div className="barra">
                            <nav>
                                <a className="boton" href="Landing.js">Inicio</a>
                                <a className="boton" href="https://gamestry.com/subscribe">Suscribirse</a>
                                <a className="boton" href="https://gamestry.com/home">Visitanos</a>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="importante">
                    <h1>¡CURSOS ONLINE!</h1>
                </div>
                
                <div className="centro">
                    <div className="slider">
                        <ul>
                            <li><img className="imagen" src= {im1} alt="imagen 1"/></li>
                            <li><img className="imagen" src= {im2} alt="imagen 2"/></li>
                            <li><img className="imagen" src= {im3} alt="imagen 3"/></li>
                            <li><img className="imagen" src= {im4} alt="imagen 4"/></li>
                        </ul>
                    </div>     
                </div>

                <div className="abajo">
                    <div className="izquierda">
                        <h2>APRENDE DE LOS MEJORES</h2>
                        <div className="fotos">
                            <img className="ad" src= {adrian} alt="adrian piedra"/>
                            <img className="mal" src= {malcaide} alt="malcaide"/>
                            <img className="cu" src= {cuchii} alt="cuchii cu"/>
                        </div>
                    </div>
                    <div className="derecha">
                        <div className="espacio">
                            <div className="form1">
                                <img className= "princesa" src= {princesa} alt= "princesa"/>
                            </div>
                            <div className="form2">
                                <div className="borde">
                                    <form className="formulario" action="">
                                        <p>Nombre y Apellido: </p>
                                        <input type="text" className="separe"></input> <br/>
                                        <p>Correo Electronico: </p>
                                        <input type="text" className="separe"></input> <br/>
                                        <p>Codigo de Creador: </p>
                                        <input type="text" className="separe"></input> <br/>
                                        
                                        <p className= "enviar">
                                            <input type="submit" className="btn btn-green" value="Enviar"></input> <br/>
                                        </p>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <flooter>
                    <div className="final">
                    <h3>Copyright 2019 - All Rigth Reserved</h3>
                    </div>
                </flooter>

            </body>
        );
    }
}

export default Landing;