import{j as s,m as t,N as l,h as x,a as h,r as p,p as _}from"./index-7af6a08f.js";/* empty css                            */import{C as N}from"./ComponenteContacto-b8979521.js";const g=()=>s.jsx(s.Fragment,{children:s.jsx("section",{className:"contenedor_main",children:s.jsxs("main",{className:"main",children:[s.jsxs("section",{className:"main_info",children:[s.jsxs("h1",{children:[t.main_info_h1,s.jsx("span",{children:t.main_info_span})]}),s.jsx("span",{className:"text_animated",children:" "}),s.jsx("p",{className:"main_info_descripcion",children:t.main_info_descripcion}),s.jsx("div",{className:"main_info_redes",children:t.main_info_redes.map((e,i)=>s.jsx("a",{href:e.url,children:s.jsx("img",{src:e.icon,alt:e.text,target:"_blank"})},i))}),s.jsx("a",{href:"/documents/CV_Informatica.docx",download:!0,children:s.jsx("button",{className:"btn",children:"Descargar CV"})}),s.jsx(l,{to:"/Contacto",children:s.jsx("button",{className:"btn",children:"Contactame"})})]}),s.jsx("img",{src:t.img_main,className:"img_main",alt:"primer imagen main"})]})})});const b=()=>s.jsx(s.Fragment,{children:s.jsxs("section",{className:"habilidades",children:[s.jsxs("div",{className:"habilidades_titulo",children:[s.jsx("h1",{children:"Habilidades"}),s.jsx("div",{className:"SobreLinea"})]}),s.jsx("div",{className:"card_container_habilidades",children:x.habilidades.map((e,i)=>s.jsxs("div",{className:e.nombre_clase,children:[s.jsx("h3",{children:e.title}),s.jsx("div",{className:"card_habilidaes_lenguajes",children:e.images.map((c,r)=>s.jsx("a",{href:c.url,target:"_blank",rel:"noopener noreferrer",children:s.jsx("img",{src:c.img,alt:`icon-${r}`})},r))})]},i))})]})});const u=()=>h.map((e,i)=>s.jsxs("section",{className:"acercaDeMi",children:[s.jsx("img",{src:e.imgSrc,className:"img_AcercaDemi",alt:"Imagen acerca de mi"}),s.jsxs("div",{className:"acercaDeMi_info",children:[s.jsxs("div",{className:"acercaDeMiConetendor",children:[s.jsx("h1",{children:e.title}),s.jsx("div",{className:"SobreLineaacercaDeMi_info"})]}),e.paragraphs.map((c,r)=>s.jsx("p",{children:c},r)),s.jsx(l,{to:"/Certificados",children:s.jsx("button",{className:"btn",children:"Certificaciones"})})]})]},i)),C=()=>{const i=_.proyectos.slice(0,3),[c,r]=p.useState(null),d=a=>{r(a)},m=()=>{r(null)};return s.jsxs(s.Fragment,{children:[s.jsxs("section",{className:"proyectos",children:[s.jsxs("div",{className:"proyectos_titulo",children:[s.jsx("h1",{children:"Proyectos"}),s.jsx("div",{className:"SobreLinea"})]}),s.jsx("div",{className:"contenedor_tarjeta",children:i.map((a,j)=>s.jsxs("div",{className:"tarjeta",children:[s.jsx("div",{className:"deslizador",children:a.imgSrc.map((n,o)=>s.jsx("img",{src:n,alt:`img ${o}`,className:"tarjeta_img",onClick:()=>d(n)},o))}),s.jsxs("div",{className:"tarjeta_info",children:[s.jsx("h3",{children:a.title}),s.jsx("p",{children:a.description}),s.jsx("div",{className:"tarjeta_Lenguajes",children:a.languages.map((n,o)=>s.jsx("img",{src:n,alt:`Icono ${o}`},o))}),a.links.map((n,o)=>s.jsx("a",{href:n.url,children:s.jsxs("button",{className:"btn_tarjeta",children:[n.text," ",s.jsx("img",{src:n.icon,alt:"Imagenes_proyectos"})]})},o))]})]},j))}),s.jsx(l,{to:"/Proyectos",onClick:()=>window.scrollTo(0,0),children:s.jsx("button",{className:"btn_conermas_Proyecto",children:"Conoce mis otros proyectos!"})})]}),c&&s.jsx("div",{className:"modal",onClick:m,children:s.jsxs("div",{className:"modal_content",onClick:a=>a.stopPropagation(),children:[s.jsx("span",{className:"close",onClick:m,children:"×"}),s.jsx("img",{src:c,alt:"Imagen ampliada",className:"modal_img"})]})})]})},f=()=>s.jsxs(s.Fragment,{children:[s.jsx(g,{}),s.jsx(b,{}),s.jsx(u,{}),s.jsx(C,{}),s.jsx(N,{})]}),k=()=>s.jsx(s.Fragment,{children:s.jsx(f,{})});export{k as Inicio};