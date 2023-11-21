import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// const images = [, , , , , , , , 'https://i.ibb.co/N7x4q9F/nijeria.jpg', 'https://i.ibb.co/NrxS5r8/iraq.webp', , , 'https://i.ibb.co/qkqgVMq/jeshamer2.webp', , , , ];

const images = [
    {
        src: 'https://i.ibb.co/85B7GXS/ef759952717696387ad1468af8ab1204.jpg',
        width: 320,
        height: 174,
    },
    {
        src: 'https://i.ibb.co/09b7Ngd/fa6c7fa47516dbeeefeae7e2be0f2014.jpg',
        width: 320,
        height: 212,
    },
    {
        src: 'https://i.ibb.co/p3bSH0S/swiper-1.jpg',
        width: 620,
        height: 212,
    },
    {
        src: 'https://i.ibb.co/17hb6wq/swiper-4.jpg',
        width: 220,
        height: 212,
    },
    {
        src: 'https://i.ibb.co/tL49Qwg/swiper-3.jpg',
        width: 420,
        height: 212,
    },
    {
        src: 'https://i.ibb.co/JkgyK69/swiper-2.jpg',
        width: 220,
        height: 212,
    },
    {
        src: 'https://i.ibb.co/g3NpMV2/parallax-11.jpg',
        width: 520,
        height: 212,
    },
    {
        src: 'https://i.ibb.co/Y0217cC/haiti.jpg',
        width: 320,
        height: 212,
    },
    {
        src: 'https://i.ibb.co/vjX8s8j/afghanistan.jpg',
        width: 320,
        height: 212,
    },
    {
        src: 'https://i.ibb.co/V93gM1g/yemen.jpg',
        width: 320,
        height: 212,
    }
];


const ImageGallery = () => {


    return (
        <div>
            <Gallery
                images={images}
            />

        </div>
    );
};

export default ImageGallery;