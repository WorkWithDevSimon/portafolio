import React, { lazy, Suspense } from 'react';
import { Navegador } from './components/Navegador/Navegador';
import { Footer } from './components/footer/Footer';
import { Routes, Route, Navigate } from "react-router-dom";
import './app.css'

// Carga de rutas de manera perezosa (lazy loading)
const Inicio = lazy(() => import('./routes/Inicio').then(x => {
  console.log('Inicio cargado');
  return { default: x.Inicio }; // Asegúrate de que el nombre sea correcto
}));
const Certificados = lazy(() => import('./routes/Certificados').then(x => {
  console.log('Certificados cargado');
  return { default: x.Certificados }; // Asegúrate de que el nombre sea correcto
}));
const Proyectos = lazy(() => import('./routes/Proyectos').then(x => {
  console.log('Proyectos cargado');
  return { default: x.Proyectos }; // Asegúrate de que el nombre sea correcto
}));
const Contacto = lazy(() => import('./routes/Contacto').then(x => {
  console.log('Contacto cargado');
  return { default: x.Contacto }; // Asegúrate de que el nombre sea correcto
}));


const App = () => {
  return (
    <>
      <Navegador />
      <main>
        <Suspense fallback={<div className='cargando'></div>}>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/Certificados' element={<Certificados />} />
            <Route path='/Proyectos' element={<Proyectos />} />
            <Route path='/Contacto' element={<Contacto />} />
            <Route path='/*' element={<Navigate to='/' />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default App;
