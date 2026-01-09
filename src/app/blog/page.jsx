import React from 'react'
import BlogList from './BlogList'
import blogApi from '@/libs/blogApi'

const { getBlogs } = blogApi();

const page = async () => {

  const blogs = await getBlogs();
  return (
    <div>
        <BlogList blogs={blogs}/>
    </div>
  )
}

export default page