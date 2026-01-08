"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import BlogBox from '../blogbox/BlogBox';
import 'swiper/css';
import 'swiper/css/pagination';
import blogImg1 from '../../../public/images/blog1.jpg'; 
import Link from 'next/link';
// import { Link } from 'react-router-dom';

const HomeBlog = () => {
  const blogData = [
    {
      id: 1,
      image: blogImg1,
      category: 'Creativity',
      title: 'Scaling Smart: How Small Brands Can Win Big',
      description: 'Master the fundamentals of Generative AI in just one day...'
    },
    {
      id: 2,
      image: blogImg1,
      category: 'Marketing',
      title: 'Digital Marketing Trends in 2024',
      description: 'Explore how brands are evolving in the digital landscape...'
    },
    {
      id: 3,
      image: blogImg1,
      category: 'Design',
      title: 'The Future of UI/UX Design',
      description: 'Learn how to simplify and harness the power of modern design...'
    },
        {
      id: 4,
      image: blogImg1,
      category: 'Design',
      title: 'The Future of UI/UX Design',
      description: 'Learn how to simplify and harness the power of modern design...'
    }
  ];

  return (
  <div id='HomeBlog' style={{ backgroundColor: '#000' }}>
      <div className='container'>
        <div className="HomeServiceHead">
          <h2>Our Blogs</h2>
        </div>
     <div className='ViewAllBtn'>
      <Link href="/blog" className="view-all-link">
        View All
      </Link>
    </div>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={25} 
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          style={{ paddingBottom: '50px' }} 
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 } 
          }}
        >
          {blogData.map((blog) => (
            <SwiperSlide key={blog.id} style={{ height: 'auto' }}>
              <BlogBox 
                image={blog.image}
                category={blog.category}
                title={blog.title}
                description={blog.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeBlog;