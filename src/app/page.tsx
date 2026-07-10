import Banner from '@/component/Banner';
import Categories from '@/component/Categories';
import Destinations from '@/component/Destination';
import Highlights from '@/component/Highlights';
import Services from '@/component/Services';
import Statistics from '@/component/Statistics';
import Stats from '@/component/Statistics';
import React from 'react';

const page = () => {
  return (
    <div>
      <Banner></Banner>
      <Destinations></Destinations>
      <Services></Services>
      <Categories></Categories>
      <Statistics></Statistics>
      <Highlights></Highlights>
      {/* <Stats></Stats> */}
    </div>
  );
};

export default page;