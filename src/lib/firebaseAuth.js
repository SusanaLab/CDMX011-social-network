import firebase from './secret.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export function crateAccountWithEmail() {
  const formRegistro = document.querySelector('#formRegistro');
  formRegistro.addEventListener('submit', (e) => {
    e.preventDefault();
    const correo = document.querySelector('#c-electronico').value;
    console.log(correo);
    const contraseña = document.querySelector('.contraseña').value;
    console.log(contraseña);
    firebase.auth()
      .createUserWithEmailAndPassword(correo, contraseña)
      .then(() => {
        onNavigate('/muro');
        formRegistro.reset();
      });
  })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode);
      alert(errorMessage);
    });
}

export function crateAccountWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then(() => {
      onNavigate('/muro');
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode);
      alert(errorMessage);
    });
}
export function crateAccountWithGithub() {
  const provider = new firebase.auth.GithubAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then(() => {
      onNavigate('/muro');
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('hi');
      console.log(errorCode);
      console.log(errorMessage);
    });
}
export function logout() {
  firebase.auth().signOut().then(() => {
  // Sign-out successful.
  }).catch(() => {
    alert('hi');
  });
}
