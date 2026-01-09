"use client"
import React from 'react';
import '../../assets/css/BlogBox.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import blogApi from '@/libs/blogApi';

const BlogBox = ({ image, category, title, description, imageAlt, id, slug }) => {
  const router = useRouter();
  const { updateCount } = blogApi();

  const handleBlogClick = (blogId) => {
    updateCount(blogId);
    router.push(`/blog/${blogId}/${slug}`);
  };
  return (
    <div className='blog-card'>
      <div className='image-container'>
        <Image src={image} alt={imageAlt || title} layout="fill" objectFit="cover" unoptimized={true} />
        <span className='category-tag'>{category}</span>
      </div>

      <div className='content-section'>
        <h2 className='blog-title'>{title}</h2>
        <p className='blog-description'>{description}</p>

        <a onClick={() => handleBlogClick(id)} className='read-blog-btn'>
          Read Blog
        </a>
      </div>
    </div>
  );
};

export default BlogBox;