import nordlysDevice from "@/assets/nordlys-device.png";
import nordlysFull from "@/assets/nordlys-full.jpg";
import swtPhotoWebp from "@/assets/swt-photofacial.webp";
import swtPhotoJpg from "@/assets/swt-photofacial.jpg";
import swtAcneWebp from "@/assets/swt-acne.webp";
import swtAcneJpg from "@/assets/swt-acne.jpg";
import frac1940Webp from "@/assets/fractional-1940.webp";
import frac1940Jpg from "@/assets/fractional-1940.jpg";
import frac1550Webp from "@/assets/fractional-1550.webp";
import frac1550Jpg from "@/assets/fractional-1550.jpg";

/** Photography only, keyed by service id. No treatment copy lives here. */
export const serviceMedia: Record<string, { src: string; alt: string; width: number; height: number }> = {
  "DEV-03": {
    src: nordlysDevice,
    width: 894,
    height: 1200,
    alt: "The Candela Nordlys platform used for The Skin Refinery at RIN Aesthetic Practice",
  },
};

/** Placeholder images for each technology column, in the same order as Service.technologies. */
export const technologyMedia: Record<string, { webp: string; jpg: string }[]> = {
  "DEV-03": [
    { webp: swtPhotoWebp, jpg: swtPhotoJpg },
    { webp: swtAcneWebp, jpg: swtAcneJpg },
    { webp: frac1940Webp, jpg: frac1940Jpg },
    { webp: frac1550Webp, jpg: frac1550Jpg },
  ],
};

/** Lead image for a technologies section: the platform shared by every column. */
export const technologyLead: Record<string, { src: string; alt: string; caption: string }> = {
  "DEV-03": {
    src: nordlysFull,
    alt: "The Candela Nordlys treatment platform with its SWT, 1940 and 1550 handpieces.",
    caption: "Candela Nordlys, the platform behind each of these treatments.",
  },
};

import jylLaserJpg from "@/assets/jyl-laser-1215.jpg";
import jylLaserWebp from "@/assets/jyl-laser-1215.webp";
import hydrafacialJpg from "@/assets/hydrafacial-1080.jpg";
import hydrafacialWebp from "@/assets/hydrafacial-1080.webp";
import laserPerioralJpg from "@/assets/laser-perioral-1080.jpg";
import laserPerioralWebp from "@/assets/laser-perioral-1080.webp";

export interface Photo { jpg: string; webp: string; alt: string; width: number; height: number }

const jylLaser: Photo = { jpg: jylLaserJpg, webp: jylLaserWebp, width: 1215, height: 1620, alt: "Jyl Carter, in laser safety glasses, holding a Candela 1550 handpiece to a patient's face. The patient is wearing eye shields." };
const hydrafacial: Photo = { jpg: hydrafacialJpg, webp: hydrafacialWebp, width: 1080, height: 1440, alt: "A Hydrafacial handpiece with a blue-lit tip being passed across a patient's forehead." };
const laserPerioral: Photo = { jpg: laserPerioralJpg, webp: laserPerioralWebp, width: 1080, height: 1440, alt: "A laser handpiece treating the skin above a patient's upper lip. The patient is wearing eye shields." };

/** Replaces the portrait in "How Jyl approaches this" on these services only, one photo per service id. */
export const jylAtWorkPhoto: Record<string, Photo> = { "DEV-05": jylLaser, "DEV-01": laserPerioral, "HYD-01": hydrafacial };
