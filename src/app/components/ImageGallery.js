"use client";

import gsap from 'gsap';
import Image from 'next/image';
import "../styles/image-gallery.css";

export default function ImageGallery({ data }) {
    return (
        <ul className="image-gallery">
            {data?.map((image, i) => (
                <li key={image.id}>
                    <button 
                        onClick={(e) => {
                            const images = [...document.querySelectorAll('.featured-image')];
                            animateImageWidth(images[i], image);
                            shrinkAllButGrown(images[i], image);
                        }}
                        onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                                const images = [...document.querySelectorAll('.featured-image')];
                                animateImageWidth(images[i], image);
                                shrinkAllButGrown(images[i], image);
                            }
                        }}
                    >
                        <Image
                        tabIndex={0}
                        src={image.src.original}
                        alt={image.alt}
                        width={200}
                        height={500}
                        title={image.title}
                        id={`image-${image.id}`}
                        className={`featured-image`}
                        // onClick={(e) => {
                        //     animateImageWidth(e, image);
                        //     shrinkAllButGrown(e, image);
                        // }}
                        // onKeyUp={(e) => {
                        //     if (e.key === 'Enter') {
                        //         animateImageWidth(e, image);
                        //         shrinkAllButGrown(e, image);
                        //     }
                        // }}
                        priority
                    />
                    </button>
                </li>
            ))}
        </ul>
    )
}

function animateImageWidth(e, image) {
    if ([...e.classList].includes('grow-image')) {
        e.classList.add('shrink-image');
        e.classList.remove('grow-image');
        gsap.to(`#image-${image.id}`, {
            width: 130,
            ease: 'power4',
            duration: .5
        })
    } else {
        e.classList.remove('shrink-image');
        e.classList.add('grow-image');
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
        if (image != e && [...image.classList].includes('grow-image')) {
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
