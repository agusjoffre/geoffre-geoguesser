import { ImageObject, Localization } from '@/lib/types';

export const createLocalizationFromManual = (imageObject: ImageObject): Omit<Localization, 'lat' | 'lng' | 'displayName'> => {
  // imageObject.name is like country_region_city_specificplace_version.jpg/png
  // divide the string into parts, eliminate .jpg.
  // create an object with country, region, city, specificPlace, version

  const parts = imageObject.name.split('_');
  const country = parts[0];
  const region = parts[1];
  const city = parts[2];
  const specificPlace = parts[3];
  const version = parts[4].split('.')[0];

  const localization: Omit<Localization, 'lat' | 'lng' | 'displayName'> = {
    country,
    region,
    city,
    specificPlace,
    version,
    imageUrl: imageObject.url,
  };

  return localization;
};
