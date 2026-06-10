const {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Stack,
  Card,
  CardContent,
  Alert,
  AppBar,
  Toolbar,
  Divider,
  Grid,
} = MaterialUI;

const TUTORIAL_SKETCH_URL = 'https://editor.p5js.org/Jeff-Aporta/sketches/1MwUdFHrx';
const GEOMETRY_URL = 'https://jeff-aporta.github.io/jeff-geometry/';
const GEOMETRY_GITHUB = 'https://github.com/Jeff-Aporta/jeff-geometry';
const GITHUB_URL = 'https://github.com/Jeff-Aporta/flappy-bird';
const DOWNLOAD_ZIP_URL = 'https://github.com/Jeff-Aporta/flappy-bird/archive/refs/heads/main.zip';
const DEMO_URL = 'https://jeff-aporta.github.io/flappy-bird/';
/** Cambiar a true cuando el tutorial editado esté publicado y embeddable en YouTube */
const TUTORIAL_VIDEO_READY = false;
const TUTORIAL_VIDEO_URL = 'https://www.youtube.com/watch?v=MRk55wiOAMQ';
const TUTORIAL_VIDEO_EMBED = 'https://www.youtube.com/embed/MRk55wiOAMQ';
const TUTORIAL_THUMB = 'presentation/assets/tutorial-thumb.jpg';
const LEGACY_VIDEO_URL = 'https://youtu.be/nfNe-SPlumY';
const LEGACY_VIDEO_EMBED = 'https://www.youtube.com/embed/nfNe-SPlumY';

function TutorialVideoPlayer() {
  if (TUTORIAL_VIDEO_READY) {
    return (
      <iframe
        title="Tutorial Flappy Bird con p5.js"
        src={`${TUTORIAL_VIDEO_EMBED}?rel=0`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    );
  }

  return (
    <Box className="video-placeholder" role="img" aria-label="Miniatura del tutorial — video próximamente en YouTube">
      <img className="video-placeholder__thumb" src={TUTORIAL_THUMB} alt="" />
      <Box className="video-placeholder__shade" aria-hidden="true" />
      <Box className="video-placeholder__controls" aria-hidden="true">
        <Box className="video-placeholder__play">
          <Icon icon="mdi:play-circle" size={34} color="#ffffff" />
        </Box>
        <Box className="video-placeholder__bar">
          <span className="video-placeholder__progress" />
        </Box>
        <Typography component="span" className="video-placeholder__time">
          0:00 / --:--
        </Typography>
      </Box>
      <Chip
        className="video-placeholder__badge"
        size="small"
        label="Próximamente en YouTube"
        icon={<Icon icon="mdi:information-outline" size={14} color="#94a3b8" />}
      />
    </Box>
  );
}

/** Stack real del juego en src/index.html */
const GAME_STACK = [
  { label: 'HTML', icon: 'logos:html-5' },
  { label: 'CSS', icon: 'mdi:language-css3' },
  { label: 'JS', icon: 'mdi:language-javascript' },
  { label: 'p5.js', icon: 'mdi:draw' },
];

const FEATURES = [
  {
    title: 'Física personalizada',
    icon: 'mdi:atom',
    description: 'Gravedad, aceleración y rotación del pájaro calculadas en tiempo real con vectores p5.js.',
  },
  {
    title: 'Colisiones precisas',
    icon: 'mdi:vector-intersection',
    description: 'Hitboxes con Jeff Geometry (Circle + Rectangle vía CDN): colisión círculo–rectángulo, punto en AABB y tubos.',
    link: GEOMETRY_URL,
    linkLabel: 'Ver librería Jeff Geometry',
  },
  {
    title: 'Assets originales',
    icon: 'mdi:image-multiple-outline',
    description: 'Sprites, sonidos y tipografía del clásico Flappy Bird integrados con preload optimizado.',
  },
];

const QUALITY_POINTS = [
  { icon: 'mdi:folder-multiple-outline', text: 'Arquitectura modular por carpetas' },
  { icon: 'mdi:code-braces-box', text: 'Código depurado y mantenible' },
  { icon: 'mdi:check-decagram', text: 'Listo para producción en GitHub Pages' },
  { icon: 'mdi:rocket-launch-outline', text: 'Versión refactorizada del tutorial' },
];

function App() {
  const scrollToGame = () => {
    document.getElementById('play-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box className="hero-gradient" sx={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <Box className="floating-icons" aria-hidden="true">
        <Icon icon="mdi:feather" size={28} className="float-icon float-1" />
        <Icon icon="mdi:pipe" size={24} className="float-icon float-2" />
        <Icon icon="mdi:bird" size={32} className="float-icon float-3" />
        <Icon icon="mdi:star-shooting-outline" size={22} className="float-icon float-4" />
        <Icon icon="mdi:gamepad-variant" size={26} className="float-icon float-5" />
      </Box>

      <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'rgba(10, 14, 23, 0.85)', backdropFilter: 'blur(12px)' }}>
        <Toolbar>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ flexGrow: 1 }}>
            <Icon icon="mdi:bird" size={28} color="#4ade80" />
            <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 0.5 }}>
              Flappy Bird
            </Typography>
          </Stack>
          <Button
            color="inherit"
            href={TUTORIAL_SKETCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<Icon icon="mdi:open-in-new" size={18} />}
          >
            Código del video
          </Button>
          <Button
            color="inherit"
            href={GEOMETRY_URL}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<Icon icon="mdi:vector-intersection" size={18} />}
            sx={{ ml: 1 }}
          >
            Jeff Geometry
          </Button>
          <Button
            color="inherit"
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<Icon icon="mdi:github" size={18} />}
            sx={{ ml: 1 }}
          >
            GitHub
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={scrollToGame}
            startIcon={<Icon icon="mdi:play-circle" size={20} />}
            sx={{ ml: 1 }}
          >
            Jugar
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Chip
              icon={<Icon icon="mdi:school-outline" size={16} color="#4ade80" />}
              label="Proyecto educativo"
              color="success"
              size="small"
              sx={{ mb: 2 }}
            />
            <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 1 }}>
              <Icon icon="mdi:controller-classic" size={40} color="#4ade80" />
              <Typography variant="h2" component="h1" sx={{ fontWeight: 800, fontSize: { xs: '2.2rem', md: '3rem' } }}>
                Flappy Bird
              </Typography>
            </Stack>
            <Typography variant="h6" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
              Recreación del clásico arcade desarrollada con p5.js durante un tutorial práctico.
              El código del video está en el{' '}
              <Box
                component="a"
                href={TUTORIAL_SKETCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'success.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
              >
                editor p5.js
              </Box>
              ; este repositorio es la misma base, pero organizada, depurada y lista para producción.
            </Typography>
            <Alert
              icon={<Icon icon="mdi:information-outline" size={22} color="#4ade80" />}
              sx={{
                mb: 3,
                bgcolor: 'rgba(74, 222, 128, 0.08)',
                border: '1px solid rgba(74, 222, 128, 0.2)',
                color: 'text.secondary',
                alignItems: 'flex-start',
              }}
            >
              <Typography variant="body2">
                <strong>Código del tutorial:</strong>{' '}
                <Box
                  component="a"
                  href={TUTORIAL_SKETCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: 'success.main', display: 'inline-flex', alignItems: 'center', gap: 0.5 }}
                >
                  <Icon icon="mdi:open-in-new" size={14} color="#4ade80" />
                  ver sketch en p5.js Web Editor
                </Box>
                . Aquí encontrarás la versión refactorizada con arquitectura modular, assets estructurados
                y calidad de código pensada para mantener y escalar el proyecto.
              </Typography>
            </Alert>

            <Grid container spacing={1} sx={{ mb: 3 }}>
              {QUALITY_POINTS.map((point) => (
                <Grid item xs={12} sm={6} key={point.text}>
                  <Stack direction="row" alignItems="center" spacing={1} className="quality-point">
                    <Icon icon={point.icon} size={18} color="#4ade80" />
                    <Typography variant="body2" color="text.secondary">{point.text}</Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>

            <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 1, letterSpacing: 1.2 }}>
              Stack del juego · src/
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 3 }}>
              {GAME_STACK.map((tech) => (
                <Chip
                  key={tech.label}
                  icon={<Icon icon={tech.icon} size={16} />}
                  label={tech.label}
                  variant="outlined"
                  size="small"
                />
              ))}
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                variant="contained"
                color="success"
                size="large"
                onClick={scrollToGame}
                startIcon={<Icon icon="mdi:play-circle" size={22} />}
              >
                Jugar ahora
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                href="src/index.html"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<Icon icon="mdi:tab-plus" size={20} />}
              >
                Abrir en pestaña nueva
              </Button>
              <Button
                variant="outlined"
                color="success"
                size="large"
                href={DOWNLOAD_ZIP_URL}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<Icon icon="mdi:download" size={20} />}
              >
                Descargar código
              </Button>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box className="video-frame-wrapper">
              <Box className="game-frame-badge">
                <Icon icon="mdi:play-circle" size={16} color="#4ade80" />
                <span>Tutorial en video</span>
              </Box>
              <TutorialVideoPlayer />
            </Box>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1.5, textAlign: 'center' }}>
              {TUTORIAL_VIDEO_READY ? (
                <Box
                  component="a"
                  href={TUTORIAL_VIDEO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: 'success.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                >
                  Ver en YouTube
                </Box>
              ) : (
                'El tutorial editado se publicará pronto en el canal Jeff Aporta'
              )}
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ pb: 6, position: 'relative', zIndex: 1 }}>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 3 }}>
          <Icon icon="mdi:star-shooting-outline" size={28} color="#4ade80" />
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Características técnicas
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          {FEATURES.map((feature) => (
            <Grid item xs={12} md={4} key={feature.title}>
              <Card className="feature-card" sx={{ bgcolor: 'rgba(17, 24, 39, 0.8)', border: '1px solid rgba(148,163,184,0.12)' }}>
                <CardContent>
                  <Box
                    className="feature-icon-wrap"
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'rgba(74, 222, 128, 0.1)',
                      mb: 2,
                    }}
                  >
                    <Icon icon={feature.icon} size={28} color="#4ade80" />
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                  {feature.link && (
                    <Button
                      size="small"
                      href={feature.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      endIcon={<Icon icon="mdi:open-in-new" size={14} />}
                      sx={{ mt: 1.5, px: 0, textTransform: 'none' }}
                    >
                      {feature.linkLabel || 'Más info'}
                    </Button>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ bgcolor: 'rgba(0,0,0,0.2)', py: 8, position: 'relative', zIndex: 1 }}>
        <Container maxWidth="lg">
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
            <Icon icon="mdi:school-outline" size={28} color="#4ade80" />
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              Video completo (versión anterior)
            </Typography>
          </Stack>
          <Typography variant="body1" color="text.secondary" paragraph sx={{ maxWidth: 820 }}>
            También existe un segundo tutorial grabado hace 5 años: cubre el mismo proyecto de forma más extensa,
            aproximadamente <strong>3 veces más largo</strong> que el video principal. Ideal si quieres profundizar
            con más detalle paso a paso.
          </Typography>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Box className="video-frame-wrapper video-frame-wrapper--compact">
                <Box className="game-frame-badge">
                  <Icon icon="mdi:open-in-new" size={16} color="#4ade80" />
                  <span>Tutorial extendido · 2019</span>
                </Box>
                <iframe
                  title="Tutorial Flappy Bird extendido"
                  src={`${LEGACY_VIDEO_EMBED}?rel=0`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Stack spacing={2}>
                <Typography variant="body2" color="text.secondary">
                  Mismo juego, más minutos de explicación, ritmo más pausado y contexto adicional para quienes
                  prefieren un recorrido largo por el código.
                </Typography>
                <Button
                  variant="outlined"
                  color="success"
                  href={LEGACY_VIDEO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<Icon icon="mdi:play-circle" size={20} />}
                  sx={{ alignSelf: 'flex-start' }}
                >
                  Ver video completo en YouTube
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box id="play-section" sx={{ bgcolor: 'rgba(0,0,0,0.35)', py: 8, position: 'relative', zIndex: 1 }}>
        <Container maxWidth="lg">
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={1} sx={{ mb: 1 }}>
            <Icon icon="mdi:gamepad-variant" size={32} color="#4ade80" />
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Zona de juego
            </Typography>
          </Stack>
          <Typography variant="body1" align="center" color="text.secondary" paragraph>
            <Icon icon="mdi:web" size={18} color="#94a3b8" /> El juego corre en un iframe aislado. Haz clic dentro del canvas para interactuar.
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            flexWrap="wrap"
            useFlexGap
            sx={{ mb: 2 }}
          >
            <Typography variant="caption" color="text.secondary" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}>
              <Icon icon="mdi:gesture-tap" size={14} color="#94a3b8" />
              Clic para volar
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}>
              <Icon icon="mdi:keyboard-space" size={14} color="#94a3b8" />
              Barra espaciadora
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}>
              <Icon icon="mdi:restore" size={14} color="#94a3b8" />
              Reiniciar tras perder
            </Typography>
          </Stack>
          <Box className="game-frame-wrapper" sx={{ maxWidth: 1280, mx: 'auto' }}>
            <Box className="game-frame-badge">
              <Icon icon="mdi:gamepad-variant" size={16} color="#4ade80" />
              <span>Juego en vivo</span>
            </Box>
            <iframe
              title="Flappy Bird"
              src="src/index.html"
              allow="autoplay"
            />
          </Box>
        </Container>
      </Box>

      <Divider sx={{ borderColor: 'rgba(148,163,184,0.12)' }} />

      <Container maxWidth="lg" sx={{ py: 4, position: 'relative', zIndex: 1 }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" spacing={2}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Icon icon="mdi:source-branch" size={18} color="#4ade80" />
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} Jeff-Aporta · Proyecto de aprendizaje con p5.js
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            <Typography variant="body2" color="text.secondary">
              <a className="footer-link" href={TUTORIAL_SKETCH_URL} target="_blank" rel="noopener noreferrer">
                <IconLabel icon="mdi:open-in-new" label="Sketch del tutorial" size={14} color="#4ade80" />
              </a>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <a className="footer-link" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <IconLabel icon="mdi:github" label="Repositorio en GitHub" size={14} color="#4ade80" />
              </a>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <a className="footer-link" href={DOWNLOAD_ZIP_URL} target="_blank" rel="noopener noreferrer">
                <IconLabel icon="mdi:download" label="Descargar ZIP" size={14} color="#4ade80" />
              </a>
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MaterialUI.ThemeProvider theme={MaterialUI.createTheme({
    palette: {
      mode: 'dark',
      primary: { main: '#4ade80' },
      success: { main: '#22c55e' },
      background: { default: '#0a0e17', paper: '#111827' },
    },
    typography: { fontFamily: '"Roboto", "Segoe UI", system-ui, sans-serif' },
  })}>
    <App />
  </MaterialUI.ThemeProvider>
);
