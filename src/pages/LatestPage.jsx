/* eslint-disable react/prop-types */

import LatestLabel from "../components/LatestLabel";
import RecommendedRow from "../components/RecommendedRow";
import { useState, useEffect } from "react";

const ENDPOINT = "https://bookapi.cm.hmw.lol/api/books";

const LatestPage = () => {
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

  const sortedDataLatest = books.sort((a, b) => {
    const dateA = new Date(a.created_at).getTime();
    const dateB = new Date(b.created_at).getTime();
    return dateB - dateA;
  });

  const latestBooks = sortedDataLatest.slice(0, 4);

  return (
    <div>
      <LatestLabel />
      <RecommendedRow books={latestBooks} />
    </div>
  );
};

export default LatestPage;
