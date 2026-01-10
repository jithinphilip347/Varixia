"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import BlogBox from '../blogbox/BlogBox';
import 'swiper/css';
import 'swiper/css/pagination';
import blogImg1 from '../../../public/images/blog1.jpg'; 
import Link from 'next/link';
import { MEDIA_BASE_URL } from '@/utils/constants';
// import { Link } from 'react-router-dom';
import NoData from '../../../public/images/no-data.jpg'
import Image from 'next/image';


const HomeBlog = ({ blogs }) => {

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
        {/* <Swiper
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
          {blogs.data.map((blog) => (
            <SwiperSlide key={blog.id} style={{ height: 'auto' }}>
              
              <BlogBox 
                id={blog.id}
                slug={blog.slug}
                image={MEDIA_BASE_URL +  blog.resource}
                imageAlt={blog.image_alt}
                category={"BLOG"}
                title={blog.name}
                description={blog.short_description}
              />
            </SwiperSlide>
          ))}
        </Swiper> */}
        {blogs && blogs.data && blogs.data.length > 0 ? (
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
    {blogs.data.map((blog) => (
      <SwiperSlide key={blog.id} style={{ height: 'auto' }}>
        <BlogBox
          id={blog.id}
          slug={blog.slug}
          image={MEDIA_BASE_URL + blog.resource}
          imageAlt={blog.image_alt}
          category={"BLOG"}
          title={blog.name}
          description={blog.short_description}
        />
      </SwiperSlide>
    ))}
  </Swiper>
) : (
  <div className="NoDataContainer">
    <div className="NoDataContent">
      <Image src={NoData} alt="No Blogs Found" className="NoDataImg" />
      <h3>No Blogs Found</h3>
      <p>We haven't posted any stories yet. Please check back later for updates!</p>
    </div>
  </div>
)}
      </div>
    </div>
  );
};

export default HomeBlog;