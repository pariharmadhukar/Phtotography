import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const reels = [
  { id: 1, embedUrl: '/assets/Video-138.mp4' },
  { id: 2, embedUrl: '/assets/Video-487.mp4' },
  { id: 3, embedUrl: '/assets/Video-985.mp4' },
  { id: 4, embedUrl: '/assets/Video-182.mp4' },
  { id: 5, embedUrl: '/assets/Video-262.mp4' },
  { id: 6, embedUrl: '/assets/Video-901.mp4' },
];

const InstagramReels = () => {
  const swiperRef = useRef(null);

  const handlePlay = () => swiperRef.current?.autoplay?.stop();
  const handlePauseOrEnd = () => swiperRef.current?.autoplay?.start();

  const isMobile = window.innerWidth <= 768;


  return (
    <section className="w-full min-h-screen py-12 px-4  bg-[#fdf8f5] pt-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-serif text-center mb-10 bg-gradient-to-r from-[#d4a373] to-[#ccd5ae] bg-clip-text text-transparent"
      >
        Stories in Motion
      </motion.h2>

      <div className="w-full h-[80vh] mx-auto">
        <Swiper
               effect="coverflow"
               grabCursor={true}
               centeredSlides={true}
               slidesPerView={isMobile ? 1.8 : 5 } 
               spaceBetween={0} 
               coverflowEffect={{
                 rotate: 0,
                 stretch: 0,
                 depth: 100,
                 modifier: 2.5,
                 slideShadows: false,
               }}
               pagination={{ clickable: true }}
               autoplay={{ delay: 3500, disableOnInteraction: false }}
               modules={[EffectCoverflow, Pagination, Autoplay]}
               className="mySwiper"
             >
          {reels.map((reel) => (
            <SwiperSlide
              key={reel.id}
              className="flex items-center justify-center w-full h-full"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
                className="w-full h-full rounded-xl overflow-hidden shadow-xl"
              >
                <video
                  src={reel.embedUrl}
                  controls
                  preload="metadata"
                  onPlay={handlePlay}
                  onPause={handlePauseOrEnd}
                  onEnded={handlePauseOrEnd}
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default InstagramReels;
