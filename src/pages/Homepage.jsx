/* eslint-disable react/prop-types */
import RecommendedSection from "../components/RecommendedSection";
import MustReadContent from "../components/MustReadContent";
import RecommendedRow from "../components/RecommendedRow";
import { useState, useEffect } from "react";

const ENDPOINT = "https://bookapi.cm.hmw.lol/api/books";

const Homepage = () => {
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

  // Untuk recomendded Section
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [selectedBooksRow, setSelectedBooksRow] = useState([]);

  useEffect(() => {
    const topPicks = books.filter((book) => book.is_top_pick);
    const shuffledTopPicks = shuffleBooks(topPicks);
    const selectedTopPicks = shuffledTopPicks.slice(0, 4);
    const selectedTopPicksRow = shuffledTopPicks.slice(4, 8);

    setSelectedBooks(selectedTopPicks);
    setSelectedBooksRow(selectedTopPicksRow);
  }, [books]);

  const shuffleBooks = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <>
      <MustReadContent books={books} />
      <RecommendedSection books={selectedBooks} />
      <RecommendedRow books={selectedBooksRow} />
    </>
  );
};

export default Homepage;
