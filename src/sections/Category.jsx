import React from 'react'
import { CategoryData } from '../constants'
import { CategoryCard } from '../components/CategoryCard'
const Category = () => {
  return (
   <section id="category" className='max-container'>
    <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {
            CategoryData.map((category)=>(
                <CategoryCard key={category.title}{...category}/>

            ))
        }
    </div>
    <div className='container max-sm:mt-12 grid-cols-1 sm:grid-cols-2 grid-cp;s-3 xl'>
        
    </div>
   </section>
  )
}

export default Category;