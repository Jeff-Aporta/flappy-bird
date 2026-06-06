"""
Paso 3C: eliminar un video de YouTube (DELETE).
"""

from __future__ import annotations

import argparse
import sys

from auth import get_youtube_service


def delete_video(video_id: str) -> None:
    youtube = get_youtube_service()
    youtube.videos().delete(id=video_id).execute()


def main() -> int:
    parser = argparse.ArgumentParser(description="Eliminar un video de YouTube")
    parser.add_argument("video_id", help="ID del video a eliminar")
    parser.add_argument("--yes", action="store_true", help="Confirmar eliminación sin preguntar")
    args = parser.parse_args()

    if not args.yes:
        confirm = input(f"¿Eliminar el video {args.video_id}? (escribe SI): ")
        if confirm.strip().upper() != "SI":
            print("Cancelado.")
            return 0

    try:
        delete_video(args.video_id)
        print(f"Video {args.video_id} eliminado correctamente (HTTP 204).")
        return 0
    except Exception as error:
        print(f"Error al eliminar video: {error}")
        return 1


if __name__ == "__main__":
    sys.exit(main())
