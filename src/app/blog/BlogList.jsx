


"use client";
import React, { useState } from "react";
import BlogBox from "../../components/blogbox/BlogBox";
import Link from "next/link";
import { MEDIA_BASE_URL } from "@/utils/constants";
import blogApi from "@/libs/blogApi";
import NoData from "../../../public/images/no-data.jpg"; 

const BlogList = ({ blogs }) => {
  const [visibleCount, setVisibleCount] = useState(4);
  const displayData = blogs && blogs.data ? blogs.data : [];

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  

  return (
    <div id="BlogList">
      <div className="container">
        <nav className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <p>Blogs</p>
        </nav>

        <div className="BlogListMain">
          {displayData.length > 0 ? (
            <>
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
            </>
          ) : (
            
            <div className="NoDataContainer">
              <div className="NoDataContent">
                <img src={NoData.src || NoData} alt="No Blogs Found" className="NoDataImg" />
                <h3>No Blogs Found</h3>
                <p>We haven't posted any stories yet. Please check back later for updates!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogList;