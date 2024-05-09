import ImageGallery from "./components/ImageGallery";
import Footer from "./components/Footer";
import Header from "./components/Header";

export async function fetcher(url) {
  try {
      const res = await fetch(url, {
          headers: {
              'Authorization': process.env.PEXELS_API_KEY,
          }
      });
      return await res.json();
  } catch (err) {
      console.error(err);
  }
}

export async function fetchCuratedPhotos(page, perPage) {
  const queryParams = `page=${page || 1}&per_page=${perPage || 10}`
  return await fetcher(`${process.env.PEXELS_API_URL}/curated?${queryParams}`);
}

export async function fetchPhoto(id) {
  return await fetcher(`${process.env.PEXELS_API_URL}/photos/${id}`);
}

export default async function Page() {
  const photoIds = [1820770, 19961796, 2376799, 19887907, 2901581];
  const photos = [];

  for (const photoId of photoIds) {
    photos.push(await fetchPhoto(photoId));
  }

  return (
    <>
      <Header />
      <main className="flex p-4">
        <ImageGallery data={photos} />
      </main>
      <Footer />
    </>
  );
}
