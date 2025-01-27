import React from 'react';

const BlogCard = ({ imgURL, title, des }) => {
  return (
    <div className="blog-card relative flex flex-1 flex-col items-center text-center w-full max-sm:w-full bg-white p-2 ring-1 ring-slate-900/5 rounded-lg ">
      {/* Render the image */}
      <img src={imgURL} alt={title} className='rounded-lg shadow-xl border-solid border-4 border-[#eee]'  />
      <h4 className='mt-2 text-[1.1rem] font-bold leading-normal'>{title}</h4>
      <p className='mt-2 text-[.88rem] text-[#777] leading-normal'>{des}</p>
      <a href="" className='font-[500] hover:underline m-2'>Read More</a>
    </div>
  );
};

export default BlogCard;
