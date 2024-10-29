import React from 'react';
import companyImage from '../../../assets/logo.png'; 

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-8 bg-gray-100">
      <div className="md:w-1/2">
        <img src={companyImage} alt="Company" className="w-[80%] h-[20rem] rounded-lg shadow-lg" />
      </div>
      <div className="md:w-1/2 md:pl-8">
        <h1 className="text-3xl font-bold mb-4 text-[#35FDFF]">Welcome to Paragon: The Fastest Growing IT Company</h1>
        <p className="text-gray-700">
          At Paragon, we pride ourselves on delivering innovative technology solutions tailored to the unique needs of our clients. With a focus on quality and customer satisfaction, we offer a wide range of services including software development, IT consulting, and digital transformation. Our team of experts combines industry knowledge with cutting-edge technology to help businesses streamline their operations and enhance their productivity. We believe in building lasting relationships with our clients and partners by providing exceptional service and support. As the fastest-growing IT company, we are committed to staying ahead of the curve, continuously improving our processes, and embracing new technologies to provide our clients with the best possible outcomes.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;