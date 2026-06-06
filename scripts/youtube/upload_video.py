"""
Paso 3A: subir un video nuevo a YouTube (resumable upload).
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

from googleapiclient.http import MediaFileUpload

from auth import get_youtube_service


def upload_video(
    file_path: Path,
    title: str,
    description: str,
    tags: list[str] | None = None,
    category_id: str = "22",
    privacy_status: str = "private",
) -> dict:
    if not file_path.exists():
        raise FileNotFoundError(f"No existe el archivo: {file_path}")

    youtube = get_youtube_service()
    body = {
        "snippet": {
            "title": title,
            "description": description,
            "tags": tags or [],
            "categoryId": category_id,
        },
        "status": {
            "privacyStatus": privacy_status,
        },
    }

    media = MediaFileUpload(str(file_path), chunksize=-1, resumable=True)
    request = youtube.videos().insert(part="snippet,status", body=body, media_body=media)

    response = None
    while response is None:
        status, response = request.next_chunk()
        if status:
            print(f"Progreso: {int(status.progress() * 100)}%")

    return response


def main() -> int:
    parser = argparse.ArgumentParser(description="Subir un video a YouTube")
    parser.add_argument("file", type=Path, help="Ruta al archivo .mp4 o .mkv")
    parser.add_argument("--title", required=True, help="Título del video")
    parser.add_argument("--description", default="", help="Descripción del video")
    parser.add_argument("--tags", help="Tags separados por coma")
    parser.add_argument("--privacy", default="private", choices=["public", "private", "unlisted"])
    args = parser.parse_args()

    tags = [tag.strip() for tag in args.tags.split(",")] if args.tags else None

    try:
        result = upload_video(
            file_path=args.file,
            title=args.title,
            description=args.description,
            tags=tags,
            privacy_status=args.privacy,
        )
        print("Video subido correctamente:")
        print(f"  ID: {result['id']}")
        print(f"  Título: {result['snippet']['title']}")
        return 0
    except Exception as error:
        print(f"Error al subir video: {error}")
        return 1


if __name__ == "__main__":
    sys.exit(main())
