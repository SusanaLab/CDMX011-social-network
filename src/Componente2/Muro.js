// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
// import { logout } from '../lib/firebaseAuth.js';

export const muro = () => {
  const homeDiv = document.createElement('div');
  homeDiv.id = 'homeDiv';
  const tituloHome = document.createElement('h1');
  tituloHome.id = 'marcaMuro';
  tituloHome.textContent = 'TRANSMUTA';
  const publicar = document.createElement('input');
  publicar.textContent = 'publicar';
  publicar.className = 'publicar';
  const botonPublicar = document.createElement('button');
  botonPublicar.textContent = 'Publicar';
  botonPublicar.id = 'boton-publicar';
  botonPublicar.addEventListener('click', () => onNavigate('/muro'));
  const botonSalir = document.createElement('button');
  botonSalir.textContent = 'Cerrar Sesion';
  botonSalir.id = 'boton-salir';
  botonSalir.addEventListener('click', () => {
    // logout();
  });
  homeDiv.appendChild(tituloHome);
  homeDiv.appendChild(publicar);
  homeDiv.appendChild(botonPublicar);
  homeDiv.appendChild(botonSalir);

  return homeDiv;
};
