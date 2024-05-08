import ImageGallery from "./components/ImageGallery";
import Footer from "./components/Footer";
import Header from "./components/Header";

async function fetchPhoto(id) {
  const options = {
    headers: {
      'Authorization': process.env.PEXELS_API_KEY
    }
  }
  const res = await fetch(process.env.PEXELS_API_URL + '/photos/' + id, options);
  return await res.json();
}

export default async function Page() {
  const photoIds = [1820770, 19961796, 2376799, 19887907, 2901581];
  const photos = [];

  for (const id of photoIds) {
    photos.push(await fetchPhoto(id));
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
