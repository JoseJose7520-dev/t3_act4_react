# Actividad 4: Configuración y Conceptos Fundamentales de React (Vite)

## Descripción del Proyecto
Este repositorio contiene la resolución de la Actividad 4 de React. El proyecto fue desarrollado utilizando **Vite + React** siguiendo los conceptos explicados en el video tutorial *"CURSO de REACT desde cero 2025 – Aprende React Desde Cero"*.

Se implementaron componentes funcionales, paso de propiedades (`props`), gestión de estado interno (`useState`), manejo de eventos y renderizado dinámico de listas mediante el método `.map()`.

---

## Respuestas al Cuestionario

### a) ¿Qué diferencia hay entre `props` y `state` en React?
- **`props` (Propiedades):** Son datos de entrada que un componente padre le transmite a un componente hijo. Son inmutables (solo lectura) desde la perspectiva del hijo y sirven para reutilizar componentes.
- **`state` (Estado):** Es la memoria interna de un componente. Son datos administrados por el propio componente que pueden cambiar con la interacción del usuario. Cuando el estado se actualiza, React re-renderiza la interfaz.

### b) ¿Por qué es importante usar una `key` al renderizar una lista de elementos?
La clave `key` es un identificador único requerido por el Virtual DOM de React al recorrer listas con `.map()`. Permite identificar de forma eficiente qué elementos han sido modificados, agregados o eliminados, optimizando el rendimiento y evitando inconsistencias en la interfaz.

### c) Explica con tus propias palabras qué hace la función `useState` y da un ejemplo de dónde la usaste en tu mini aplicación.
`useState` es un Hook que permite añadir estado local a un componente funcional. Devuelve una variable con el valor actual y una función para actualizarlo.

- **d) Enlace del repositorio de GitHub:** [https://github.com/JoseJose7520-dev/t3_act4_react](https://github.com/JoseJose7520-dev/t3_act4_react)

- **e) Enlace del proyecto desplegado en GitHub Pages:** [https://JoseJose7520-dev.github.io/t3_act4_react/](https://JoseJose7520-dev.github.io/t3_act4_react/)

**Ejemplo de uso:**
En el componente `Counter.jsx`, utilicé `useState` para controlar el número del contador:
```jsx
const [count, setCount] = useState(0);