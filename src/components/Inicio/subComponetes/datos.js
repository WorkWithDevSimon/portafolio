import { email, instagram, linkedin, whatsapp } from "../../../icon/indexicon";
import { html, css, javascript } from "../../../icon/indexicon";
import { react, redux, django, bootstrap, tailwind, react_native } from "../../../icon/indexicon";
import { php, python, java, kotlin, c_plus_plus, cgato, c_solo } from "../../../icon/indexicon";
import { postman } from "../../../icon/indexicon";
import { oracle, mysql, mongodb, firebase, microsoft_sql_server } from "../../../icon/indexicon";
import { aws, docker, hostinger } from "../../../icon/indexicon";
import { excel, powerpoint, word, power_bi, Rlogo } from "../../../icon/indexicon";
import { visualestudio, visualestudiocode, androidstudio, R_estudio, Packetraser } from "../../../icon/indexicon";
import { github, git, github_dark } from "../../../icon/indexicon";
import { img4, img1 } from "../../../img/datosImg";
import { img1Biblo, img2Biblo, img3Biblo, img4Biblo, img5Biblo, img6Biblo, img7Biblo, img8Biblo } from "../../../img/datosImg";
import {
    img1Tatto, img2Tatto, img3Tatto, img4Tatto, img5Tatto, img6Tatto,
    img7Tatto, img8Tatto, img9Tatto, img10Tatto, img11Tatto, img12Tatto, img13Tatto
    , img14Tatto, img15Tatto, img16Tatto, img17Tatto, img18Tatto, img19Tatto, img20Tatto
}
    from "../../../img/datosImg";

import { imgFormulario } from "../../../img/datosImg";
import { imgClinica1, imgClinica2 } from "../../../img/datosImg";
import { imgClima1 } from "../../../img/datosImg";
import { imgEducacion, imgEducacion2 } from "../../../img/datosImg";
import { calculadora } from "../../../img/datosImg";
import { imgRestaurant1, imgRestaurant2, imgRestaurant3 } from "../../../img/datosImg";



// --------------------------------------------------------------------------------
import { logro_1, logro_2, logro_3, logro_4, logro_5, logro_6, logro_7, logro_8 } from "../../../img/datosImg";
const mainDatos =
{
    main_info_h1: "Hola, me llamo ",
    main_info_span: "Simón Santibáñez",
    main_info_descripcion: "Como Desarrollador Full Stack Junior, mi enfoque en el mundo digital es altamente analítico. A través de un aprendizaje autodidacta continuo, he adquirido una comprensión sólida y completa de las tecnologías que impulsan nuestro entorno digital, así como de los principios y estructuras que conforman el desarrollo del software",
    main_info_redes: [
        { text: "linkedin", url: "http://www.linkedin.com/in/simón-santibáñez", icon: linkedin },
        { text: "instagram", url: "https://www.instagram.com/coder_saimon/", icon: instagram },
        { text: "whatsapp", url: "https://wa.me/945739628", icon: whatsapp },
        { text: "Repositorio", url: "https://github.com/WorkWithDevSimon", icon: github }

    ],
    img_main: img1
}


// ---------------------------------Habildiades-----------------------------------------------
const habilidadesData = {
    habilidades: [
        {
            title: "Frontend",
            images: [
                { img: html, url: "https://html.spec.whatwg.org/multipage/" },
                { img: css, url: "https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/CSS_basics" },
                { img: javascript, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
            ],
            nombre_clase: "FrontEnd"
        },
        {
            title: "Framework",
            images: [
                { img: react, url: "https://reactjs.org/" },
                { img: redux, url: "https://redux.js.org/" },
                { img: django, url: "https://www.djangoproject.com/" },
                { img: bootstrap, url: "https://getbootstrap.com/" },
                { img: tailwind, url: "https://tailwindcss.com/" },
                { img: react_native, url: "https://reactnative.dev/" },
            ],
            nombre_clase: "framework"
        },
        {
            title: "Backend",
            images: [
                { img: python, url: "https://www.python.org/" },
                { img: php, url: "https://www.php.net/" },
                { img: java, url: "https://www.java.com/es/download/help/whatis_java.html" },
                { img: kotlin, url: "https://kotlinlang.org/docs/home.html" },
                { img: c_plus_plus, url: "https://isocpp.org/" },
                { img: cgato, url: "https://en.wikipedia.org/wiki/C_(programming_language)" },
                { img: c_solo, url: "https://en.wikipedia.org/wiki/C_(programming_language)" },
            ],
            nombre_clase: "back_end"
        },
        {
            title: "APIs",
            images: [
                { img: postman, url: "https://www.postman.com/" }
            ],
            nombre_clase: "APIs"
        },
        {
            title: "Bases de Datos",
            images: [
                { img: oracle, url: "https://www.oracle.com/cl/database/" },
                { img: microsoft_sql_server, url: "https://learn.microsoft.com/en-us/sql/sql-server" },
                { img: mysql, url: "https://www.mysql.com/" },
                { img: mongodb, url: "https://www.mongodb.com/" },
                { img: firebase, url: "https://firebase.google.com/" },
            ],
            nombre_clase: "Bases_de_Datos"
        },
        {
            title: "Tecnologías Cloud",
            images: [
                { img: aws, url: "https://aws.amazon.com/" },
                { img: docker, url: "https://www.docker.com/" },
                { img: firebase, url: "https://firebase.google.com/" },
                { img: hostinger, url: "https://www.hostinger.es/tutoriales/que-es-un-hosting" },
            ],
            nombre_clase: "Tecnologías_Cloud"
        },
        {
            title: "Productividad y Análisis",
            images: [
                { img: excel, url: "https://www.microsoft.com/en-us/microsoft-365/excel" },
                { img: powerpoint, url: "https://www.microsoft.com/en-us/microsoft-365/powerpoint" },
                { img: word, url: "https://www.microsoft.com/en-us/microsoft-365/word" },
                { img: power_bi, url: "https://powerbi.microsoft.com/" },
                { img: Rlogo, url: "https://www.r-project.org/" },
            ],
            nombre_clase: "Productividad_Análisis"
        },
        {
            title: "Entornos de Desarrollo",
            images: [
                { img: visualestudio, url: "https://visualstudio.microsoft.com/" },
                { img: visualestudiocode, url: "https://code.visualstudio.com/" },
                { img: androidstudio, url: "https://developer.android.com/studio" },
                { img: R_estudio, url: "https://posit.co/products/open-source/rstudio/" },
                { img: Packetraser, url: "https://ccnadesdecero.es/que-es-cisco-packet-tracer/" },
            ],
            nombre_clase: "Entornos_de_Desarrollo"
        },
        {
            title: "Colaboración y Control",
            images: [
                { img: github, url: "https://github.com/" },
                { img: git, url: "https://git-scm.com/" },
            ],
            nombre_clase: "ColaboracionYControl"
        }
    ]
};

// ---------------------------------Componente AcercaDeMi-----------------------------------------------



const acercaDeMiDatos = [
    {
        imgSrc: img4,
        title: 'Acerca de mi',
        paragraphs: [
            'Mi nombre es Simón Santibañez, y mi trayectoria en la informática ha sido una búsqueda constante de entendimiento y avance. Desde joven, sentí una profunda fascinación por la tecnología, lo que me llevó a un viaje de aprendizaje continuo. A los 18 años, comencé mis estudios en Analista Programador y a los 20, me sumergí en la carrera de Ingeniería en Informática donde cada etapa de mi formación ha sido una exploración de los límites de la tecnología y su impacto en el mundo. Mi objetivo es no solo entenderla, sino también contribuir a su evolución, enfrentando desafíos con una mente abierta y una visión hacia el futuro, buscando resolver problemas e inspirar nuevas formas de pensar, creando un legado de innovación y excelencia.'
        ]
    },
    // Puedes agregar más objetos aquí si necesitas más secciones
];


// ---------------------------------Proyectos-----------------------------------------------
const projectsData = {
    proyectos: [
        {
            imgSrc: [img1Tatto, img2Tatto, img3Tatto, img4Tatto, img5Tatto, img6Tatto,
                img7Tatto, img8Tatto, img9Tatto, img10Tatto, img11Tatto, img12Tatto, img13Tatto
                , img14Tatto, img15Tatto, img16Tatto, img17Tatto, img18Tatto, img19Tatto, img20Tatto],
            title: "Web de Tatuajes",
            description: "Proyecto de página web para agendar citas de tatuajes y comprar productos relacionados. Ofrece inicio de sesión, gestión de compras y citas mediante CRUD, administración del sistema y varias funcionalidades adicionales, todo diseñado para una experiencia completa y fluida",
            languages: [html, css, javascript, bootstrap, react, django, postman, mysql, git, visualestudiocode],
            links: [
                { text: "Repositorio", url: "https://github.com/WorkWithDevSimon/Web-Tatuajes.git", icon: github_dark }
            ]
        },
        {
            imgSrc: [img1Biblo, img2Biblo, img3Biblo, img4Biblo, img5Biblo, img6Biblo, img7Biblo, img8Biblo],
            title: "Biblioteca Web",
            description: "Agenda y comparte libros entre socios fácilmente. Inicia sesión para reservar, devolver y añadir libros a tu canasta de lecturas. Regístrate para acceder a todas las funciones disponibles, gestionar tus préstamos y disfrutar de una experiencia completa y personalizada en la biblioteca",
            languages: [html, css, javascript, bootstrap, react, django, postman, mysql, visualestudiocode, git],
            links: [
                { text: "Repositorio", url: "https://github.com/WorkWithDevSimon/Web-Bibloteca.git", icon: github_dark }
            ]
        },
        {
            imgSrc: [imgFormulario],
            title: "Formulario Web",
            description: "Este formulario está integrado con Firebase para ofrecer una experiencia de gestión de datos eficiente y segura. Permite la recopilación y almacenamiento en tiempo real de la información del usuario, garantizando una sincronización fluida y una actualización instantánea de los datos",
            languages: [html, css, javascript, firebase, visualestudiocode, git],
            links: [
                { text: "Repositorio", url: "https://github.com/WorkWithDevSimon/Web-FormularioConectadoFirebase.git", icon: github_dark }
            ]
        },
        {
            imgSrc: [imgClinica1, imgClinica2],
            title: "Web Clinica",
            description: "En esta web, selecciona a tu médico y programa citas según disponibilidad. Usamos almacenamiento local de Google para asegurar un proceso ágil y seguro, sin complicaciones adicionales, facilitando una experiencia fluida.",
            languages: [html, bootstrap, react, javascript, git, visualestudiocode],
            links: [
                { text: "Repositorio", url: "https://github.com/WorkWithDevSimon/Web-Clinica.git", icon: github_dark }
            ]
        },
        {
            imgSrc: [imgClima1],
            title: "Web Clima",
            description: "En esta página, proporcionamos una API que permite acceder a todos los datos del clima actual de la fecha en que el usuario consulta. El usuario puede preguntar a la API sobre la existencia de una ciudad específica para obtener información detallada sobre su clima.",
            languages: [html, javascript, css, git, visualestudiocode],
            links: [
                { text: "Repositorio", url: "https://github.com/WorkWithDevSimon/Web-Clima-.git", icon: github_dark }
            ]
        },
        {
            imgSrc: [imgEducacion, imgEducacion2],
            title: "Web gestión de notas ",
            description: "Formulario para gestionar notas académicas. Permite seleccionar carrera y asignatura, ingresar notas, calcular promedios y mostrar resultados en una tabla. Incluye opción para limpiar entradas",
            languages: [javascript, html, bootstrap, git, visualestudiocode],
            links: [
                { text: "Repositorio", url: "https://github.com/WorkWithDevSimon/Web-Universidad_Carreras_Asignaturas.git", icon: github_dark }
            ]
        },
        {
            imgSrc: [calculadora],
            title: "Calculadora",
            description: "Calculadora básica para operaciones matemáticas simples. Permite sumar, restar, multiplicar y dividir números de manera rápida y fácil",
            languages: [javascript, html, css, git, visualestudiocode],
            links: [
                { text: "Repositorio", url: "https://github.com/WorkWithDevSimon/Web-Calculadora.git", icon: github_dark }
            ]
        },
        {
            imgSrc: [imgRestaurant1, imgRestaurant2, imgRestaurant3],
            title: "Restaurante",
            description: "Programa para optimizar el proceso de pedidos en un restaurante. Facilita la gestión de órdenes, mejora la rapidez en el servicio y asegura un seguimiento eficiente de cada pedido",
            languages: [python, mysql, git, visualestudiocode],
            links: [
                { text: "Repositorio", url: "https://github.com/WorkWithDevSimon/Programa-Restaurante.git", icon: github_dark }
            ]
        },
    ]
};

// ---------------------------------Certificados-----------------------------------------------
const logros_datos = [
    {
        titulo: "Certificado en Python Developer",
        descripcion: "Este certificado demuestra habilidades en desarrollo con Python, otorgado por SoloLearn.",
        imagen: logro_1,
        enlace: "https://drive.google.com/file/d/1YGutaG-NwzoVxfeBS_5ir1tnMFOCYl17/view?usp=sharing"
    },
    {
        titulo: "Certificado CCNAv7: Introducción a Redes",
        descripcion: "Este certificado valida conocimientos en configuración de redes, protocolos de capa física y de enlace de datos, y soluciones de conectividad en redes pequeñas. Emitido por Cisco Networking Academy.",
        imagen: logro_2,
        enlace: "https://drive.google.com/file/d/1GwzegmHY-KHClIsu3tARehy6V19E6y1O/view?usp=sharing"
    },

    {
        titulo: "Certificado CCNAv7: Introducción a Redes",
        descripcion: "Otorgado por Cisco Networking Academy por completar exitosamente el curso CCNAv7: Introduction to Networks.",
        imagen: logro_3,
        enlace: "https://drive.google.com/file/d/1HGT86ROs5Sb3jGFy03N3Cnk58LKQ6Uem/view?usp=sharing"
    },
    {
        titulo: "Certificado en Desarrollador Full Stack",
        descripcion: "Certificado de Desarrollador Full Stack otorgado por INACAP.",
        imagen: logro_4,
        enlace: "https://drive.google.com/file/d/1rTwfqB1HVMjDkd6T66rzcvd2uBxzv_ul/view?usp=sharing"
    },
    {
        titulo: "Certificado en Desarrollo de Aplicaciones Básicas",
        descripcion: "Certificado de Desarrollo de Aplicaciones Básicas otorgado por INACAP.",
        imagen: logro_5,
        enlace: "https://drive.google.com/file/d/1LSk6y-3GepBAUmRwGHp5aWg2QeLV2tH2/view?usp=sharing"
    },
    {
        titulo: "Certificado en Diseño y Gestión de Base de Datos",
        descripcion: "Certificado de Diseño y Gestión de Base de Datos otorgado por INACAP.",
        imagen: logro_6,
        enlace: "https://drive.google.com/file/d/1t20GEUVrSeEHHFA1WWDLkMx5h021D441/view?usp=sharing"
    },
    {
        titulo: "Certificado en Diseño Ágil de Sistemas",
        descripcion: "Certificado de Diseño Ágil de Sistemas otorgado por INACAP.",
        imagen: logro_7,
        enlace: "https://drive.google.com/file/d/1-l47axfIVsEvhfJys99MhKlN6XutOeJt/view?usp=sharing"
    },
    {
        titulo: "Certificado en Soporte Computacional",
        descripcion: "Certificado de Soporte Computacional otorgado por INACAP.",
        imagen: logro_8,
        enlace: "https://drive.google.com/file/d/1x3vla4MQWYcjhNQDezU4eeLn8DYrz_NG/view?usp=sharing"
    }





];

const miDatosFooter = [
    { text: "linkedin", url: "http://www.linkedin.com/in/simón-santibáñez", icon: linkedin },
    { text: "instagram", url: "https://www.instagram.com/coder_saimon/", icon: instagram },
    { text: "github", url: "https://github.com/WorkWithDevSimon", icon: github },
    { text: "whatsapp", url: "https://wa.me/945739628", icon: whatsapp }

]



// -------------------------------------------------------------------------------------

export { habilidadesData, projectsData, mainDatos, acercaDeMiDatos, miDatosFooter, logros_datos };




