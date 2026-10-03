import nordlysDevice from "@/assets/nordlys-device.png.asset.json";

/** Photography only, keyed by service id. No treatment copy lives here. */
export const serviceMedia: Record<string, { src: string; alt: string }> = {
  "DEV-03": {
    src: nordlysDevice.url,
    alt: "The Candela Nordlys platform used for The Skin Refinery at RIN Aesthetic Practice",
  },
};
