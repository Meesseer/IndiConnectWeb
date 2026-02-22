function InsightCard({ image, title, description }) {
  return (
    <div className="w-full
        max-w-[350px]
        h-[439px]
        bg-white
        rounded-[16px]
        p-4
        flex flex-col
        gap-2
        shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        transition-all
        duration-300
        ease-out
        hover:-translate-y-5
        hover:shadow-[0_16px_40px_rgba(0,0,0,0.15)]">
      {/* Title */}
      <h3 className="text-[24px] font-bold leading-[24px] text-black">
        {title}
      </h3>

      {/* Subtext */}
      <p className="text-[16px] font-semibold leading-[24px] text-[#737373]">
        {description}
      </p>
      <img
        src={image}
        alt={title}
        className="w-full h-[180px] object-cover rounded-[8px]"
      />

      {/* Spacer to push button down */}
      <div className="flex-grow"></div>

      {/* Button */}
      <button className="w-full h-[54px] rounded-[50px] border border-black text-black font-medium text-sm transition hover:bg-black hover:text-white">
        Read More
      </button>

    </div>
  );
}

export default InsightCard;