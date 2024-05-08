"use client";

import Image from 'next/image';
import "../styles/image-gallery.css";

export default function ImageGallery({ data }) {
    return (
        <ul className="image-gallery">
            {data?.map((image) => (
                <li key={image.id}>
                    <Image
                        tabIndex={-1}
                        src={image.src.original}
                        alt={image.alt}
                        width={200}
                        height={500}
                        title={image.title}
                        priority
                        className="featured-image"
                        onClick={(e) => {
                            animateImageWidth(e);
                            shrinkAllButGrown(e);
                        }}
                        onAnimationEnd={(e) => {
                            if ([...e.target.classList].includes('grow-image')) {
                                e.target.style.width = '450px';
                            } else {
                                e.target.style.width = '130px';
                            }
                        }}
                    />
                </li>
            ))}
        </ul>
    )
}

function animateImageWidth(e) {
    if ([...e.target.classList].includes('grow-image')) {
        e.target.classList.add('shrink-image');
        e.target.classList.remove('grow-image');
    } else {
        e.target.classList.remove('shrink-image');
        e.target.classList.add('grow-image');
    }
}

function shrinkAllButGrown(e) {
    const images = [...document.querySelectorAll('.featured-image')];
    for (const img of images) {
        if (img != e.target && [...img.classList].includes('grow-image')) {
            img.classList.remove('grow-image');
            img.classList.add('shrink-image');
        }
    }
}
