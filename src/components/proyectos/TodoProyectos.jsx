import { projectsData } from "../../components/Inicio/subComponetes/datos";
import '../../components/Inicio/subComponetes/ComponenteProyectos.css'
import { useState } from "react";

export const TodoProyectos = () => {
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
                    <h1>Explora todos mis proyectos</h1>
                    <div className="SobreLinea"></div>
                </div>
                <div className="contenedor_tarjeta">
                    {projectsData.proyectos.map((project, index) => (
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
            </section>

            {/* Modal para la imagen */}
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
