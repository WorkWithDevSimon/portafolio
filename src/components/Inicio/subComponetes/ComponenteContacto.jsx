import React, { useEffect } from 'react';
import { init, sendForm } from '@emailjs/browser';
import './ComponenteContacto.css'; // Asegúrate de tener el archivo CSS correcto

export const ComponenteContacto = () => {
    useEffect(() => {
        // Inicializa EmailJS
        init('eRnwuzzwRiqzbNCpN');
    }, []);

    const manejarEnvio = (evento) => {
        evento.preventDefault();

        const boton = evento.target.querySelector('button[type="submit"]');
        boton.value = 'Enviando...';

        const nombre = evento.target.querySelector('input[name="nombre"]');
        const telefono = evento.target.querySelector('input[name="telefono"]');
        const email = evento.target.querySelector('input[name="email"]');
        const textarea = evento.target.querySelector('textarea[name="textarea"]');

        // Validación: Si el textarea está vacío, muestra una alerta
        if (
            nombre.value.trim() === '' ||
            telefono.value.length >= 20 ||
            telefono.value.trim() === '' ||
            email.value.trim() === '' ||
            textarea.value.trim() === ''

        ) {
            alert('Por favor, ingrese datos correspondientes.');
            boton.value = 'Enviar';
            return;
        }
        const idServicio = 'service_bi48y4b';  // Reemplaza con tu ID de servicio
        const idPlantilla = 'template_c9on7co'; // Reemplaza con tu ID de plantilla

        sendForm(idServicio, idPlantilla, evento.target)
            .then(() => {
                boton.value = 'Enviar';
                alert('Mensaje enviado exitosamente');
                evento.target.reset(); // Restablece el formulario
            })
            .catch((err) => {
                boton.value = 'Enviar';
                alert('Ocurrió un error. Intenta nuevamente más tarde.');
            });
    };

    return (
        <>
            <section className="contactame">
                <div className="contactem_titulo">
                    <h1>Contacto</h1>
                    <div className="SobreLineacontactame"></div>
                </div>
                <div className="container_contacto">
                    <h4>Puedes contactarme a través de este formulario</h4>
                    <form id="form" className="form" onSubmit={manejarEnvio}>
                        <input type="text" id="nombre" name="nombre" placeholder="Ingrese Nombre" maxLength="100"
                        />
                        <input type="number" id="telefono" name="telefono" placeholder="Ingrese teléfono" min="0" maxLength="20" />
                        <input type="email" id="email" name="email"
                            placeholder="Ingrese correo electronico" maxLength="254 " />
                        <textarea
                            id="textarea"
                            name="textarea"
                            placeholder="Escribe tu mensaje aquí..."
                            maxLength="300"
                        ></textarea>
                        <button type="submit" className="btn_form">Enviar Información</button>
                    </form>
                </div>
            </section>
        </>
    );
};
