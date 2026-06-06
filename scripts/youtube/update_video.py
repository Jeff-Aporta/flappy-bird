"""
Paso 3B: actualizar metadatos de un video existente (PUT lógico vía SDK).

Siempre hace GET primero para no perder tags ni campos del snippet original.
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

from auth import get_youtube_service
from config import DEFAULT_VIDEO_ID, DESCRIPTIONS_DIR


def load_text(path: Path) -> str:
    return path.read_text(encoding="utf-8").strip()


def update_video(
    video_id: str,
    title: str | None = None,
    description: str | None = None,
    tags: list[str] | None = None,
    privacy_status: str | None = None,
    category_id: str | None = None,
) -> dict:
    youtube = get_youtube_service()

    current = (
        youtube.videos()
        .list(part="snippet,status", id=video_id)
        .execute()
    )
    items = current.get("items", [])
    if not items:
        raise ValueError(f"No se encontró el video con id={video_id}")

    video = items[0]
    snippet = video["snippet"]
    status = video["status"]

    if title is not None:
        snippet["title"] = title
    if description is not None:
        snippet["description"] = description
    if tags is not None:
        snippet["tags"] = tags
    if category_id is not None:
        snippet["categoryId"] = category_id
    if privacy_status is not None:
        status["privacyStatus"] = privacy_status

    body = {
        "id": video_id,
        "snippet": {
            "title": snippet["title"],
            "description": snippet["description"],
            "categoryId": snippet.get("categoryId", "22"),
            "tags": snippet.get("tags", []),
        },
        "status": {
            "privacyStatus": status.get("privacyStatus", "private"),
        },
    }

    updated = (
        youtube.videos()
        .update(part="snippet,status", body=body)
        .execute()
    )
    return updated


def main() -> int:
    parser = argparse.ArgumentParser(description="Actualizar metadatos de un video de YouTube")
    parser.add_argument("--video-id", default=DEFAULT_VIDEO_ID, help="ID del video en YouTube")
    parser.add_argument("--title", help="Nuevo título")
    parser.add_argument("--description", help="Nueva descripción en texto")
    parser.add_argument(
        "--description-file",
        type=Path,
        help="Ruta a archivo .txt con la descripción",
    )
    parser.add_argument("--privacy", choices=["public", "private", "unlisted"], help="Visibilidad")
    parser.add_argument("--tags", help="Tags separados por coma")
    args = parser.parse_args()

    description = args.description
    if args.description_file:
        description = load_text(args.description_file)
    elif not description:
        default_file = DESCRIPTIONS_DIR / "flappy-bird.txt"
        if default_file.exists():
            description = load_text(default_file)

    tags = [tag.strip() for tag in args.tags.split(",")] if args.tags else None

    try:
        result = update_video(
            video_id=args.video_id,
            title=args.title,
            description=description,
            tags=tags,
            privacy_status=args.privacy,
        )
        print("Video actualizado correctamente:")
        print(f"  ID: {result['id']}")
        print(f"  Título: {result['snippet']['title']}")
        print(f"  Privacidad: {result['status']['privacyStatus']}")
        return 0
    except Exception as error:
        print(f"Error al actualizar video: {error}")
        return 1


if __name__ == "__main__":
    sys.exit(main())
