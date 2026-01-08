"use client";
import React, { useState } from "react";
import BlogBox from "../../components/blogbox/BlogBox";
import blogImg1 from "../../../public/images/blog1.jpg";
import Link from "next/link";

const BlogList = () => {
  const [visibleCount, setVisibleCount] = useState(4); // തുടക്കത്തിൽ 4 കാർഡുകൾ

  const blogData = [
    { id: 1, image: blogImg1, category: "Creativity", title: "Scaling Smart: How Small Brands Can Win Big", description: "Master the fundamentals of Generative AI in just one day..." },
    { id: 2, image: blogImg1, category: "Marketing", title: "Digital Marketing Trends in 2024", description: "Explore how brands are evolving in the digital landscape..." },
    { id: 3, image: blogImg1, category: "Design", title: "The Future of UI/UX Design", description: "Learn how to simplify and harness the power of modern design..." },
    { id: 4, image: blogImg1, category: "Design", title: "The Future of UI/UX Design", description: "Learn how to simplify and harness the power of modern design..." },
    { id: 5, image: blogImg1, category: "Tech", title: "Next.js 15 New Features", description: "Check out the latest updates in the Next.js ecosystem..." },
    { id: 6, image: blogImg1, category: "AI", title: "Generative AI for Designers", description: "How to use Midjourney and DALL-E effectively..." }
  ];

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 2); // 2 എണ്ണം വീതം കൂടുതൽ കാണിക്കും
  };

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
            {blogData.slice(0, visibleCount).map((blog) => (
              <BlogBox
                key={blog.id}
                image={blog.image}
                category={blog.category}
                title={blog.title}
                description={blog.description}
              />
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < blogData.length && (
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