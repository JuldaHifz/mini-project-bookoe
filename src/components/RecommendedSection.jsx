/* eslint-disable react/prop-types */

import BookCard from "./BookCard";
const RecommendedSection = ({ books }) => {
  // console.log("at RecSect" + books);
  return (
    <div className="max-w-[1240px] mx-auto mb-[113px]">
      {books.length === 0 && <p>Fetching Data</p>}
      {books.length > 0 && (
        <div className=" w-full grid grid-cols-2 gap-[120px]">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendedSection;
