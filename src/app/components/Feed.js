import "../styles/feed.css";
import Image from "next/image";
import Link from "next/link";

export default function Feed({ data }) {
    return (
        <div className="feed-grid">
            <ul className="curated-feed first-column">
                {data?.photos.map((photo) => {
                    return (
                        <li key={photo.id}>
                            <Link
                                href={`/feed/${photo.id}`}
                                aria-label={`A link to featured image page for ${photo.alt}`}
                            >
                            <Image
                                src={photo.src.original}
                                alt={photo.alt}
                                width={200}
                                height={200}
                            />
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}
