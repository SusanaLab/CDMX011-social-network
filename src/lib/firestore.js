import firebase from './secret.js';

const db = firebase.firestore();

export const obtenerPublicion = (id) => db.collection('2').doc(id).get();

export const guardarPublicacion = (texto) => {
  db.collection('2').doc().set({
    texto,
  });
};

export const actualizar = (callback) => db.collection('2').onSnapshot(callback);

export const eliminarPublicacion = (id) => db.collection('2').doc(id).delete();

export const dataEditar = (id) => db.collection('2').doc(id).get();
