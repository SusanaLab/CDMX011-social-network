/* eslint-disable import/no-cycle */

import { inicio } from './Component/Iniciar.js';
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/named
import { muro } from './Component/Muro.js';
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line no-unused-vars
import { registro } from './Component/Registro.js';


const rootDiv = document.getElementById('root');

const rutas = {
  '/': inicio,

  '/registro': registro,
  '/muro': muro,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(rutas[window.location.pathname]());
};
const component = rutas[window.location.pathname];


 
window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(rutas[window.location.pathname]());
};


