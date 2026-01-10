import React from 'react'
import BlogDetails from '../../BlogDetails'
import blogApi from "@/libs/blogApi";
import { MEDIA_BASE_URL } from '@/utils/constants';
import Script from 'next/script';

const { getBlogById, getBlogs } = blogApi();

export async function generateMetadata({ params }) {
  const { id } = await params;
  const blog = await getBlogById(id);

  if (!blog) {
    return {
      title: 'Blog Not Found | Varixia',
    };
  }

  const title = blog.meta_title || blog.name;
  const description = blog.meta_description || blog.short_description;
  const ogImage = MEDIA_BASE_URL + blog.resource;
  const canonical = blog.canonical_tag || `https://varixia.com/blog/${blog.id}/${blog.slug}`;

  return {
    title: title,
    description: description,
    keywords: blog.meta_keywords,
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      title: title, // Explicitly set OG title
      description: description,
      url: canonical,
      type: 'article',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: blog.image_alt || blog.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [ogImage],
    },
  };
}

const page = async ({ params }) => {
  const { id } = await params;
  const blogs = await getBlogs();
  const blog = await getBlogById(id);
  

  if (!blog) return <div>Blog not found</div>;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.name,
    "image": MEDIA_BASE_URL + blog.resource,
    "datePublished": blog.created_at,
    "dateModified": blog.updated_at,
    "author": {
      "@type": "Organization",
      "name": "Varixia Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Varixia",
      "logo": {
        "@type": "ImageObject",
        "url": "https://varixia.com/images/logo.png"
      }
    },
    "description": blog.short_description,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://varixia.com/blog/${blog.id}/${blog.slug}`
    }
  };

  return (
    <div>
      <Script
        id="blog-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogDetails blogs={blogs} blog={blog} />
    </div>
  )
}

export default page