# Flappy Bird v2

Recreación del clásico **Flappy Bird** desarrollada con **p5.js** como proyecto educativo. Incluye una landing page profesional con **React 18** y **Material UI**, y el juego embebido mediante iframe.

**Demo en vivo:** [https://dev-insoft-web.github.io/flappy-bird/](https://dev-insoft-web.github.io/flappy-bird/)

**Código del tutorial (video):** [Flappy Bird en p5.js Web Editor](https://editor.p5js.org/Jeff-Aporta/sketches/1MwUdFHrx) — sketch original desarrollado paso a paso en el video.

> Este repositorio parte de ese mismo proyecto, pero aquí el código está **mucho más organizado, modular y depurado**: arquitectura por carpetas, separación de responsabilidades, assets renombrados, landing de presentación y listo para producción en GitHub Pages.

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

## Origen del proyecto

El juego se construyó siguiendo un tutorial práctico con p5.js. El código tal como aparece en el video está disponible en el editor oficial:

- **Sketch del tutorial:** [https://editor.p5js.org/Jeff-Aporta/sketches/1MwUdFHrx](https://editor.p5js.org/Jeff-Aporta/sketches/1MwUdFHrx)

Ese sketch es el punto de partida. En este repositorio de GitHub se tomó esa base y se elevó a **código de alta calidad**: módulos independientes (`entities/`, `geometry/`, `config/`), constantes centralizadas, assets estructurados, estilos separados y una capa de presentación profesional con React y Material UI.

| Aspecto | Sketch del video | Este repositorio |
|---------|------------------|------------------|
| Estructura | Archivos sueltos en un solo HTML | Carpetas `src/`, `presentation/`, `assets/` |
| Colisiones | `rect&circle.js` monolítico | `geometry/Circle.js` + `Rectangle.js` |
| Entidades | Funciones inline en `index.html` | `Bird.js`, `Pipe.js`, `Floor.js` |
| Deploy | Solo editor p5.js | GitHub Pages + landing con iframe |
| Mantenibilidad | Prototipo educativo | Código modular listo para escalar |

## Créditos

- Assets y concepto basados en el clásico Flappy Bird
- Tutorial y sketch original en [p5.js Web Editor](https://editor.p5js.org/Jeff-Aporta/sketches/1MwUdFHrx)
- Versión refactorizada y publicada por [Dev-InSoft-web](https://github.com/Dev-InSoft-web)

## Licencia

Proyecto educativo con fines de aprendizaje. Los assets gráficos y sonoros pertenecen a sus respectivos autores.
