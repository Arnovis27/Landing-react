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
    handleChange = (e) => {    
        console.log({      
            name: e.target.name,      
            value: e.target.value,    
        });  
    };  
    
    handleClick = (e) => {    
        console.log('Button was clicked');  
    };  
    
    handleSubmit = (e) => {    
        e.preventDefault();    
        console.log('Form was submitted');  
    };

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
                                <a className="boton" href="https://gamestry.com/courses/?game=clash+royale&gclid=Cj0KCQjw09HzBRDrARIsAG60GP8mB1c7hu0b6sI447NTc6kc4WJ3mz_aOYRH-ZHt6Ot6ihiIAQTj9awaArhmEALw_wcB">Cursos</a>
                                <a className="boton" href="https://gamestry.com/subscribe">Suscribirse</a>
                                <a className="boton" href="https://gamestry.com/home">Visitanos</a>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="importante">
                    <h1>Cursos</h1>
                    <h2>Online</h2>
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
                        <h5>APRENDE DE LOS MEJORES</h5>
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
                                    <form className="formulario">
                                        <h3>Pre-Inscribete</h3>
                                        <label>Nombre y Apellido: </label>
                                        <input  onClick={ this.handleClick} type="text" className="separe" name= "Nombre"></input> <br/>
                                        <label>Correo Electronico: </label>
                                        <input  onClick={ this.handleClick} type="text" className="separe" name= "Correo"></input> <br/>
                                        <label>Codigo de Creador: </label>
                                        <input  onClick={ this.handleClick} type="text" className="separe" name= "Codigo"></input> <br/>
                                        
                                        <p className= "enviar">
                                            <button  onClick={this.handleClick} type ="submit" value= "Submit" className="btn btn-green">Enviar</button> <br/>
                                        </p>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </body>
        );
    }
}

export default Landing;