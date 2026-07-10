import Banner from '@/component/Banner';
import Categories from '@/component/Categories';
import Destinations from '@/component/Destination';
import Highlights from '@/component/Highlights';
import Services from '@/component/Services';
import React from 'react';

const page = () => {
  return (
    <div>
      <Banner></Banner>
      <Destinations></Destinations>
      <Services></Services>
      <Categories></Categories>
      <Highlights></Highlights>
    </div>
  );
};

export default page;