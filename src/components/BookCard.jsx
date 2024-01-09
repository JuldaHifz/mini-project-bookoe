/* eslint-disable react/prop-types */

const BookCard = ({ book }) => {
  return (
    <div className="flex flex-row w-[560px] h-[340px] justify-between">
      <div className=" w-[277px] h-full flex justify-center items-center overflow-hidden">
        <img
          src={book.image_url}
          alt=""
          className=" object-cover w-full h-full "
        />
      </div>
      <div className="flex flex-col w-[270px] h-full">
        <div>
          {" "}
          <h2 className=" font-semibold text-[24px] line-clamp-2">
            {book.title}
          </h2>
          <span className="text-[20px] mb-[30px]">by {book.author.name}</span>
          <p className="bg-yellow-400 rounded-full w-[41px] h-[41px] flex items-center justify-center text-[16px] mb-[27px]">
            {book.rating}
          </p>
          <p className=" text-[16px] leading-[24px] line-clamp-3 mb-[29px]">
            {book.synopsis}
          </p>
        </div>

        <button className=" w-full h-[50px] flex items-center justify-center rounded-md border-2 border-[#8170F2] font-medium text-[#8170F2] self-end">
          Read Book
        </button>
        {/* kalau jadi satu sama elemen yang lain malah gak bisa self end */}
      </div>
    </div>
  );
};

export default BookCard;
