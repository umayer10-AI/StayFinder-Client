import Banner from '@/component/Banner';
import Blogs from '@/component/Blogs';
import Categories from '@/component/Categories';
import Destinations from '@/component/Destination';
import Highlights from '@/component/Highlights';
import Services from '@/component/Services';
import Statistics from '@/component/Statistics';
import Testimonials from '@/component/Testimonials';
import React from 'react';

const page = () => {
  return (
    <div>
      <Banner></Banner>
      <Destinations></Destinations>
      <Blogs></Blogs>
      <Categories></Categories>
      <Services></Services>
      <Statistics></Statistics>
      <Highlights></Highlights>
      <Testimonials></Testimonials>
    </div>
  );
};

export default page;