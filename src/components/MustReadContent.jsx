/* eslint-disable react/prop-types */

const MustReadContent = ({ books }) => {
  console.log(books);
  // console.log(props);
  // if (!props || !props.length)
  if (!books || !books.length) {
    // Handle the case where props is undefined or an empty array
    return null; // or return a loading state, error message, etc.
  }

  const sortedDataRating = books.sort((a, b) => b.rating - a.rating);

  const firstBook = sortedDataRating[0];
  const secondBook = sortedDataRating[1];
  const thirdBook = sortedDataRating[2];
  // console.log(firstBook);

  return (
    <div>
      <div className="flex flex-row justify-around items-center max-w-[1240px] mx-auto mb-[77px] bg-[#F1F0FE] rounded-[15px]">
        <div className=" p-14">
          <span className=" text-[#8170F2] font-semibold text-[20px]">
            MUST READ
          </span>
          <p className="font-semibold text-[62px] mb-[16px] line-clamp-2">
            {firstBook.title}
          </p>
          <div className="mb-[30px] flex flex-row items-center ">
            <p className="font-medium text-[16px]">{firstBook.author.name}</p>
            <p className="bg-yellow-400 rounded-full w-[41px] h-[41px] flex items-center justify-center text-[16px] ml-[10px]">
              {firstBook.rating}
            </p>
          </div>
          <p className="text-[16px] mb-[16px]">{firstBook.synopsis}</p>
          <div className="flex flex-row gap-2">
            <button className="w-fit px-6 py-3 my-2 flex items-center rounded-md text-white bg-[#8170F2]">
              Read Book
            </button>
            <button className="w-fit px-6 py-3 my-2 flex items-center rounded-md border-2 border-[#8170F2] font-medium text-[#8170F2]">
              See All Recomendations
            </button>
          </div>
        </div>
        <div className="flex items-center w-full object-cover h-[390px] relative p-14">
          <img
            src={firstBook.image_url}
            alt="Image 3"
            className="absolute h-full object-fill z-20 rounded-[10px]"
          />

          <img
            src={secondBook.image_url}
            alt="Image 2"
            className="absolute h-[90%]  z-10 ml-[70px] rounded-[10px] "
          />

          <img
            src={thirdBook.image_url}
            alt="Image 1"
            className="absolute h-[80%] object-fill z-0 ml-[180px] rounded-[10px]"
          />
          {/* <img
            src={firstBook.image_url}
            alt=""
            className=" h-full object-fill"
          /> */}
          {/* <div className="relative h-full w-full flex">
            <img
              src={firstBook.image_url}
              alt="Image 3"
              className="absolute h-full object-fill z-20"
            />

            <img
              src={firstBook.image_url}
              alt="Image 2"
              className="absolute h-full object-fill z-10 ml-[80px] "
            />

            <img
              src={firstBook.image_url}
              alt="Image 1"
              className="absolute h-full object-fill z-0 ml-[160px] "
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MustReadContent;
