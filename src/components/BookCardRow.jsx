/* eslint-disable react/prop-types */

const BookCardRow = ({ book }) => {
  return (
    <div className="flex flex-col w-[260px] h-[550px]">
      <div className=" w-full h-[340px] flex justify-center items-center overflow-hidden mb-[10px]">
        <img
          src={book.image_url}
          alt=""
          className=" object-cover w-full h-full "
        />
      </div>
      <div className=" w-full h-[210px]">
        <h2 className=" font-semibold text-[24px] leading-[32px] line-clamp-2 mb-[6px]">
          {book.title}
        </h2>
        <span className="text-[20px] mb-[14px]">by {book.author.name}</span>
        <p className=" text-yellow-400 rounded-full w-[25px] h-[25px] flex items-center justify-center text-[16px]">
          ★
        </p>
      </div>
      <button className="w-full px-6 py-3 my-2 flex justify-center items-center rounded-md border-2 border-[#8170F2] font-medium text-[#8170F2] self-end">
        Read Book
      </button>
    </div>
  );
};

export default BookCardRow;
