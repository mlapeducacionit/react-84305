# Clase 02 - React.js Developer

## Extensiones

* dsznajder.es7-react-js-snippets


## Instalando Tailwind en Vite con React

<https://tailwindcss.com/docs/installation/using-vite>

```sh
npm install tailwindcss @tailwindcss/vite
```

## Agregando el plugin de tailwind en vite.config.js

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <---------

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()], // <------
})

```

### Agregar la hoja de estilos de tailwind

```css
@import "tailwindcss";
```