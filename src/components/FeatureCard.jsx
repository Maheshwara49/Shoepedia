const FeatureCard = ({ imgURL, title, des }) => {
    return (
      <div className="flex flex-1 flex-col items-center text-center w-full max-sm:w-full">
        <img src={imgURL} alt={title} className="w-[28px] h-[28px]" />
        <h4 className="mt-2 text-[1.1rem] font-semibold leading-normal">{title}</h4> {/* Fixed case issue (Title -> title) */}
        <p className="mt-2 font-[500] text-[.88rem] text-[#777] leading-normal">{des}</p>
      </div>
    );
  };
  
  export default FeatureCard;
  