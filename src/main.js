/* eslint-disable import/no-cycle */
// eslint-disable-next-line import/named

import { muro } from '../src/Componente2/Muro.js';
import { registro } from '../src/Componente2/Registro.js';
import { inicio } from "../src/Componente2/Iniciar.js";
const rootDiv = document.getElementById('root');

const rutas = {
  '/': inicio,
  '/muro': muro,
  '/registro': registro,
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

  rootDiv.appendChild(rutas[pathname]());
};
const component = rutas[window.location.pathname];
// crea un historial de las rutas que ha contenido
window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(rutas[window.location.pathname]());
};

rootDiv.appendChild(component());
