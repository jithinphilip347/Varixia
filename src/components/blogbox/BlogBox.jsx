"use client"
import React from 'react';
import '../../assets/css/BlogBox.css';
import Image from 'next/image';
import Link from 'next/link';

const BlogBox = ({ image, category, title, description }) => {
  return (
    <div className='blog-card'>
      <div className='image-container'>
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
        <span className='category-tag'>{category}</span>
      </div>

      <div className='content-section'>
        <h2 className='blog-title'>{title}</h2>
        <p className='blog-description'>{description}</p>

        <Link href="/blog/blogdetails" className='read-blog-btn'>
          Read Blog
        </Link>
      </div>
    </div>
  );
};

export default BlogBox;