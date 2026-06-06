"""
Paso 2 del tutorial: flujo OAuth 2.0 para YouTube Data API v3.

La primera ejecución abre el navegador. Las siguientes reutilizan token.json.
"""

from __future__ import annotations

import sys

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build

from config import CLIENT_SECRET_FILE, SCOPES, TOKEN_FILE


def get_credentials() -> Credentials:
    if not CLIENT_SECRET_FILE.exists():
        raise FileNotFoundError(
            f"No se encontró {CLIENT_SECRET_FILE}.\n"
            "Descarga el JSON OAuth desde Google Cloud Console y guárdalo como "
            "scripts/youtube/credentials/client_secret.json"
        )

    creds = None
    if TOKEN_FILE.exists():
        creds = Credentials.from_authorized_user_file(str(TOKEN_FILE), SCOPES)

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                str(CLIENT_SECRET_FILE),
                SCOPES,
            )
            creds = flow.run_local_server(port=0)

        TOKEN_FILE.parent.mkdir(parents=True, exist_ok=True)
        TOKEN_FILE.write_text(creds.to_json(), encoding="utf-8")
        print(f"Token guardado en {TOKEN_FILE}")

    return creds


def get_youtube_service():
    return build("youtube", "v3", credentials=get_credentials())


def main() -> int:
    try:
        service = get_youtube_service()
        response = service.channels().list(part="snippet", mine=True).execute()
        items = response.get("items", [])
        if not items:
            print("Autenticación OK, pero no se encontró ningún canal.")
            return 1
        channel = items[0]["snippet"]["title"]
        print(f"Autenticación exitosa. Canal: {channel}")
        return 0
    except Exception as error:
        print(f"Error de autenticación: {error}")
        return 1


if __name__ == "__main__":
    sys.exit(main())
