/* eslint-disable react/prop-types */
import RecommendedRow from "../components/RecommendedRow";
import TopPickLabel from "../components/TopPickLabel";
import { useState, useEffect } from "react";

const ENDPOINT = "https://bookapi.cm.hmw.lol/api/books";

const TopPickPage = () => {
  const [books, setBooks] = useState([]);

  // Fetching Books
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${ENDPOINT}`);
        const data = await response.json();

        setBooks(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error, show an error message, etc.
      }
    };

    fetchData();
  }, []);

  const shuffleBooks = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const topPicks = books.filter((book) => book.is_top_pick);
  const shuffledTopPicks = shuffleBooks(topPicks);
  const topPickBooks = shuffledTopPicks.slice(0, 4);

  return (
    <div>
      <TopPickLabel />
      <RecommendedRow books={topPickBooks} />
    </div>
  );
};

export default TopPickPage;
