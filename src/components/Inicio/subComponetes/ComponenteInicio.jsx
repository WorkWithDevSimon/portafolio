import { NavLink } from 'react-router-dom';
import './ComponenteInicio.css'
import { mainDatos } from "./datos";
export const ComponenteInicio = () => {
    return (
        <>
            <section className="contenedor_main">
                <main className="main">
                    <section className="main_info">
                        <h1>{mainDatos.main_info_h1}<span>{mainDatos.main_info_span}</span></h1>
                        <span className="text_animated"> </span>
                        <p className="main_info_descripcion">{mainDatos.main_info_descripcion}</p>
                        <div className="main_info_redes">
                            {mainDatos.main_info_redes.map((red, index) => (
                                <a key={index} href={red.url}>
                                    <img src={red.icon} alt={red.text} target="_blank" />
                                </a>
                            ))}
                        </div>
                        <a href="/documents/CV_Informatica.docx" download>
                            <button className="btn">Descargar CV</button>
                        </a>
                        <NavLink to='/Proyectos'><button className="btn">Proyectos</button></NavLink>
                    </section>
                    <img src={mainDatos.img_main} className="img_main" alt="primer imagen main" />
                </main>
            </section>
        </>
    )
}


