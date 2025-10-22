print 'n\n' | npm create vite@latest ./ -- --template react
npm i
# git init
# Limpiando el proyecto
rm public/vite.svg src/assets/react.svg src/App.css
echo "" > src/index.css # Limpiando de contenido el archivo
echo "" > src/App.jsx # limpiando de contenido el archivo
# https://tailwindcss.com/docs/installation/using-vite
# Dependencias Tailwind
npm i tailwindcss @tailwindcss/vite
echo "@import 'tailwindcss';" > src/index.css
# https://reactrouter.com/
# Dependencias de React Router
npm i react-router