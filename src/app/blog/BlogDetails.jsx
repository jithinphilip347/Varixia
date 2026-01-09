"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import BlogBox from '../../components/blogbox/BlogBox';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import 'swiper/css';
import 'swiper/css/pagination';

import { MEDIA_BASE_URL } from '@/utils/constants';

gsap.registerPlugin(ScrollTrigger);

const BlogDetails = ({ blog, blogs }) => {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header and Image Animation
      gsap.from(".animate-up", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Content Sections animation on scroll
      gsap.from(".blog-content-wrapper > *", {
        scrollTrigger: {
          trigger: ".blog-content-wrapper",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  if (!blog) return null;

  return (
    <div id='BlogDetails' ref={mainRef}>
      <div className='container'>
        
        {/* --- Breadcrumbs --- */}
        <nav className="breadcrumb animate-up">
          <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / <span>{blog.name}</span>
        </nav>

        {/* --- Blog Header Section --- */}
        <div className='blog-header'>
          <div className='category-container animate-up'>
            <span className='category-tag'>{blog.type || 'Blog'}</span>
          </div>
          <h1 className='main-title animate-up'>{blog.name}</h1>
          
          <div className='author-info animate-up'>
            <div className='author-img'>
              <div 
                style={{ 
                  width: 40, 
                  height: 40, 
                  borderRadius: '50%', 
                  background: 'linear-gradient(180deg, #05ddff, #00bdfa, #008efa, #0069f7, #003ffa)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: '#fff', 
                  fontSize: '18px', 
                  fontWeight: 'bold' 
                }}
              >
                {blog.name.charAt(0)}
              </div>
            </div>
            <div className='author-details'>
              <p className='name'>Varixia Team</p>
              <p className='role'>{blog.meta_title || 'Expert Insight'}</p>
            </div>
            <span className='date'>{formatDate(blog.created_at)}</span>
          </div>
        </div>

        {/* --- Centered Main Featured Image --- */}
        <div className='featured-image-wrapper animate-up'>
          <div className='featured-image'>
            <Image 
              src={MEDIA_BASE_URL + blog.resource} 
              alt={blog.image_alt || blog.name} 
              width={1200}
              height={600}
              layout="responsive"
              unoptimized
            />
          </div>
        </div>

        {/* --- Blog Content --- */}
        <div className='blog-content-wrapper'>
          <p className='intro-text'>
            {blog.short_description}
          </p>

          <div className='bloguSubs'>
            {blog.description_blocks && blog.description_blocks.map((block) => (
              <div key={block.id} className='content-block' style={{ width: '100%', marginBottom: '40px' }}>
                {block.title && <h2 className='sub-heading'>{block.title}</h2>}
                
                {block.content && (
                  <div 
                    className='rich-text-content'
                    dangerouslySetInnerHTML={{ __html: block.content }}
                  />
                )}

                {block.image && (
                  <div className='mid-content-image' style={{ marginTop: '30px' }}>
                    <Image 
                      src={MEDIA_BASE_URL + block.image} 
                      alt={block.image_alt || "Content Image"} 
                      width={800}
                      height={450}
                      layout="responsive"
                      unoptimized
                    />
                    {block.image_alt && <p className='caption'>{block.image_alt}</p>}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* --- Related Blogs --- */}
        <div className='related-blogs'>
          <h2 className='related-title'>Related Blogs</h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={25} 
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {blogs && blogs.data && blogs.data.filter(b => b.id !== blog.id).map((b) => (
              <SwiperSlide key={b.id}>
                <BlogBox 
                   id={b.id}
                   slug={b.slug}
                   image={MEDIA_BASE_URL + b.resource}
                   imageAlt={b.image_alt}
                   category={b.type || "Blog"}
                   title={b.name}
                   description={b.short_description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </div>
  );
};

export default BlogDetails;