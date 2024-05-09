import Footer from "../components/Footer";
import Header from "../components/Header";
import Feed from "../components/Feed";
import {fetchCuratedPhotos} from "../page";

export default async function Page() {
    const data = await fetchCuratedPhotos(1, 20);

    return (
        <>
            <Header />
            <main>
                <Feed data={data} />
            </main>
            <Footer />
        </>
    );
}
