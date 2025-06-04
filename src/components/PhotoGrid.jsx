import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const photos = [
  { id: 1, url: '/assets/Photos/IMG_7028.JPG' },
  { id: 2, url: '/assets/Photos/IMG_7032.JPG' },
  { id: 3, url: '/assets/Photos/IMG_7035.JPG' },
  { id: 4, url: '/assets/Photos/IMG_7036.JPG' },
  { id: 5, url: '/assets/Photos/IMG_7038.JPG' },
  { id: 6, url: '/assets/Photos/IMG_7039.JPG' },
  { id: 7, url: '/assets/Photos/IMG_7040.JPG' },
  { id: 8, url: '/assets/Photos/IMG_7041.JPG' },
  { id: 9, url: '/assets/Photos/IMG_7043.JPG' },
  { id: 10, url: '/assets/Photos/IMG_7044.JPG' },
  { id: 11, url: '/assets/Photos/IMG_7046.JPG' },
  { id: 12, url: '/assets/Photos/IMG_7047.JPG' },
  { id: 13, url: '/assets/Photos/IMG_7048.JPG' },
  { id: 14, url: '/assets/Photos/IMG_7049.JPG' },
  { id: 15, url: '/assets/Photos/IMG_7050.JPG' },
  { id: 16, url: '/assets/Photos/IMG_7051.JPG' },
  { id: 17, url: '/assets/Photos/IMG_7052.JPG' },
  { id: 18, url: '/assets/Photos/IMG_7053.JPG' },
  { id: 19, url: '/assets/Photos/IMG_7054.JPG' },
  { id: 20, url: '/assets/Photos/IMG_7055.JPG' },
  { id: 21, url: '/assets/Photos/IMG_73301.JPG' },
  { id: 22, url: '/assets/Photos/IMG_7057.JPG' },
  { id: 23, url: '/assets/Photos/IMG_7058.JPG' },
  { id: 24, url: '/assets/Photos/IMG_7059.JPG' },
  { id: 25, url: '/assets/Photos/IMG_7060.JPG' },
  { id: 26, url: '/assets/Photos/IMG_7329.JPG' },
  { id: 27, url: '/assets/Photos/IMG_7620.PNG' },
  { id: 28, url: '/assets/Photos/IMG_7063.PNG' },
  { id: 29, url: '/assets/Photos/IMG_7323.JPG' },
  { id: 30, url: '/assets/Photos/IMG_7324.JPG' },
  { id: 31, url: '/assets/Photos/IMG_7325.JPG' },
  { id: 32, url: '/assets/Photos/IMG_7326.JPG' },
  { id: 33, url: '/assets/Photos/IMG_7327.JPG' }
  
];

const PhotoGrid = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const isMobile = window.innerWidth <= 768;
  return (
    <section id='gallery' className="py-12 px-4 bg-[#faf7f5] md:w-screen md:min-h-screen">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-serif text-center text-[#412619] mb-12 text-gradient"
      >
        Moments Captured
      </motion.h2>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={isMobile ? 1.5 : 3} 
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
        {photos.map((photo, index) => (
          <SwiperSlide key={photo.id} className="w-64">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative aspect-square cursor-pointer group mb-0 pb-0"
              onClick={() => setSelectedPhoto(photo)}
            >
              <motion.div
                className="absolute inset-0 bg-white rounded-2xl shadow-xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img
                  src={photo.url}
                  alt={`Photo ${photo.id}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white bg-opacity-95 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
              src={selectedPhoto.url}
              alt={`Photo ${selectedPhoto.id}`}
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGrid;
