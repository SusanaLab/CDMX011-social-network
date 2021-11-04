// eslint-disable-next-line import/no-cycle
import { cerrarSesion } from '../lib/firebaseAuth.js';
import { guardarPublicacion, actualizar, eliminarPublicacion } from '../lib/firestore.js';

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
    // console.log(publicar.value, "publicar");
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
  const plantillaPublicacion = (publicacion, id) => {
    const divPost = document.createElement('div');
    const textoPublicacion = document.createElement('p');
    textoPublicacion.id = 'parrafo';
    textoPublicacion.textContent = publicacion.texto;
    divPost.appendChild(textoPublicacion);
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.className = 'delete';
    botonEliminar.id = id;
    botonEliminar.addEventListener('click', () => {
      eliminarPublicacion(id);
    });
    // console.log(botonEliminar.id, 'eliminar');
    divPost.appendChild(botonEliminar);
    publicarDiv.appendChild(divPost);
  };

  const imprimirData = () => {
    actualizar((querySnapshots) => {
      querySnapshots.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, doc.data());
        plantillaPublicacion(doc.data(), doc.id);
      });
    });
  };
  imprimirData();
  return muroDiv;
};
