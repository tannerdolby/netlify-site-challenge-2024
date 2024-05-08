"use client";

import Image from "next/image";
import "../styles/feed.css";

export default function Feed({ data }) {
    return (
        <div className="feed-grid">
            <ul className="curated-feed first-column">
                {data?.photos.slice(0, 7).map((photo, i) => {
                    return (
                        <li key={photo.id}>
                            <Image
                                src={photo.src.original}
                                alt={photo.alt}
                                width={200}
                                height={200}
                            />
                        </li>
                    )
                })}
            </ul>
            <ul className="curated-feed second-column">
                {data?.photos?.slice(6, 14).map((photo, i) => {
                    return (
                        <li key={photo.id}>
                            <Image
                                src={photo.src.original}
                                alt={photo.alt}
                                width={200}
                                height={200}
                            />
                        </li>
                    )
                })}
            </ul>
            <ul className="curated-feed third-column">
                {data?.photos?.slice(14).map((photo) => {
                    return (
                        <li key={photo.id}>
                            <Image
                                src={photo.src.original}
                                alt={photo.alt}
                                width={200}
                                height={200}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}
