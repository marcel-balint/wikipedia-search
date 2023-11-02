import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";

import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [page, setPage] = useState(0);

  const apiCall = async () => {
    try {
      if (searchQuery) {
        const response = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=${searchQuery}&sroffset=${page}`
        );
        const data = await response.json();
        console.log(data);
        setSearchResult(data.query);
      }
    } catch (error) {
      console.log("Something is wrong here..", error);
    }
  };

  const getFormData = (data) => {
    setSearchQuery(data);
  };

  const changePage = (page) => {
    page === "next" && setPage((prevVal) => prevVal + 1);
    page === "prev" &&
      setPage((prevVal) => (prevVal > 0 ? prevVal - 1 : prevVal));
  };

  useEffect(() => {
    apiCall();
  }, [searchQuery, page]);
  return (
    <>
      <SearchBar form={getFormData} />
      {searchResult ? (
        <SearchResults term={searchQuery} searchResult={searchResult} />
      ) : (
        ""
      )}
      {searchQuery ? (
        <div className="pagination-btns">
          <button onClick={() => changePage("prev")}>prev</button>
          {page}
          <button onClick={() => changePage("next")}>next</button>
        </div>
      ) : null}
    </>
  );
}

export default App;
