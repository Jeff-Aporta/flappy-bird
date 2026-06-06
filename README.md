# Flappy Bird v2

![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![p5.js](https://img.shields.io/badge/p5.js-ED225D?style=for-the-badge)

Recreación del clásico **Flappy Bird** desarrollada con **HTML**, **CSS**, **JavaScript** y **p5.js** como proyecto educativo. El juego vive en `src/` con arquitectura modular; la raíz del repo incluye además una landing de presentación que lo embebe por iframe.

**Demo en vivo:** [https://jeff-aporta.github.io/flappy-bird/](https://jeff-aporta.github.io/flappy-bird/)

## Tutorial en video

Proyecto basado en el siguiente tutorial de YouTube. Haz clic en la miniatura para ver el video completo:

[![Tutorial Flappy Bird con p5.js](https://img.youtube.com/vi/MRk55wiOAMQ/hqdefault.jpg)](https://www.youtube.com/watch?v=MRk55wiOAMQ)

**Ver en YouTube:** [https://www.youtube.com/watch?v=MRk55wiOAMQ](https://www.youtube.com/watch?v=MRk55wiOAMQ)

**Código del tutorial (sketch p5.js):** [Flappy Bird en p5.js Web Editor](https://editor.p5js.org/Jeff-Aporta/sketches/1MwUdFHrx) — código desarrollado paso a paso en el video.

> Este repositorio parte de ese mismo proyecto, pero aquí el código está **mucho más organizado, modular y depurado**: arquitectura por carpetas, separación de responsabilidades, assets renombrados, landing de presentación y listo para producción en GitHub Pages.

![Flappy Bird](src/assets/images/yellowbird-midflap.png)

## Características

- Motor de juego con p5.js (canvas 1280×720)
- Sistema de colisiones círculo-rectángulo personalizado
- Física de vuelo con gravedad y rotación dinámica
- Sprites animados, sonidos y tipografía original
- Arquitectura modular en `src/` lista para mantener y escalar

## Estructura del proyecto

```
flappy-bird/
├── index.html              # Landing de presentación (React + MUI)
├── presentation/
│   ├── App.jsx             # Componente principal de la landing
│   ├── Icon.jsx            # Componente de iconos offline
│   ├── iconRegistry.js     # SVG embebidos (Iconify descargados)
│   ├── icons/              # SVG locales de respaldo
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

## Stack tecnológico del juego (`src/`)

Tecnologías usadas en `src/index.html`, tal como aparecen en el código del juego:

| Tecnología | Uso en el proyecto |
|------------|-------------------|
| **HTML** | Estructura y carga de scripts en `src/index.html` |
| **CSS** | Estilos del canvas y layout en `src/css/game.css` |
| **JavaScript** | Lógica modular en `src/js/` (`config/`, `core/`, `entities/`, `geometry/`) |
| **p5.js** | Motor de renderizado, física y manejo del canvas |

> La landing de presentación en la raíz (`index.html`) usa React y Material UI solo como capa de portfolio; **el juego en sí no depende de ellas**.

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

El juego se construyó siguiendo el [tutorial en YouTube](https://www.youtube.com/watch?v=MRk55wiOAMQ). El código tal como aparece en el video está disponible en el editor oficial:

- **Video del tutorial:** [https://www.youtube.com/watch?v=MRk55wiOAMQ](https://www.youtube.com/watch?v=MRk55wiOAMQ)
- **Sketch del tutorial:** [https://editor.p5js.org/Jeff-Aporta/sketches/1MwUdFHrx](https://editor.p5js.org/Jeff-Aporta/sketches/1MwUdFHrx)

Ese sketch es el punto de partida. En este repositorio de GitHub se tomó esa base y se elevó a **código de alta calidad** con HTML, CSS, JS y p5.js: módulos independientes (`entities/`, `geometry/`, `config/`), constantes centralizadas, assets estructurados y estilos separados.

| Aspecto | Sketch del video | Este repositorio |
|---------|------------------|------------------|
| Estructura | Archivos sueltos en un solo HTML | Carpetas `src/`, `presentation/`, `assets/` |
| Colisiones | `rect&circle.js` monolítico | `geometry/Circle.js` + `Rectangle.js` |
| Entidades | Funciones inline en `index.html` | `Bird.js`, `Pipe.js`, `Floor.js` |
| Deploy | Solo editor p5.js | GitHub Pages + landing con iframe |
| Mantenibilidad | Prototipo educativo | Código modular listo para escalar |

## Créditos

- Assets y concepto basados en el clásico Flappy Bird
- Tutorial en [YouTube](https://www.youtube.com/watch?v=MRk55wiOAMQ) y sketch original en [p5.js Web Editor](https://editor.p5js.org/Jeff-Aporta/sketches/1MwUdFHrx)
- Versión refactorizada y publicada por [Jeff-Aporta](https://github.com/Jeff-Aporta)

## Licencia

Proyecto educativo con fines de aprendizaje. Los assets gráficos y sonoros pertenecen a sus respectivos autores.
