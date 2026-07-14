import Banner from '@/component/Banner';
import Blogs from '@/component/Blogs';
import Categories from '@/component/Categories';
import Destinations from '@/component/Destination';
import Highlights from '@/component/Highlights';
import Reveal from '@/component/Reveal';
import Services from '@/component/Services';
import Statistics from '@/component/Statistics';
import Testimonials from '@/component/Testimonials';
import React from 'react';

const page = () => {
  return (
    <div>
      <Reveal>
        <Banner></Banner>
      </Reveal>

      <Reveal>
        <Destinations></Destinations>
      </Reveal>

      <Reveal>
        <Blogs></Blogs>
      </Reveal>

      <Reveal>
        <Categories></Categories>
      </Reveal>

      <Reveal>
        <Services></Services>
      </Reveal>

      <Reveal>
        <Statistics></Statistics>
      </Reveal>

      <Reveal>
        <Highlights></Highlights>
      </Reveal>

      <Reveal>
        <Testimonials></Testimonials>
      </Reveal>
    </div>
  );
};

export default page;