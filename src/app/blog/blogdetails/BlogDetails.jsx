"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import BlogBox from '../../../components/blogbox/BlogBox';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import 'swiper/css';
import 'swiper/css/pagination';

// Assets
import blogImg1 from '../../../../public/images/blog1.jpg'; 
import authorImg from '../../../../public/images/blog1.jpg'; 

gsap.registerPlugin(ScrollTrigger);

const BlogDetails = () => {
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

  const blogData = [
    { id: 1, image: blogImg1, category: 'Creativity', title: 'Scaling Smart: How Small Brands Can Win Big', description: 'Master the fundamentals of Generative AI in just one day...' },
    { id: 2, image: blogImg1, category: 'Marketing', title: 'Digital Marketing Trends in 2024', description: 'Explore how brands are evolving in the digital landscape...' },
    { id: 3, image: blogImg1, category: 'Design', title: 'The Future of UI/UX Design', description: 'Learn how to simplify and harness the power of modern design...' },
  ];

  return (
    <div id='BlogDetails' ref={mainRef}>
      <div className='container'>
        
        {/* --- Breadcrumbs --- */}
        <nav className="breadcrumb animate-up">
          <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / <span>Blog Details</span>
        </nav>

        {/* --- Blog Header Section --- */}
        <div className='blog-header'>
          <div className='category-container animate-up'>
            <span className='category-tag'>Fundamental</span>
          </div>
          <h1 className='main-title animate-up'>Transforming Impactful Ideas: Inside Our Agency Process</h1>
          
          <div className='author-info animate-up'>
            <div className='author-img'>
              <Image src={authorImg} alt="Author" width={40} height={40} />
            </div>
            <div className='author-details'>
              <p className='name'>Alessandro Pereira</p>
              <p className='role'>Founder</p>
            </div>
            <span className='date'>May 12, 2025</span>
          </div>
        </div>

        {/* --- Centered Main Featured Image (50% Width) --- */}
        <div className='featured-image-wrapper animate-up'>
          <div className='featured-image'>
            <Image src={blogImg1} alt="Main Blog Visual" layout="responsive" />
          </div>
        </div>

        {/* --- Blog Content --- */}
        <div className='blog-content-wrapper'>
          <p className='intro-text'>
            The creative process has always been an intricate blend of inspiration, skill, and tools. For centuries, 
            the tools available—from brushes and chisels to cameras and software.
          </p>

          <h2 className='sub-heading'>The Power of Text-to-Image Generation.</h2>
          <p>
            Imagine typing, "a serene mountain lake at sunrise..." and watching as a high-quality 
            image materializes in seconds.
          </p>
           <div className='bloguSubs'>
              <div className='mid-content-image'>
             <Image src={blogImg1} alt="AI Interface" layout="responsive" />
             <p className='caption'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
          </div>
          <h2 className='sub-heading longer-title'>
    How Generative AI Enhances Human Creativity and Redefines the Traditional Design Workflow.
  </h2>
          <div className='numbered-list'>
            <h3>1. Rapid Prototyping</h3>
            <p>One of the most significant advantages of text-to-image AI is speed. Traditionally, creating a visual concept could take hours or even days.</p>
            
            <h3>2. Expanding Creative Boundaries</h3>
            <p>AI-generated images often include unexpected elements or compositions, sparking new ideas that creators might not have considered.</p>
          </div>
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
            {blogData.map((blog) => (
              <SwiperSlide key={blog.id}>
                <BlogBox {...blog} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </div>
  );
};

export default BlogDetails;