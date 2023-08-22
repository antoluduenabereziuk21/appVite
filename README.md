# appVite
<h1>Realizando Prueba Tecnica Junto Con Midu</h1>

<p>En esta pruba tecnica se pide crear se pide crear un proyecto desde cero con Vite
(npm create vite@latest); 
Pero no te permiten iniciar con un templete de React, si no que tu configures vite.
Para Ello lo inicializamos con vanilla, y crearemos el punto de entrada.

 Instaleremos el plugin de react.

 npm install @vitejs/plugin-react -E   

 Para luego instaler react(la biblioteca de react)
y react-dom (los bainding con el navegador ). 
Con -E para la instalcion de la version exacta.

npm install react react-dom -E

Luego Generaremos el archivo vite.config.js(puedes guiarte en la documetacion oficial para guiarte).

import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
});

Lo proximo es hacer el punto de entrada ala aplicacion.

El index.html tenemos un script que estoy cargando al principio de la apliacion, que es el PUNTO_DE_ENTRADA .

Ahora como iniciamos una aplicacion con react?

Dentro del main.js

primero importando createRoot del react-dom

import{createRoot} from 'react-dom/client';

traemos con createRoot donde queremos rendirizar la aplicacion

const root = createRoot(document.getElementByID('app'));

Para Luego mediante el metodo render , renderizar la aplicacion

root.render(
    <h1>Hello World!</h1>
)

ahora para lo proximo es cambiar el main.js a main.jsx, y ademas modificar la etiqueta script

</p>
