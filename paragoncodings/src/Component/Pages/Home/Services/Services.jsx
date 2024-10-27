import React from 'react';
import ServicesBanner from './ServicesBanner';
import AIServiceCard from './AIServiceCard';
import services from './ServicesData'; // Import the services data array

const Services = () => {
  return (
    <>
     <ServicesBanner />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-[37383C]">
        {services.map((service) => (
          <AIServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            imgUrl={service.imgUrl}
          />
        ))}
      </div>
    </>
  );
};

export default Services;
