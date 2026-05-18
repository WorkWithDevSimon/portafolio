import './ComponenteProyectos.css';
import { projectsData } from './datos';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";

/* ── Carrusel de tarjeta ── */
const Carrusel = ({ images, onImageClick }) => {
    const [idx, setIdx] = useState(0);
    const prev = () => setIdx(i => (i - 1 + images.length) % images.length);
    const next = () => setIdx(i => (i + 1) % images.length);

    return (
        <div className="carrusel">
            <div
                className="carrusel-track"
                style={{ transform: `translateX(-${idx * 100}%)` }}
            >
                {images.map((src, i) => (
                    <img key={i} src={src} alt={`img ${i}`}
                        className="carrusel-img"
                        onClick={() => onImageClick({ images, startIndex: i })}
                    />
                ))}
            </div>
            {images.length > 1 && (
                <>
                    <button className="car-btn car-prev" onClick={prev}>‹</button>
                    <button className="car-btn car-next" onClick={next}>›</button>
                    <div className="car-dots">
                        {images.map((_, i) => (
                            <span key={i}
                                className={`car-dot${i === idx ? ' active' : ''}`}
                                onClick={() => setIdx(i)} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

/* ── Modal con carrusel + zoom + drag ── */
const ImageModal = ({ data, onClose }) => {
    const [idx, setIdx] = useState(data?.startIndex ?? 0);
    const [scale, setScale] = useState(1);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const [start, setStart] = useState({ x: 0, y: 0 });
 // ✅ FIX: sincronizar idx cuando cambia data
    useEffect(() => {
        if (data) {
            setIdx(data.startIndex ?? 0);
            setScale(1);
            setPos({ x: 0, y: 0 });
        }
    }, [data]);
    if (!data) return null;

    const { images } = data;
    const total = images.length;

    const resetView = () => { setScale(1); setPos({ x: 0, y: 0 }); };

    const goTo = (i) => {
        setIdx((i + total) % total);
        resetView();
    };

    const handleMouseDown = (e) => {
        setDragging(true);
        setStart({ x: e.clientX - pos.x, y: e.clientY - pos.y });
    };
    const handleMouseMove = (e) => {
        if (!dragging) return;
        setPos({ x: e.clientX - start.x, y: e.clientY - start.y });
    };
    const handleMouseUp = () => setDragging(false);

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal_content" onClick={e => e.stopPropagation()}>

                {/* Cabecera: contador + cerrar */}
                <div className="modal_header">
                    {total > 1 && (
                        <span className="modal_counter">{idx + 1} / {total}</span>
                    )}
                    <button className="modal_close" onClick={onClose}>✕</button>
                </div>

                {/* Zona de imagen con flechas a los costados */}
                <div className="modal_img_zone">

                    {total > 1 && (
                        <button className="modal_arrow modal_arrow_left"
                            onClick={() => goTo(idx - 1)}>‹</button>
                    )}

                    <div className="modal_img_wrap"
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}>
                        <img
                            src={images[idx]}
                            alt={`img ${idx}`}
                            className="modal_img"
                            style={{
                                transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
                                cursor: dragging ? 'grabbing' : 'grab'
                            }}
                            draggable={false}
                        />
                    </div>

                    {total > 1 && (
                        <button className="modal_arrow modal_arrow_right"
                            onClick={() => goTo(idx + 1)}>›</button>
                    )}

                </div>

                {/* Barra zoom */}
                <div className="modal_controls">
                    <button onClick={() => setScale(s => Math.max(s - 0.25, 0.5))}>− Zoom</button>
                    <span className="modal_zoom_lbl">{Math.round(scale * 100)}%</span>
                    <button onClick={() => setScale(s => Math.min(s + 0.25, 4))}>+ Zoom</button>
                    <button onClick={resetView}>Reset</button>
                </div>

            </div>
        </div>
    );
};

/* ── Componente principal ── */
export const ComponenteProyectos = () => {
    const proyectosLimitados = projectsData.proyectos.slice(0, 4);
    const [modalData, setModalData] = useState(null);

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
                            <Carrusel
                                images={project.imgSrc}
                                onImageClick={setModalData}
                            />
                            <div className="tarjeta_info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="tarjeta_Lenguajes">
                                    {project.languages.map((lang, i) => (
                                        <img src={lang} key={i} alt={`lang ${i}`} />
                                    ))}
                                </div>
                                <div className="tarjeta_btns">
                                    {project.links.map((link, i) => (
                                        <>
                                        <a href={link.url} key={i}>
                                            <button className="btn_tarjeta">
                                                {link.text}
                                                <img src={link.icon} alt="icon" />
                                            </button>
                                            {/*                                             
                                            <button className="btn_tarjeta">
                                                {link.text}
                                                <img src={link.icon} alt="icon" />
                                            </button> */}
                                            
                                        </a>
                                        </>
                                        
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <NavLink to='/Proyectos' onClick={() => window.scrollTo(0, 0)}>
                    <button className="btn_mas_proyectos">
                        Conoce mis otros proyectos &nbsp;→
                    </button>
                </NavLink>
            </section>

            <ImageModal data={modalData} onClose={() => setModalData(null)} />
        </>
    );
};