import React, { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Footer from '../../Footer/Footer';

const TechnologiesSlider = () => {
  return (
   <Fragment>
     <div className="p-8 bg-[#37383C] ">
      <h2 className="text-center text-2xl font-bold mb-4 text-[#73FAF9]">
        We are working on these <span className="text-[#73FAF9]">Technologies</span>
      </h2>
      <Swiper
         modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        
         slidesPerView={6}
         autoplay={{ delay: 4000, disableOnInteraction: false }}
         navigation
         pagination={{ clickable: true }}
         scrollbar={{ draggable: true }}
        className="flex w-[80%]"
      >
        <SwiperSlide className="flex justify-center">
          <div className="bg-[#37383C] rounded-md p-4 shadow-md">
            <img src="./assets/html.png" alt="Html" className="w-24 h-24 mx-auto" />
            <p className="text-center mt-2 font-medium text-[#73FAF9]">Html</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="bg-[#37383C] rounded-md p-4 shadow-md">
            <img src="./assets/android.png" alt="Android" className="w-24 h-24 mx-auto" />
            <p className="text-center mt-2 font-medium text-[#73FAF9]">Android</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="bg-[#37383C] rounded-md p-4 shadow-md">
            <img src="./assets/bootstrap.png" alt="BootStrap" className="w-24 h-24 mx-auto" />
            <p className="text-center mt-2 font-medium text-[#73FAF9]">BootStrap</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="bg-[#37383C] rounded-md p-4 shadow-md">
            <img src="./assets/javascript.png" alt="JavaScript" className="w-24 h-24 mx-auto" />
            <p className="text-center mt-2 font-medium text-[#73FAF9]">JavaScript</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="bg-[#37383C] rounded-md p-4 shadow-md">
            <img src="./assets/mysql.png" alt="MySql" className="w-24 h-24 mx-auto" />
            <p className="text-center mt-2 font-medium text-[#73FAF9]">MySql</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="bg-[#37383C] rounded-md p-4 shadow-md">
            <img src="./assets/node.png" alt="Node.js" className="w-24 h-24 mx-auto" />
            <p className="text-center mt-2 font-medium  text-[#73FAF9]">Node.js</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="bg-[#37383C] rounded-md p-4 shadow-md">
            <img src="./assets/php.png" alt="Php" className="w-24 h-24 mx-auto" />
            <p className="text-center mt-2 font-medium text-[#73FAF9]">Php</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="bg-[#37383C] rounded-md p-4 shadow-md">
            <img src="./assets/python.png" alt="Python" className="w-24 h-24 mx-auto" />
            <p className="text-center mt-2 font-medium text-[#73FAF9]">Python</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <div className="bg-[#37383C] rounded-md p-4 shadow-md">
            <img src="./assets/wordpress.png" alt="Wordpress" className="w-24 h-24 mx-auto" />
            <p className="text-center mt-2 font-medium text-[#73FAF9]">Wordpress</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div className=''>
       <Footer />
       </div>
   </Fragment>
  );
};

export default TechnologiesSlider;
