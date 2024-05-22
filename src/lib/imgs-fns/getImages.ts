import { storage } from "@/lib/firebase/firebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";

type ImageObject = {
    name: string;
    url: string;
}


export const getManualImages = async (): Promise<ImageObject[]> => {
  const manualImagesRef = ref(storage, 'Manual');

  const imagesWithName: ImageObject[] = [];
  // list all images. for each image get url & its name, create an object with name and url.
  // push to imagesWithName

  try {
    const res = await listAll(manualImagesRef);
    const urlPromises = res.items.map(async (itemRef) => {
      const url = await getDownloadURL(itemRef);
      imagesWithName.push({ name: itemRef.name, url: url });
    });

    await Promise.all(urlPromises); // Ensure all URLs are fetched
  } catch (err) {
    console.error(err);
  }

  return imagesWithName

}