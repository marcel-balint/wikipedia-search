import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";

import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const apiCall = async () => {
    try {
      if (searchQuery) {
        const response = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=${searchQuery}`
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

  useEffect(() => {
    apiCall();
  }, [searchQuery]);
  return (
    <>
      <SearchBar form={getFormData} />
      {searchResult ? (
        <SearchResults term={searchQuery} searchResult={searchResult} />
      ) : (
        ""
      )}
    </>
  );
}

export default App;
