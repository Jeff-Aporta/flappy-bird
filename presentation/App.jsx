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
  IconButton,
  Divider,
  Grid,
} = MaterialUI;

const TUTORIAL_SKETCH_URL = 'https://editor.p5js.org/Jeff-Aporta/sketches/1MwUdFHrx';
const TECH_STACK = ['p5.js', 'JavaScript', 'React 18', 'Material UI', 'HTML5 Canvas'];
const FEATURES = [
  {
    title: 'Física personalizada',
    description: 'Gravedad, aceleración y rotación del pájaro calculadas en tiempo real con vectores p5.js.',
  },
  {
    title: 'Colisiones precisas',
    description: 'Sistema de detección círculo-rectángulo con geometría custom para tubos y suelo.',
  },
  {
    title: 'Assets originales',
    description: 'Sprites, sonidos y tipografía del clásico Flappy Bird integrados con preload optimizado.',
  },
];

function App() {
  const scrollToGame = () => {
    document.getElementById('play-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box className="hero-gradient" sx={{ minHeight: '100vh' }}>
      <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'rgba(10, 14, 23, 0.85)', backdropFilter: 'blur(12px)' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: 0.5 }}>
            Flappy Bird
          </Typography>
          <Button color="inherit" href={TUTORIAL_SKETCH_URL} target="_blank" rel="noopener noreferrer">
            Código del video
          </Button>
          <Button color="inherit" href="https://github.com/Dev-InSoft-web/flappy-bird" target="_blank" rel="noopener noreferrer">
            GitHub
          </Button>
          <Button variant="contained" color="success" onClick={scrollToGame} sx={{ ml: 1 }}>
            Jugar
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Chip label="Proyecto educativo" color="success" size="small" sx={{ mb: 2 }} />
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 800, fontSize: { xs: '2.2rem', md: '3rem' } }}>
              Flappy Bird
              <Box component="span" sx={{ color: 'success.main' }}> v2</Box>
            </Typography>
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
              severity="info"
              sx={{
                mb: 3,
                bgcolor: 'rgba(74, 222, 128, 0.08)',
                border: '1px solid rgba(74, 222, 128, 0.2)',
                color: 'text.secondary',
                '& .MuiAlert-icon': { color: 'success.main' },
              }}
            >
              <Typography variant="body2">
                <strong>Código del tutorial:</strong>{' '}
                <Box
                  component="a"
                  href={TUTORIAL_SKETCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: 'success.main' }}
                >
                  ver sketch en p5.js Web Editor
                </Box>
                . Aquí encontrarás la versión refactorizada con arquitectura modular, assets estructurados
                y calidad de código pensada para mantener y escalar el proyecto.
              </Typography>
            </Alert>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 3 }}>
              {TECH_STACK.map((tech) => (
                <Chip key={tech} label={tech} variant="outlined" size="small" />
              ))}
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button variant="contained" color="success" size="large" onClick={scrollToGame}>
                Jugar ahora
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                href="src/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir en pestaña nueva
              </Button>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box className="game-frame-wrapper">
              <iframe
                title="Flappy Bird Game"
                src="src/index.html"
                allow="autoplay"
                loading="lazy"
              />
            </Box>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1.5, textAlign: 'center' }}>
              Clic o barra espaciadora para volar · Toca para reiniciar tras perder
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ pb: 6 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
          Características técnicas
        </Typography>
        <Grid container spacing={3}>
          {FEATURES.map((feature) => (
            <Grid item xs={12} md={4} key={feature.title}>
              <Card className="feature-card" sx={{ bgcolor: 'rgba(17, 24, 39, 0.8)', border: '1px solid rgba(148,163,184,0.12)' }}>
                <CardContent>
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

      <Box id="play-section" sx={{ bgcolor: 'rgba(0,0,0,0.35)', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 700 }}>
            Zona de juego
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" paragraph>
            El juego corre en un iframe aislado. Haz clic dentro del canvas para interactuar.
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

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" spacing={2}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Dev-InSoft-web · Proyecto de aprendizaje con p5.js
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            <Typography variant="body2" color="text.secondary">
              <a className="footer-link" href={TUTORIAL_SKETCH_URL} target="_blank" rel="noopener noreferrer">
                Sketch del tutorial
              </a>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <a className="footer-link" href="https://github.com/Dev-InSoft-web/flappy-bird" target="_blank" rel="noopener noreferrer">
                Código refactorizado en GitHub
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
