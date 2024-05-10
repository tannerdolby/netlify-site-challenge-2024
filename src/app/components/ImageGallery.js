"use client";

import gsap from 'gsap';
import Image from 'next/image';
import "../styles/image-gallery.css";

export default function ImageGallery({ data }) {
    return (
        <ul className="image-gallery">
            {data?.map((image) => (
                <li key={image.id}>
                    <Image
                        tabIndex={0}
                        src={image.src.original}
                        alt={image.alt}
                        width={200}
                        height={500}
                        title={image.title}
                        id={`image-${image.id}`}
                        className={`featured-image`}
                        onClick={(e) => {
                            animateImageWidth(e, image);
                            shrinkAllButGrown(e, image);
                        }}
                        onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                                animateImageWidth(e, image);
                                shrinkAllButGrown(e, image);
                            }
                        }}
                        priority
                    />
                </li>
            ))}
        </ul>
    )
}

function animateImageWidth(e, image) {
    if ([...e.target.classList].includes('grow-image')) {
        e.target.classList.add('shrink-image');
        e.target.classList.remove('grow-image');
        gsap.to(`#image-${image.id}`, {
            width: 130,
            ease: 'power4',
            duration: .5
        })
    } else {
        e.target.classList.remove('shrink-image');
        e.target.classList.add('grow-image');
        gsap.to(`#image-${image.id}`, {
            width: 425,
            ease: 'power4',
            duration: .5,
        })
    }
}

function shrinkAllButGrown(e) {
    const images = [...document.querySelectorAll('.featured-image')];
    for (const image of images) {
        if (image != e.target && [...image.classList].includes('grow-image')) {
            image.classList.remove('grow-image');
            image.classList.add('shrink-image');
            gsap.to(`#${image.id}`, {
                width: 130,
                ease: 'power4',
                duration: .5
            });
        }
    }
}
