from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
CREDENTIALS_DIR = BASE_DIR / "credentials"
DESCRIPTIONS_DIR = BASE_DIR / "descriptions"

# Coloca aquí el JSON descargado de Google Cloud (OAuth Desktop app).
CLIENT_SECRET_FILE = CREDENTIALS_DIR / "client_secret.json"
TOKEN_FILE = CREDENTIALS_DIR / "token.json"

# Permisos para subir, editar y eliminar videos en tu canal.
SCOPES = ["https://www.googleapis.com/auth/youtube"]

# ID del video principal del tutorial Flappy Bird.
DEFAULT_VIDEO_ID = "MRk55wiOAMQ"
