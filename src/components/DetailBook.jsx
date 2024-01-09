/* eslint-disable react/prop-types */
const DetailBook = ({ book }) => {
  return (
    <div className="w-[1240px] mx-auto">
      <div className=" w-[408px] h-full flex justify-center items-center overflow-hidden">
        <img
          src={book.image_url}
          alt=""
          className=" object-cover w-full h-full "
        />
      </div>

      <div></div>
    </div>
  );
};

export default DetailBook;
