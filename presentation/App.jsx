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
const GITHUB_URL = 'https://github.com/Dev-InSoft-web/flappy-bird';

const TECH_STACK = [
  { label: 'p5.js', icon: 'mdi:draw' },
  { label: 'JavaScript', icon: 'mdi:language-javascript' },
  { label: 'React 18', icon: 'logos:react' },
  { label: 'Material UI', icon: 'mdi:palette-outline' },
  { label: 'HTML5 Canvas', icon: 'logos:html-5' },
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
    description: 'Sistema de detección círculo-rectángulo con geometría custom para tubos y suelo.',
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
                <Box component="span" sx={{ color: 'success.main' }}> v2</Box>
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

            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 3 }}>
              {TECH_STACK.map((tech) => (
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
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box className="game-frame-wrapper">
              <Box className="game-frame-badge">
                <Icon icon="mdi:gamepad-variant" size={16} color="#4ade80" />
                <span>Live preview</span>
              </Box>
              <iframe
                title="Flappy Bird Game"
                src="src/index.html"
                allow="autoplay"
                loading="lazy"
              />
            </Box>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              flexWrap="wrap"
              useFlexGap
              sx={{ mt: 1.5 }}
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
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

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
          <Box className="game-frame-wrapper" sx={{ maxWidth: 1280, mx: 'auto' }}>
            <iframe
              title="Flappy Bird Full Game"
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
              © {new Date().getFullYear()} Dev-InSoft-web · Proyecto de aprendizaje con p5.js
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
                <IconLabel icon="mdi:github" label="Código refactorizado en GitHub" size={14} color="#4ade80" />
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
