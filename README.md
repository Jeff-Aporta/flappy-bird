# Flappy Bird v2

Recreación del clásico **Flappy Bird** desarrollada con **p5.js** como proyecto educativo. Incluye una landing page profesional con **React 18** y **Material UI**, y el juego embebido mediante iframe.

**Demo en vivo:** [https://dev-insoft-web.github.io/flappy-bird/](https://dev-insoft-web.github.io/flappy-bird/)

![Flappy Bird](src/assets/images/yellowbird-midflap.png)

## Características

- Motor de juego con p5.js (canvas 1280×720)
- Sistema de colisiones círculo-rectángulo personalizado
- Física de vuelo con gravedad y rotación dinámica
- Sprites animados, sonidos y tipografía original
- Landing page responsive con React + MUI
- Arquitectura modular y lista para GitHub Pages

## Estructura del proyecto

```
flappy-bird/
├── index.html              # Landing de presentación (React + MUI)
├── presentation/
│   ├── App.jsx             # Componente principal de la landing
│   └── styles.css          # Estilos de la presentación
├── src/                    # Juego (p5.js)
│   ├── index.html          # Entry point del juego
│   ├── css/
│   │   └── game.css
│   ├── js/
│   │   ├── config/
│   │   │   └── constants.js
│   │   ├── core/
│   │   │   └── game.js
│   │   ├── entities/
│   │   │   ├── Bird.js
│   │   │   ├── Floor.js
│   │   │   └── Pipe.js
│   │   └── geometry/
│   │       ├── Circle.js
│   │       └── Rectangle.js
│   └── assets/
│       ├── audio/
│       ├── fonts/
│       └── images/
├── .nojekyll               # Requerido para GitHub Pages
└── README.md
```

## Cómo jugar

1. Abre `index.html` en el navegador (o visita la demo en GitHub Pages).
2. Haz clic en **Jugar ahora** o interactúa directamente con el iframe.
3. **Clic** o **barra espaciadora** para hacer volar al pájaro.
4. Tras perder, vuelve a hacer clic para reiniciar.

También puedes abrir el juego directamente en `src/index.html`.

## Stack tecnológico

| Capa | Tecnología |
|------|------------|
| Juego | p5.js, JavaScript vanilla |
| Presentación | React 18, Material UI 5 |
| Estilos | CSS modular |
| Deploy | GitHub Pages (rama `main`) |

## Desarrollo local

No requiere build ni dependencias instaladas. Sirve los archivos con cualquier servidor estático:

```bash
# Python
python -m http.server 8080

# Node (npx)
npx serve .
```

Luego abre `http://localhost:8080`.

## Créditos

- Assets y concepto basados en el clásico Flappy Bird
- Proyecto creado siguiendo un tutorial práctico de desarrollo con p5.js
- Desarrollado por [Dev-InSoft-web](https://github.com/Dev-InSoft-web)

## Licencia

Proyecto educativo con fines de aprendizaje. Los assets gráficos y sonoros pertenecen a sus respectivos autores.
