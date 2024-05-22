import { getManualImages } from '@/lib/imgs-fns/get-images-from-firestore';
import { createLocalizationFromManual } from '@/lib/localization-fns/create-localization-from-manual';
import { getCoordsFromManual } from '@/lib/localization-fns/get-coords-from-manual';

const Home = async () => {
  const manualImagesWithUrl = await getManualImages();
  const imageWithNameObjectArray = manualImagesWithUrl.map((image) => createLocalizationFromManual(image));
  const localization = await getCoordsFromManual(imageWithNameObjectArray[0]);
  console.log(localization);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">Home</h1>
    </main>
  );
};

export default Home;
