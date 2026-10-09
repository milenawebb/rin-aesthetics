import nordlysDevice from "@/assets/nordlys-device.png.asset.json";
import nordlysFull from "@/assets/nordlys-full.jpg.asset.json";
import swtPhotoWebp from "@/assets/swt-photofacial.webp.asset.json";
import swtPhotoJpg from "@/assets/swt-photofacial.jpg.asset.json";
import swtAcneWebp from "@/assets/swt-acne.webp.asset.json";
import swtAcneJpg from "@/assets/swt-acne.jpg.asset.json";
import frac1940Webp from "@/assets/fractional-1940.webp.asset.json";
import frac1940Jpg from "@/assets/fractional-1940.jpg.asset.json";
import frac1550Webp from "@/assets/fractional-1550.webp.asset.json";
import frac1550Jpg from "@/assets/fractional-1550.jpg.asset.json";

/** Photography only, keyed by service id. No treatment copy lives here. */
export const serviceMedia: Record<string, { src: string; alt: string; width: number; height: number }> = {
  "DEV-03": {
    src: nordlysDevice.url,
    width: 894,
    height: 1200,
    alt: "The Candela Nordlys platform used for The Skin Refinery at RIN Aesthetic Practice",
  },
};

/** Placeholder images for each technology column, in the same order as Service.technologies. */
export const technologyMedia: Record<string, { webp: string; jpg: string }[]> = {
  "DEV-03": [
    { webp: swtPhotoWebp.url, jpg: swtPhotoJpg.url },
    { webp: swtAcneWebp.url, jpg: swtAcneJpg.url },
    { webp: frac1940Webp.url, jpg: frac1940Jpg.url },
    { webp: frac1550Webp.url, jpg: frac1550Jpg.url },
  ],
};

/** Lead image for a technologies section: the platform shared by every column. */
export const technologyLead: Record<string, { src: string; alt: string; caption: string }> = {
  "DEV-03": {
    src: nordlysFull.url,
    alt: "The Candela Nordlys treatment platform with its SWT, 1940 and 1550 handpieces.",
    caption: "Candela Nordlys, the platform behind each of these treatments.",
  },
};

import laserJawlineJpg from "@/assets/laser-jawline-1080.jpg.asset.json";
import laserJawlineWebp from "@/assets/laser-jawline-1080.webp.asset.json";
import laserPerioralJpg from "@/assets/laser-perioral-1080.jpg.asset.json";
import laserPerioralWebp from "@/assets/laser-perioral-1080.webp.asset.json";
import hydrafacialJpg from "@/assets/hydrafacial-1080.jpg.asset.json";
import hydrafacialWebp from "@/assets/hydrafacial-1080.webp.asset.json";
import jylLaserJpg from "@/assets/jyl-laser-1215.jpg.asset.json";
import jylLaserWebp from "@/assets/jyl-laser-1215.webp.asset.json";

export interface Photo { jpg: string; webp: string; alt: string; width: number; height: number }

/** Treatment photograph under the heading, cropped centered to the 16:9 frame. Keyed by service id. */
export const serviceHeroPhoto: Record<string, Photo> = {
  "DEV-05": { jpg: laserJawlineJpg.url, webp: laserJawlineWebp.url, width: 1080, height: 1440, alt: "A fractional laser handpiece being guided along a man's cheek, with the red aiming beam visible." },
  "DEV-01": { jpg: laserPerioralJpg.url, webp: laserPerioralWebp.url, width: 1080, height: 1440, alt: "A fractional laser handpiece held at a man's upper lip, with an eye shield in place." },
  "HYD-01": { jpg: hydrafacialJpg.url, webp: hydrafacialWebp.url, width: 1080, height: 1440, alt: "A Hydrafacial tip being drawn across a woman's forehead, lit blue." },
};

const jylLaser: Photo = { jpg: jylLaserJpg.url, webp: jylLaserWebp.url, width: 1215, height: 1620, alt: "Jyl Carter, in laser safety glasses, holding a Candela 1550 handpiece to a patient's face. The patient is wearing eye shields." };

/** Replaces the portrait in "How Jyl approaches this" on these services only. */
export const jylAtWorkPhoto: Record<string, Photo> = { "DEV-05": jylLaser, "DEV-01": jylLaser };
