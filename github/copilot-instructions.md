# Instrucciones para GitHub Copilot - Proyecto React + GSAP

Este proyecto utiliza React, Vite, Tailwind CSS y GSAP. Sigue estas reglas y mejores prácticas al generar código.

## Reglas Generales
1.  **Idioma**: Responde y comenta en Español.
2.  **Estilos**: Utiliza Tailwind CSS para el estilizado. Evita CSS puro a menos que sea estrictamente necesario para animaciones complejas no cubiertas por Tailwind.
3.  **Componentes**: Crea componentes funcionales modernos con Hooks.

## Reglas para GSAP (Animaciones)

Al trabajar con GSAP en React, es CRÍTICO seguir estas prácticas para asegurar el rendimiento y evitar fugas de memoria (memory leaks) o conflictos con el "Strict Mode" de React 18+.

### 1. Gestión del Ciclo de Vida y Limpieza (Cleanup)
*   **SIEMPRE** utiliza `gsap.context()` dentro de `useEffect` o `useLayoutEffect`.
*   **SIEMPRE** revierte el contexto en la función de limpieza (cleanup) del hook.

```javascript
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

// ... dentro del componente
const containerRef = useRef();

useEffect(() => {
  const ctx = gsap.context(() => {
    // Tus animaciones aquí.
    // Puedes usar selectores de texto que se limitan a este contenedor:
    gsap.to(".box", { x: 100 }); 
  }, containerRef); // Scope opcional pero recomendado

  return () => ctx.revert(); // ¡CRUCIAL! Limpia todo al desmontar
}, []);
```

### 2. Selección de Elementos
*   Prefiere `useRef` para obtener referencias directas a los elementos del DOM.
*   Si necesitas seleccionar múltiples elementos, usa el "scoping" de `gsap.context` (el segundo argumento) y selectores de clase estándar dentro de ese contexto.

### 3. ScrollTrigger
*   Registra el plugin fuera del componente: `gsap.registerPlugin(ScrollTrigger);`.
*   Define los triggers dentro del `gsap.context` para que se limpien automáticamente.

### 4. Rendimiento
*   Anima propiedades de transformación (`x`, `y`, `scale`, `rotation`) y `opacity` siempre que sea posible. Evita animar `width`, `height`, `top`, `left` ya que provocan "reflows" costosos.
*   Usa `will-change` en CSS (o vía Tailwind `will-change-transform`) solo si notas problemas de rendimiento (jank).

### 5. Evita Flash of Unstyled Content (FOUC)
*   Usa `useLayoutEffect` en lugar de `useEffect` si la animación manipula el DOM antes de que el navegador pinte la pantalla, para evitar parpadeos iniciales.

## Stack Tecnológico
*   **Framework**: React + Vite
*   **Estilos**: Tailwind CSS
*   **Animaciones**: GSAP (GreenSock)
*   **Lenguaje**: JavaScript (ESModules)