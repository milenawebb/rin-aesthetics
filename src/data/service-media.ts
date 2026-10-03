import nordlysDevice from "@/assets/nordlys-device.png.asset.json";
import srTech1 from "@/assets/sr-tech-1.png.asset.json";
import srTech2 from "@/assets/sr-tech-2.png.asset.json";
import srTech3 from "@/assets/sr-tech-3.png.asset.json";
import srTech4 from "@/assets/sr-tech-4.png.asset.json";

/** Photography only, keyed by service id. No treatment copy lives here. */
export const serviceMedia: Record<string, { src: string; alt: string }> = {
  "DEV-03": {
    src: nordlysDevice.url,
    alt: "The Candela Nordlys platform used for The Skin Refinery at RIN Aesthetic Practice",
  },
};

/** Placeholder images for each technology column, in the same order as Service.technologies. */
export const technologyMedia: Record<string, string[]> = {
  "DEV-03": [srTech1.url, srTech2.url, srTech3.url, srTech4.url],
};
