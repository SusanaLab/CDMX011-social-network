import firebase from './secret.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export function crearCuentaConCorreoYContraseña() {
  const formRegistro = document.querySelector('#formRegistro');
  formRegistro.addEventListener('submit', (e) => {
    e.preventDefault();
    const correo = document.querySelector('#c-electronico').value;
    const contraseña = document.querySelector('.contraseña').value;
    firebase.auth()
      .createUserWithEmailAndPassword(correo, contraseña)
      .then((userCredential) => {
        onNavigate('/muro');
        const user = userCredential.user;
        formRegistro.reset();
        console.log(user);
        // ...
      });
  });
}
export function crearCuentaConGoogle(callback) {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then(() => {
      callback('/muro');
    }).catch(() => {
      alert('Inicio de sesion exitoso');
    });
}
export function crearCuentaConGithub() {
  const provider = new firebase.auth.GithubAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    // eslint-disable-next-line no-unused-vars
    .then(() => {
      onNavigate('/muro');
    // eslint-disable-next-line no-unused-vars
    }).catch(() => {
      alert('errorMessage');
    });
}
export function cerrarSesion() {
  firebase.auth().signOut().then(() => {
    onNavigate('/');
  }).catch(() => {
    alert('Por favor intentalo de nuevo');
  });
}

/* const fire = firebaseApp.auth().onAuthStateChanged((user) => {
  if (user) {
    const { currentUser } = firebaseApp.auth();
    console.log('Currently logged in user', currentUser);
    // eslint-disable-next-line no-empty
  } else {
  }
}); */
