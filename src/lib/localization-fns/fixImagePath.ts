import { Localization } from "../types";

export const fixImagePath = (imageName: string): Omit<Localization, "lat" | "lng"> => {
// imageName is like country_region_city_specificplace_version.jpg/png
// divide the string into parts, eliminate .jpg.
// create an object with country, region, city, specificPlace, version

    const parts = imageName.split("_");
    const country = parts[0];
    const region = parts[1];
    const city = parts[2];
    const specificPlace = parts[3];
    const version = parts[4].split(".")[0];

    const localization = {
        country,
        region,
        city,
        specificPlace,
        version
    }

    return localization

}