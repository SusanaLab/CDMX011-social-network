// eslint-disable-next-line import/no-cycle
import { signOut } from '../lib/firebaseAuth.js';
import { post, getData } from '../lib/firestore.js';

export const muro = () => {
  const homeDiv = document.createElement('div');
  homeDiv.id = 'homeDiv';
  const tituloHome = document.createElement('h1');
  tituloHome.id = 'marcaMuro';
  tituloHome.textContent = 'TRANSMUTA';
  const formPublicaciones = document.createElement('div');
  formPublicaciones.id = 'formPublicaciones';
  const publicar = document.createElement('input');
  publicar.className = 'publicar';
  const botonPublicar = document.createElement('button');
  botonPublicar.textContent = 'Publicar';
  botonPublicar.id = 'boton-publicar';
  botonPublicar.addEventListener('click', () => {
    post(publicar.value);
    console.log(publicar.value);
  });
  const publicarDiv = document.createElement('div');
  publicarDiv.id = 'publicarDiv';
  const botonSalir = document.createElement('button');
  botonSalir.textContent = 'Cerrar sesión';
  botonSalir.id = 'boton-salir';
  botonSalir.addEventListener('click', () => {
    signOut();
  });
  formPublicaciones.appendChild(publicar);
  formPublicaciones.appendChild(botonPublicar);
  homeDiv.appendChild(tituloHome);
  homeDiv.appendChild(formPublicaciones);
  homeDiv.appendChild(publicarDiv);
  homeDiv.appendChild(botonSalir);
  const templatePost = (publicacion) => {
    const divPost = document.createElement('div');
    const html = `
    <p> ${publicacion.texto}</p>`;
    divPost.innerHTML = html;
    publicarDiv.appendChild(divPost);
  };

  const printData = () => {
    getData()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, doc.data());
          templatePost(doc.data());
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  };
  printData();

  return homeDiv;
};
