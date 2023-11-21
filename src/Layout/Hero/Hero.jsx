import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';

const Hero = () => {
    const [swipers, setSwipers] = useState([]);
    useEffect(() => {
        fetch('/swiper.json')
            .then(res => res.json())
            .then(data => setSwipers(data))
    }, [])
    return (
        <div className='overflow-hidden max-h-screen w-full'>
            <Swiper
                autoHeight={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                loop={true}
                spaceBetween={100}
                effect={'fade'}
                modules={[EffectFade, Autoplay]}
                className="mySwiper"
            >
                {
                    swipers.map(swiper => 
                    <SwiperSlide
                        key={swiper.id}>
                        <div className="relative">
                            <img className='w-full' src={swiper?.img} alt="Myanmar" />
                            <div className="absolute lg:top-1/2 md:top-2/3 top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center md:space-y-3 px-3 py-2 rounded-2xl bg-white bg-opacity-20">
                                <h2 className="text-sm md:text-3xl lg:text-6xl font-bold ">{swiper?.title}</h2>
                                <p className="text-[10px] md:text-xl lg:text-2xl">{swiper?.details}</p>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Hero;