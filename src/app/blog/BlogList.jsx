"use client";
import React, { useState } from "react";
import BlogBox from "../../components/blogbox/BlogBox";
import blogImg1 from "../../../public/images/blog1.jpg";
import Link from "next/link";
import { MEDIA_BASE_URL } from "@/utils/constants";
import blogApi from "@/libs/blogApi";

const BlogList = ({ blogs }) => {
  const [visibleCount, setVisibleCount] = useState(4); 
   
  const displayData = blogs && blogs.data ? blogs.data : [];
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 2); 
  };
  const { updateCount } = blogApi()

  

  return (
    <div id="BlogList">
      <div className="container">
        
        {/* Breadcrumbs */}
        <nav className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <p>Blogs</p>
        </nav>

        <div className="BlogListMain">
          <div className="Blogbox">
            {displayData.slice(0, visibleCount).map((blog) => (
              <BlogBox
                key={blog.id}
                id={blog.id}
                slug={blog.slug || (blog.name || blog.title).toLowerCase().replace(/ /g, '-')}
                image={blog.resource ? (MEDIA_BASE_URL + blog.resource) : blog.image}
                imageAlt={blog.image_alt || blog.title}
                category={blog.type || blog.category || "Blog"}
                title={blog.name || blog.title}
                description={blog.short_description || blog.description}
              />
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < displayData.length && (
            <div className="LoadMoreSection">
              <button onClick={handleLoadMore} className="load-more-btn">
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogList;