import './Logro.css';
import { logros_datos } from '../Inicio/subComponetes/datos';

export const Logros = () => {
    return (
        <>
            <section className="logro_contenedor">
                <h1>Explora todos mis certificados</h1>
                <div className="SobreLinea"></div>
                <div className="logros_contenedor">
                    {logros_datos.map((logro, index) => (
                        <div className="logro_tarjeta" key={index}>
                            <img src={logro.imagen} alt={logro.titulo} className='logro_img' />
                            <div className='logro_contenidos'>
                                <h1 className='logro_contenido'>{logro.titulo}</h1>
                                <p className='logro_texto'>{logro.descripcion}</p>
                                <a href={logro.enlace} className='btn_logro'>Ver Certificado</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};
