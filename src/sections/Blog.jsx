import React from 'react'
import { blogData } from '../constants'
import BlogCard from '../components/BlogCard'
const Blog = () => {
  return (
    <section id="blog">
        <div className="title">
            <h2 className='text-[1.7rem] md:[2.2rem]'>Our Blog</h2>
            <p className='mt-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
             Ipsum facilis recusandae cupiditate eligendi quas ut incidunt officia a numquam qui.</p>
        </div>
        <div className="container max-sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-8 ">
            {
                blogData.map((blog)=>(
                    <BlogCard key={blog.title} {...blog}/>
                )
            )
            }
        </div>
    </section>
  )
}

export default Blog