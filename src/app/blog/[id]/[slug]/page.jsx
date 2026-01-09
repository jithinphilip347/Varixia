import React from 'react'
import BlogDetails from '../../BlogDetails'
import blogApi from "@/libs/blogApi";

const { getBlogById,getBlogs } = blogApi();

const page = async ({  params}) => {
  const { id,slug } = await params;
  console.log(id,slug);
  const blogs = await getBlogs();
  const blog = await getBlogById(id);
  
  return (
    <div>
        <BlogDetails blogs={blogs} blog={blog} />
    </div>
  )
}

export default page