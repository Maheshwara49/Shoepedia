import React from 'react'
import { RiStarFill, RiStarLine } from 'react-icons/ri'

const ShopCard = ({ imgURL, title, price }) => {
  return (
    <div className="shop-card relative flex flex-1 flex-col items-center text-center w-full max-sm:w-full">
      <img src={imgURL} alt={title} />
      <h4 className="mt-2 text-[1rem] font-[600] capitalize">{title}</h4>
      <p className="mt-2 font-[500] text-[.88rem] text-[#777] leading-normal">{price}</p>
      <div className="rating flex text-[#717fe0] mt-1">
        <RiStarFill />
        <RiStarFill />
        <RiStarFill />
        <RiStarFill />
        <RiStarLine />
      </div>
      <div className="flex gap-2 mt-4">
        {/* Buttons with visible borders */}
        <button className="text-[.7rem] uppercase border-2 border-solid border-[#777] text-black p-2 hover:bg-black hover:border-black hover:text-white mr-1">
          Buy
        </button>
        <button className="text-[.7rem] uppercase border-2 border-solid border-[#777] text-black p-2 hover:bg-black hover:border-black hover:text-white">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ShopCard;
