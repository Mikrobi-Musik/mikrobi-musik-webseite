import QRCode from "qrcode";
import * as opentype from "opentype.js";

export interface LaserSvgOptions {
  songUrl: string;
  title: string;
  recipient: string;
}

let cachedFont: opentype.Font | null = null;

async function loadLaserFont(): Promise<opentype.Font> {
  if (cachedFont) return cachedFont;
  const response = await fetch("/fonts/arial.ttf");
  if (!response.ok) {
    throw new Error("Schriftdatei /fonts/arial.ttf konnte nicht geladen werden.");
  }
  const buffer = await response.arrayBuffer();
  cachedFont = opentype.parse(buffer);
  return cachedFont;
}

function buildCenteredTextPath(
  font: opentype.Font,
  text: string,
  centerX: number,
  baselineY: number,
  fontSizeMm: number,
  maxWidthMm: number
): string {
  let effectiveSize = fontSizeMm;
  let width = font.getAdvanceWidth(text, effectiveSize);

  // Falls ein Songtitel sehr lang ist, Schriftgröße automatisch proportional verkleinern
  if (width > maxWidthMm && width > 0) {
    effectiveSize = effectiveSize * (maxWidthMm / width);
    width = font.getAdvanceWidth(text, effectiveSize);
  }

  const startX = centerX - width / 2;
  const path = font.getPath(text, startX, baselineY, effectiveSize);
  return path.toSVG(3);
}

export async function generateCoasterSvg(options: LaserSvgOptions): Promise<string> {
  const { songUrl, title, recipient } = options;
  const font = await loadLaserFont();

  // QR-Code-Matrix erzeugen (Error Correction M = robust auf strukturiertem Schiefer)
  const qr = QRCode.create(songUrl, { errorCorrectionLevel: "M" });
  const moduleCount = qr.modules.size;
  const modules = qr.modules.data;

  // Maße in Millimetern (100 x 100 mm Schieferuntersetzer)
  const coasterSizeMm = 100;
  const qrSizeMm = 54;
  const qrX = (coasterSizeMm - qrSizeMm) / 2; // 23 mm
  const qrY = 12; // 12 mm Abstand von oben
  const cellSize = qrSizeMm / moduleCount;

  // Alle dunklen QR-Module als einzelne Vektor-Rechtecke aufbauen
  const rects: string[] = [];
  for (let row = 0; row < moduleCount; row++) {
    for (let col = 0; col < moduleCount; col++) {
      if (modules[row * moduleCount + col]) {
        const x = (qrX + col * cellSize).toFixed(3);
        const y = (qrY + row * cellSize).toFixed(3);
        const size = (cellSize + 0.02).toFixed(3);
        rects.push(`<rect x="${x}" y="${y}" width="${size}" height="${size}" />`);
      }
    }
  }

  // Texte in echte, geschlossene Vektorpfade umwandeln (mit automatischer Breitenanpassung bis 86 mm)
  const titlePath = buildCenteredTextPath(font, title.trim(), 50, 74.5, 4.8, 86);
  const recipientPath = buildCenteredTextPath(font, `Für ${recipient.trim()}`, 50, 81.2, 3.8, 86);
  const brandPath = buildCenteredTextPath(font, "mikrobi-musik.de", 50, 92.5, 2.7, 80);

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="100mm" height="100mm" viewBox="0 0 100 100">
  <!-- Hilfsrahmen 100x100 mm (in LightBurn auf Tool-Layer T1 legen, nicht gravieren) -->
  <g id="rahmen-hilfslinie">
    <rect x="0.25" y="0.25" width="99.5" height="99.5" rx="4" ry="4" fill="none" stroke="#0000ff" stroke-width="0.2" />
  </g>

  <!-- Gravur-Ebene (in LightBurn als Fill / Füllung gravieren) -->
  <g id="gravur-inhalt" fill="#000000" stroke="none">
    <!-- QR-Code -->
    <g id="qr-code">
      ${rects.join("\n      ")}
    </g>

    <!-- Songtitel als Vektorpfad -->
    <g id="text-titel">
      ${titlePath}
    </g>

    <!-- Empfänger als Vektorpfad -->
    <g id="text-empfaenger">
      ${recipientPath}
    </g>

    <!-- Branding unten als Vektorpfad -->
    <g id="text-branding">
      ${brandPath}
    </g>
  </g>
</svg>`;
}