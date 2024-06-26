import { Localization } from '@/lib/types';

type ResponseMessage = {
  localization: Omit<Localization, 'lat' | 'lng' | 'displayName'> | Localization;
  message: string;
  status: number;
  isOk: boolean;
};

export const getCoordsFromManual = async (
  localization: Omit<Localization, 'lat' | 'lng' | 'displayName'>,
): Promise<ResponseMessage> => {
  const queryUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${localization.specificPlace},${localization.city},${localization.region},${localization.country}&limit=1`;

  // query and define lat and lng
  const res = await fetch(queryUrl);
  if (!res.ok) return { localization, message: res.statusText, status: res.status, isOk: false };

  const data = await res.json();

  const newLocalization: Localization = {
    lat: Number(data[0].lat),
    lng: Number(data[0].lon),
    city: localization.city,
    country: localization.country,
    region: localization.region,
    specificPlace: localization.specificPlace,
    version: localization.version,
    imageUrl: localization.imageUrl,
    displayName: data[0].name,
  };

  // only one query per second!!
  await delay(1000);

  return { localization: newLocalization, message: 'success', status: 200, isOk: true };
};

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
