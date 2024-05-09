import { fetchPhoto } from "../page";
import Image from 'next/image';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export default async function Page({ params }) {
    const photo = await fetchPhoto(params.id);

    return (
        <>
            <Header />
            <main className="flex justify-around items-center w-full">
                <Image
                    src={photo.src.landscape}
                    alt={photo.alt}
                    width={640}
                    height={450}
                    className="rounded-sm"

                />
                <h1 className="max-w-[30ch] mt-4">{photo.alt} by {photo.photographer} on <Link href={photo.url}>Pexels</Link></h1>
            </main>
            <Footer />
        </>
    )
}