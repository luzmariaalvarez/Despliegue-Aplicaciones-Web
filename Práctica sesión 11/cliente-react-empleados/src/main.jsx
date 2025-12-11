// Punto de entrada de la aplicación React.
// Este archivo monta el componente <App /> dentro del HTML principal.

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Buscamos en el HTML el elemento con id="root"
const rootElement = document.getElementById("root");

// Creamos la raíz de React y renderizamos la aplicación
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
