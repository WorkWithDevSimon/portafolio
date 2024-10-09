import './Footer.css';


import { miDatosFooter } from "../../components/Inicio/subComponetes/datos";

export const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer_conten">
                    <h2>Simón Santibáñez</h2>
                    <h5>Desarollador Full Stack Junior </h5>
                    <div className="redes_sociales">
                        {miDatosFooter.map((red, index) => (
                            <a key={index} href={red.url}>
                                <img src={red.icon} alt={red.text} target="_blank" />
                            </a>
                        ))}
                    </div>
                </div>
            </footer>

        </>
    )
}
