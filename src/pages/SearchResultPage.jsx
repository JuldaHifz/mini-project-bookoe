/* eslint-disable react/prop-types */
import RecommendedRow from "../components/RecommendedRow";
import SearchLabel from "../components/SearchLabel";

const SearchResultPage = ({ searchResults }) => {
  const pickedResults = searchResults.slice(0, 4);

  return (
    <div>
      <SearchLabel />
      <RecommendedRow books={pickedResults} />
    </div>
  );
};

export default SearchResultPage;
