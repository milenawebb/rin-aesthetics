import nordlysDevice from "@/assets/nordlys-device.png.asset.json";
import nordlysFull from "@/assets/nordlys-full.jpg.asset.json";
import srTech1 from "@/assets/sr-tech-1.png.asset.json";
import srTech2 from "@/assets/sr-tech-2.png.asset.json";
import srTech3 from "@/assets/sr-tech-3.png.asset.json";
import srTech4 from "@/assets/sr-tech-4.png.asset.json";

/** Photography only, keyed by service id. No treatment copy lives here. */
export const serviceMedia: Record<string, { src: string; alt: string }> = {
  "DEV-03": {
    src: nordlysDevice.url,
    alt: "The Candela Nordlys platform used for The Skin Refinery by RIN at RIN Aesthetic Practice",
  },
};

/** Placeholder images for each technology column, in the same order as Service.technologies. */
export const technologyMedia: Record<string, string[]> = {
  "DEV-03": [srTech1.url, srTech2.url, srTech3.url, srTech4.url],
};

/** Lead image for a technologies section: the platform shared by every column. */
export const technologyLead: Record<string, { src: string; alt: string; caption: string }> = {
  "DEV-03": {
    src: nordlysFull.url,
    alt: "The Candela Nordlys treatment platform with its SWT, 1940 and 1550 handpieces.",
    caption: "Candela Nordlys, the platform behind each of these treatments.",
  },
};
