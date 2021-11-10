import firebase from './secret.js';

const db = firebase.firestore();

export const obtenerPublicion = (id) => db.collection('final').doc(id).get();

export const guardarPublicacion = (texto) => {
  db.collection('final').doc().set({
    texto,
  });
};

export const actualizar = (callback) => db.collection('final').onSnapshot(callback);

export const eliminarPublicacion = (id) => db.collection('final').doc(id).delete();
