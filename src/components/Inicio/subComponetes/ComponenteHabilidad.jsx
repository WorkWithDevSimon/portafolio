import './ComponenteHabilidad.css'
import { habilidadesData } from "./datos";

export const ComponenteHabilidad = () => {
    return (
        <>
            <section className="habilidades">
                <div className="habilidades_titulo">
                    <h1>Habilidades</h1>
                    <div className="SobreLinea"></div>
                </div>
                <div className="card_container_habilidades">
                    {habilidadesData.habilidades.map((item, index) => (
                        <div className={item.nombre_clase} key={index}>
                            <h3>{item.title}</h3>
                            <div className="card_habilidaes_lenguajes">
                                {item.images.map((image, imgIndex) => (
                                    <a href={image.url} key={imgIndex} target="_blank" rel="noopener noreferrer">
                                        <img src={image.img} alt={`icon-${imgIndex}`} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </section>
        </>
    )
}
