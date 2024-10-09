import React from 'react';
import './ComponenteAcercaDeMi.css'; // Asegúrate de tener el archivo CSS correcto

import { acercaDeMiDatos } from "./datos";
import { NavLink } from 'react-router-dom';


export const ComponenteAcercaDeMi = () => {
    return (
        acercaDeMiDatos.map((item, index) => (
            <section className="acercaDeMi" key={index}>
                <img src={item.imgSrc} className="img_AcercaDemi" alt="Imagen acerca de mi" />
                <div className="acercaDeMi_info">
                    <div className='acercaDeMiConetendor'>
                    <h1>{item.title}</h1>
                    <div className="SobreLineaacercaDeMi_info"></div>
                    </div>
                    {item.paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                    <NavLink to='/Certificados'>
                        <button className="btn">Certificaciones</button>
                    </NavLink>

                </div>
            </section>
        ))

    );
}

