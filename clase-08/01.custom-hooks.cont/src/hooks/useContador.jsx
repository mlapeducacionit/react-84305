// ! Un hook personalizado nos permite extraer la logica de los componentes en un archivo para su posterior reutilización 
/* 1. El nombre del archivo tiene que comenzar con 'use'... Por ejemplo useContador, useFetch, useForm, useLocalStorage */
/* 2. Un hook personalizado es una función de javascript. Con el nombre que use para el archivo */
/* 3. Dentro de la función creada en el paso 2, tengo que si o si, utilizar alguno de los hooks buildin (Incomporados en react)... useState, useEffect... */
/* 4. Tiene que exportarse para poder utilizarse en los componentes */

const useContador = () => {
    // useState, useEffect
    
}

export default useContador