import { previewAlt, previewSize, renderPreviewJpeg } from "@/lib/og-card";

export const size = previewSize;
export const contentType = "image/jpeg";
export const alt = previewAlt;

export default function Image() {
  return renderPreviewJpeg();
}
