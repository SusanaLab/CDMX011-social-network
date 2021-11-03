// eslint-disable-next-line import/no-cycle
import { cerrarSesion } from '../lib/firebaseAuth.js';
import { obtenerData, guardarPublicacion, actualizar } from '../lib/firestore.js';

export const muro = () => {
  const muroDiv = document.createElement('div');
  muroDiv.id = 'muroDiv';
  const tituloMuro = document.createElement('h1');
  tituloMuro.id = 'marcaMuro';
  tituloMuro.textContent = 'TRANSMUTA';
  const formPublicaciones = document.createElement('div');
  formPublicaciones.id = 'formPublicaciones';
  const publicar = document.createElement('input');
  publicar.className = 'publicar';
  const botonPublicar = document.createElement('button');
  botonPublicar.textContent = 'Publicar';
  botonPublicar.id = 'boton-publicar';
  botonPublicar.addEventListener('click', () => {
    guardarPublicacion(publicar.value);
    console.log(publicar.value);
  });
  const publicarDiv = document.createElement('div');
  publicarDiv.id = 'publicarDiv';
  const botonSalir = document.createElement('button');
  botonSalir.textContent = 'Cerrar sesión';
  botonSalir.id = 'boton-salir';
  botonSalir.addEventListener('click', () => {
    cerrarSesion();
  });
  formPublicaciones.appendChild(publicar);
  formPublicaciones.appendChild(botonPublicar);
  muroDiv.appendChild(tituloMuro);
  muroDiv.appendChild(formPublicaciones);
  muroDiv.appendChild(publicarDiv);
  muroDiv.appendChild(botonSalir);
  const plantillaPublicacion = (publicacion) => {
    const divPost = document.createElement('div');
    const html = `

    <p id="parrafo"> ${publicacion.texto}</p> <button class="delete" > Eliminar </button>`;
    divPost.innerHTML = html;
    publicarDiv.appendChild(divPost);
  };

  const imprimirData = () => {
    obtenerData();
    actualizar((querySnapshots) => {
      querySnapshots.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, doc.data());
        plantillaPublicacion(doc.data());
      });
    });
  };
  imprimirData();
  return muroDiv;
};
