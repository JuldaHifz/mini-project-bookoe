const FooterCTA = () => {
  return (
    <div className=" w-[1240px] h-[300px] rounded-[15px] mx-auto bg-[#8170F2] flex flex-col justify-center items-center mb-[41px]">
      <p className=" w-[794px] font-semibold text-[42px] text-white text-center mb-[22px]">
        Join our newsletter to get our latest recommendation!
      </p>
      <div
        name="search-bar"
        className=" w-[452px] h-[50px] flex justify-between"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-[345px] h-full py-[13px] rounded-[8px]"
        />
        <button className="w-[99px] h-full bg-[#F1F0FE] text-[#8170F2] rounded-[8px]">
          Submit
        </button>
      </div>
    </div>
  );
};

export default FooterCTA;
