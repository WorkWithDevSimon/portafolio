import React, { useState } from 'react';
import './ComponenteProyectos.css';
import { projectsData } from './datos';
import { NavLink } from 'react-router-dom';

export const ComponenteProyectos = () => {
    // Limitar a un máximo de 3 proyectos
    const maxProjects = 3;
    const proyectosLimitados = projectsData.proyectos.slice(0, maxProjects);

    // Estado para la imagen seleccionada y el control del modal
    const [selectedImage, setSelectedImage] = useState(null);

    // Función para abrir el modal con la imagen seleccionada
    const handleImageClick = (imgSrc) => {
        setSelectedImage(imgSrc);
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <section className="proyectos">
                <div className="proyectos_titulo">
                    <h1>Proyectos</h1>
                    <div className="SobreLinea"></div>
                </div>
                <div className="contenedor_tarjeta">
                    {proyectosLimitados.map((project, index) => (
                        <div className="tarjeta" key={index}>
                            <div className="deslizador">
                                {project.imgSrc.map((x, xIndex) => (
                                    <img
                                        src={x}
                                        key={xIndex}
                                        alt={`img ${xIndex}`}
                                        className="tarjeta_img"
                                        onClick={() => handleImageClick(x)} // Al hacer clic se abre el modal
                                    />
                                ))}
                            </div>

                            <div className="tarjeta_info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="tarjeta_Lenguajes">
                                    {project.languages.map((lang, langIndex) => (
                                        <img src={lang} key={langIndex} alt={`Icono ${langIndex}`} />
                                    ))}
                                </div>
                                {project.links.map((link, linkIndex) => (
                                    <a href={link.url} key={linkIndex}>
                                        <button className="btn_tarjeta">
                                            {link.text} <img src={link.icon} alt="Imagenes_proyectos" />
                                        </button>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <NavLink to='/Proyectos' onClick={() => window.scrollTo(0, 0)}>
                    <button className="btn_conermas_Proyecto">Conoce mis otros proyectos!</button>
                </NavLink>
            </section>

            {/* Modal para la imagen esto me sirve para cuando le haga click a una imagen 
            me sobresalga las fotos de los progyectos asi el
            usuario lo puede ver comodamente*/}
            {selectedImage && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal_content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={closeModal}>&times;</span>
                        <img src={selectedImage} alt="Imagen ampliada" className="modal_img" />
                    </div>
                </div>
            )}
        </>
    );
};
