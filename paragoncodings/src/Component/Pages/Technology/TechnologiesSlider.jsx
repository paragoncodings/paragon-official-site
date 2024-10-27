import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const technologies = [
  { imgSrc: './assets/html.png', name: 'Html' },
  { imgSrc: './assets/andriod.png', name: 'Android' },
  { imgSrc: './assets/bootstrap.png', name: 'BootStrap' },
  { imgSrc: './assets/javascript.png', name: 'JavaScript' },
  { imgSrc: './assets/mysql.png', name: 'MySql' },
  { imgSrc: './assets/node.png', name: 'Node.js' },
  { imgSrc: './assets/php.png', name: 'Php' },
  { imgSrc: './assets/python.png', name: 'Python' },
  { imgSrc: './assets/wordpress.png', name: 'Wordpress' },
];

const TechnologiesSlider = () => {
  return (
    <div className="p-8 bg-white">
      <h2 className="text-center text-2xl font-bold mb-4">We are working on these <span className="text-gray-600">Technologies</span></h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={8}
        loop={true}
        autoplay={{ delay: 3000 }}
        className="flex justify-center"
      >
        {technologies.map((tech, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="bg-gray-100 rounded-md p-4">
              <img src={tech.imgSrc} alt={tech.name} className="w-16 h-16 mx-auto" />
              <p className="text-center mt-2">{tech.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TechnologiesSlider;
