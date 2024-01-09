/* eslint-disable react/prop-types */
import BookCardRow from "./BookCardRow";

const RecommendedRow = ({ books }) => {
  // console.log("at RecSect" + books);
  return (
    <div className="max-w-[1240px] mx-auto mb-[107px]">
      {books.length === 0 && <p>Fetching Data</p>}
      {books.length > 0 && (
        <div className=" w-full flex flex-row justify-between">
          {books.map((book) => (
            <BookCardRow key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendedRow;
