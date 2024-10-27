import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // only trigger once
    threshold: 0.5, // percentage of element visible to trigger
  });

  return (
    <div className="bg-gray-800 text-white p-8" ref={ref}>
      <div className="flex justify-around items-center">
        <div className="text-center">
          <CountUp start={0} end={2015} duration={3} delay={0} useEasing={true} redraw={inView} />
          <p className="text-xl">Working From</p>
        </div>
        <div className="text-center">
          <CountUp start={0} end={517} duration={3} delay={0} useEasing={true} redraw={inView} />
          <p className="text-xl">Projects Completed</p>
        </div>
        <div className="text-center">
          <CountUp start={0} end={40} duration={3} delay={0} useEasing={true} redraw={inView} />
          <p className="text-xl">Weekly Working Hours</p>
        </div>
        <div className="text-center">
          <CountUp start={0} end={210} duration={3} delay={0} useEasing={true} redraw={inView} />
          <p className="text-xl">Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
