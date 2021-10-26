import firebase from './secret.js';

const db = firebase.firestore();
export const getData = () => db.collection('trasmuta')
  .get();

export const post = (texto) => {
  db.collection('trasmuta').doc().set({
    texto,
  });
};
