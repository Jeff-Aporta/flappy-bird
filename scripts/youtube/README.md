# YouTube Data API v3 — Flappy Bird

Scripts para autenticar y administrar videos del canal con la **YouTube Data API v3**.

> **Importante:** Para subir, editar o eliminar videos necesitas **OAuth 2.0**, no solo una API key.
> La API key sirve para lecturas públicas; las operaciones de escritura requieren consentimiento de tu cuenta.

## Paso 1 — Google Cloud Console

1. Abre [Google Cloud Console](https://console.cloud.google.com/).
2. Crea o selecciona un proyecto.
3. Habilita **YouTube Data API v3**.
4. Configura **OAuth consent screen** (tipo External):
   - Nombre de la app, correo de soporte.
   - Scope: `https://www.googleapis.com/auth/youtube`
   - En **Test users**, añade tu correo de YouTube.
5. En **Credentials** → **Create credentials** → **OAuth client ID**:
   - Tipo: **Desktop app**
   - Descarga el JSON y guárdalo como:

```
scripts/youtube/credentials/client_secret.json
```

Nunca subas ese archivo a GitHub.

## Paso 2 — Instalar dependencias

```bash
cd scripts/youtube
pip install -r requirements.txt
```

## Paso 3 — Autenticación (primera vez)

```bash
python auth.py
```

Se abrirá el navegador. Inicia sesión con la cuenta del canal y acepta permisos.
Se generará `credentials/token.json` para futuras ejecuciones.

## Paso 4 — Operaciones

### Actualizar descripción del tutorial

```bash
python update_video.py --video-id MRk55wiOAMQ
```

Usa por defecto `descriptions/flappy-bird.txt`.

### Subir video

```bash
python upload_video.py ruta/al/video.mp4 --title "Mi video" --privacy private
```

### Eliminar video

```bash
python delete_video.py VIDEO_ID --yes
```

## Cuotas

Revisa la pestaña **Quotas** en Google Cloud. Cada subida consume ~1600 puntos de la cuota diaria gratuita (10 000).
