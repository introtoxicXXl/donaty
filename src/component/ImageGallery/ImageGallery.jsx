import { Gallery } from "react-grid-gallery";

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