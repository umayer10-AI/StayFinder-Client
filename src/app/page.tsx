import Banner from '@/component/Banner';
import Destinations from '@/component/Destination';
import Services from '@/component/Services';
import React from 'react';

const page = () => {
  return (
    <div>
      <Banner></Banner>
      <Destinations></Destinations>
      <Services></Services>
    </div>
  );
};

export default page;