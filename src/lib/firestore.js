import firebase from './secret.js';

const db = firebase.firestore();

export const obtenerData = () => db.collection('1')
  .get();

export const guardarPublicacion = (texto) => {
  db.collection('1').doc().set({
    texto,
  });
};
export const actualizar = (callback) => db.collection('1').onSnapshot(callback);

// eslint-disable-next-line max-len
export const eliminarPublicacion = (id) => db.collection('1').doc(id).delete();

// eslint-disable-next-line max-len
// export const recargar = (callback) => db.collection('1').onSnapshot(callback);
