export const CategoryCard=({imgURL, title , des})=> {
    return(
        <div className="category-card relative flex flex-1 flex-col item-center text-center w-full max-sm:w-full overflow-hidden">
            <img src={imgURL} alt="title" className='w-full h-auto border border-gray-200 rounded-md' />
            <h4 className="mt-2 text-[1.5rem] font-extrabold leading-normal absolute top-9 left-6 z-20">{title}</h4>
            <p className='heading mt-2 font-[500] text-[.88rem] text-[#777] leading-normal absolute top-20 left-6 z-20'>{des}</p>
            <button className=' category-btn text-[.88rem] font-bold absolute bottom-6 left-6 uppercase hover:underline '>Shop Now</button>
        </div>
    )
}
export default CategoryCard